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
export async function createUser(name: string, email: string, password: string, username: string): Promise<any> {
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
