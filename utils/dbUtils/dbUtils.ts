import {Pool} from 'pg';
import {config} from 'dotenv';
import ShortUniqueId from "short-unique-id";
config()

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
});

pool.on('connect', () => console.log('--Connected--'));
pool.on('error', (err): void => console.error('Connection error', err.stack))

console.log(process.env.DATABASE_NAME)

// Function to insert data into the database (storing user auth)
export async function createUser(name: any, username: string, email: string, password: string): Promise<string> {
    try {
        const insertingQuery = `INSERT INTO users_db (user_name, user_username, user_email, user_password)
                                VALUES ($1, $2, $3, $4) RETURNING *`;
        const result = await pool.query(insertingQuery, [name, username, email, password]);

        if (result.rows.length > 0) {
            console.log('--User was created successfully.--');
            console.log(result.rows)
            return result.rows.at(-1).user_username
        } else {
            throw new Error('User creation failed, no rows returned.');
        }
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

interface User {
    email: string;
    password: string;
    // user_username?: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {
    const insertEmailQuery = 'SELECT user_email, user_password FROM users_db WHERE user_email = $1';
    const {rows} = await pool.query(insertEmailQuery, [email]);

    if (rows.length > 0) {
        return {
            email: rows[0].user_email as string,
            password: rows[0].user_password as string
        };
    } else {
        return null; // user is not found in the db
    }
}

// for inserting dict data into the db
const uid = new ShortUniqueId({length: 10})
export async function insertCwDictIntoDb(keyword: string, definition: string, relatedKeywords: string[]): Promise<void> {
    const queryInsertion = 'INSERT INTO csdictionary (topic_name,topic_relatedkeyword,topic_information,topic_id) VALUES ($1, $2, $3, $4)'

    const topicId = `${keyword.substring(0,3)}${uid.randomUUID()}`

    await pool.query(queryInsertion, [keyword, definition, relatedKeywords, topicId])
}

export default pool