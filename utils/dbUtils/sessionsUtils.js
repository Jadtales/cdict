'use server'
import {cookies} from "next/headers";
import {cache} from 'react'
import {Lucia} from 'lucia'
import {NodePostgresAdapter} from "@lucia-auth/adapter-postgresql"
import pool from './dbUtils'

const adapter = new NodePostgresAdapter(pool, {
    user: "users_db",
    session: "users_sessions"
})

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production'
        }
    },
    getUserAttributes: (attributes) => {
        return {
            // specify user attributes you want to expose
            username: attributes.username,
            // add other attributes as needed
        };
    }
});

export async function createAuthSession(user_username) {
    try {
        const sessionResult = await lucia.createSession(user_username, {});
        if (!sessionResult) throw new Error('Session result is undefined.');

        const sessionCookie = lucia.createSessionCookie(sessionResult);
        if (!sessionCookie) throw new Error('Session cookie is undefined.');

        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    } catch (error) {
        throw error
    }
}


export const verifyAuthUser = cache(async () => {
    const sessionAlreadyExists = cookies().get(lucia.sessionCookieName)
    if (!sessionAlreadyExists){
        return null
    }


    const {session, user} = await lucia.validateSession(sessionAlreadyExists);
    console.log('validation result-->', session, user);
    // if (session && session.fresh) {
    //     const sessionCookie = lucia.createSessionCookie(session.id);
    //     cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    // }

    // if (!session) {
    //     // Comment out the following lines to prevent deleting cookies unexpectedly
    //     console.log('session not valid');
    //     const sessionCookie = lucia.createBlankSessionCookie();
    //     cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    //     return null; // Explicitly return null if session is not valid
    // }

    return {session, user}

});