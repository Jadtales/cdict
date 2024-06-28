"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
var fs = require("fs");
var csDict = fs.readFileSync('../csDict.html', 'utf8');
var cheer = cheerio.load(csDict);
// finding all dic elements with the class 't'
var getElementsWithClassT = function (keywordRegex, keywordLower, keyword, results) {
    cheer('div.t').each(function (_, element) {
        var elementText = cheer(element).text().trim();
        var firstWordMatch = elementText.split(' ')[0].toLowerCase();
        var wholeWordMatch = elementText.toLowerCase().startsWith(keywordLower);
        // Check if the first word starts with the specified letter or if the whole element text matches the keyword, and if it has the correct class
        if ((keywordRegex.test(firstWordMatch) || wholeWordMatch) && cheer(element).hasClass('fc0')) {
            var definition_1 = '';
            var relatedKeywords = [];
            // Include the text from spans within the current div.t element
            cheer(element).contents().each(function (_, spanElement) {
                var spanText = cheer(spanElement).text().trim();
                definition_1 += ' ' + spanText;
            });
            // extracting related keywords from span.fc0
            var currentElement = cheer(element);
            while (currentElement.length > 0) {
                var spansWithFC0Class = currentElement.find('span.fc0');
                if (currentElement.length === 0) {
                    break;
                }
                var foundKeywords = spansWithFC0Class.text().trim();
                foundKeywords.startsWith('*') ?
                    relatedKeywords.push(foundKeywords) :
                    "".concat(foundKeywords, " Does not start with an asterisk");
                currentElement = currentElement.next();
            }
            // Traverse next siblings until encountering another relevant keyword
            var nextElement = cheer(element).next();
            while (nextElement.length > 0) {
                var nextText = nextElement.text().trim();
                var nextSpans = nextElement.find('span.fc0');
                // Stop if another keyword with the same class is encountered
                if (nextSpans.length > 0) {
                    break;
                }
                // Add text to the definition
                if (nextElement.is('br')) {
                    definition_1 += '\n'; // Add newline for line breaks
                }
                else {
                    definition_1 += ' ' + nextText;
                }
                // Move to the next sibling element
                nextElement = nextElement.next();
            }
            results.push({
                word: keyword,
                definition: definition_1.trim(),
                relatedKeywords: relatedKeywords.length > 0 ?
                    relatedKeywords
                        .toString()
                        .split('*')
                        .filter(function (rk) { return rk.trim() !== ''; }) :
                    'No related keyword is found'
            });
        }
    });
};
// Function to get all keywords that start with the same first letter and their definitions
var getDictList = function (keyword) {
    var keywordLower = keyword.toLowerCase().trim();
    // Regular expression to match the entire keyword
    var keywordRegex = new RegExp("^".concat(keywordLower), 'i');
    var results = [];
    // Find all div elements with class 't'
    getElementsWithClassT(keywordRegex, keywordLower, keyword, results);
    return results;
};
// Example usage
var result = getDictList('abduction');
result.forEach(function (entry) {
    console.log("Word: ".concat(entry.word, "\nDefinition: ").concat(entry.definition, "\nRelated keywords: ").concat(entry.relatedKeywords));
});
