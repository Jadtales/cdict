import * as cheerio from 'cheerio';
import * as fs from 'fs';

// debugging consoles
interface WordDefinitionInterface {
    word: string;
    definition: string;
    relatedKeywords: string[] | string; // related keywords always start with an asterisk and have class "fc0"
}

const csDict = fs.readFileSync('../csDict.html', 'utf8');
const cheer = cheerio.load(csDict);

// finding all dic elements with the class 't'
const getElementsWithClassT = (keywordRegex: RegExp, keywordLower: string, keyword: string, results: WordDefinitionInterface[]) => {
    cheer('div.t').each((_, element) => {
        const elementText = cheer(element).text().trim();
        const firstWordMatch: string = elementText.split(' ')[0].toLowerCase();
        const wholeWordMatch: boolean = elementText.toLowerCase().startsWith(keywordLower);

        // Check if the first word starts with the specified letter or if the whole element text matches the keyword, and if it has the correct class
        if ((keywordRegex.test(firstWordMatch) || wholeWordMatch) && cheer(element).hasClass('fc0')) {
            let definition = '';
            const relatedKeywords: string[] = [];

            // Include the text from spans within the current div.t element
            cheer(element).contents().each((_, spanElement) => {
                const spanText = cheer(spanElement).text().trim();
                definition += ' ' + spanText;
            });


            // extracting related keywords from span.fc0
            let currentElement = cheer(element)
            while (currentElement.length > 0) {
                const spansWithFC0Class = currentElement.find('span.fc0');

                if (currentElement.length === 0) {
                    break
                }
                const foundKeywords = spansWithFC0Class.text().trim()
                foundKeywords.startsWith('*') ?
                    relatedKeywords.push(foundKeywords) :
                    `${foundKeywords} Does not start with an asterisk`

                currentElement = currentElement.next()
            }

            // Traverse next siblings until encountering another relevant keyword
            let nextElement = cheer(element).next();
            while (nextElement.length > 0) {
                const nextText = nextElement.text().trim();
                const nextSpans = nextElement.find('span.fc0');

                // Stop if another keyword with the same class is encountered
                if (nextSpans.length > 0) {
                    break;
                }


                // Add text to the definition
                if (nextElement.is('br')) {
                    definition += '\n'; // Add newline for line breaks
                } else {
                    definition += ' ' + nextText;
                }

                // Move to the next sibling element
                nextElement = nextElement.next();
            }

            results.push({
                word: keyword,
                definition: definition.trim(),
                relatedKeywords: relatedKeywords.length > 0 ?
                    relatedKeywords
                        .toString()
                        .split('*')
                        .filter(rk => rk.trim() !== '') :
                    'No related keyword is found'
            });
        }
    });
}

// Function to get all keywords that start with the same first letter and their definitions
export const getDictList = (keyword: string): WordDefinitionInterface[] => {
    const keywordLower: string = keyword.toLowerCase().trim();
    // Regular expression to match the entire keyword
    const keywordRegex: RegExp = new RegExp(`^${keywordLower}`, 'i');
    const results: WordDefinitionInterface[] = [];

    // Find all div elements with class 't'
    getElementsWithClassT(keywordRegex, keywordLower, keyword, results)

    return results;
}



