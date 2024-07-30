'use server'
import {cookies} from "next/headers";
import {Lucia} from 'lucia'
import {NodePostgresAdapter} from "@lucia-auth/adapter-postgresql"
import pool from './dbUtils'
import {RequestCookies} from "next/dist/compiled/@edge-runtime/cookies";

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
    }
})

export async function createAuthSession(user_id: string): Promise<void> {
    const sessionResult = await lucia.createSession(user_id, {})
    const sessionCookie = lucia.createSessionCookie(sessionResult.id)

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

}

export async function verifyAuthUser() {
    const sessionCookie = cookies().get(lucia.sessionCookieName)

    if(!sessionCookie){
        return {
            user: null,
            session: null
        }
    }

    const sessionId = sessionCookie.value

    if(!sessionId){
        return {
            user: null,
            session: null
        }
    }

    const result = await lucia.validateSession(sessionId)

    try {
        if(result.session && result.session.fresh){
            const sessionCookie = lucia.createSessionCookie(result.session.id)
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        }

        if(!result.session){
            const sessionCookie = lucia.createBlankSessionCookie()
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        }
    }catch{}

    return result
}