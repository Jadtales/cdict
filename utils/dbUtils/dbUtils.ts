import {Pool} from 'pg';
import {config} from 'dotenv';

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
export async function createUser(name: any, username: string, email: string, password: string): Promise<any> {
    try {
        const insertingQuery = `INSERT INTO users_db (user_name, user_username, user_email, user_password)
                                VALUES ($1, $2, $3, $4)`;
        const newInsertedUser = await pool.query(
            insertingQuery,
            [name, username, email, password]
        );

        console.log('User was created successfully');
        return newInsertedUser.rows[newInsertedUser.rows.length - 1]
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }

}

interface User {
    email: string;
    password: string;
    user_username: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {

    const insertEmailQuery = 'SELECT user_email, user_password, user_username FROM users_db WHERE user_email = $1';
    const {rows} = await pool.query(insertEmailQuery, [email]);

    if (rows.length > 0) {
        return {
            email: rows[0].user_email,
            password: rows[0].user_password
        };
    } else {
        return null; // No user found with the given email
    }
}

export default pool