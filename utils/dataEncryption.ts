import crypto, {Hash} from "node:crypto";

export function hashUserData(userPassword: string){
    const hashSalting = crypto.randomBytes(16).toString("hex")

    const hashUserPassword = crypto.scryptSync(userPassword, hashSalting, 64)
    return hashUserPassword.toString('hex') + ":" + hashUserPassword
}

export function verifyUserData(storedPassword: string, hashedUserPassword: string){
    const [hashedPassword, salt] = storedPassword.split(':')
    const hashedPasswordBuffer = Buffer.from(hashedPassword).toString('hex')
    const givenPasswordBuffer = crypto.scryptSync(hashedPassword, salt, 64)

    return crypto.timingSafeEqual(hashedPasswordBuffer, givenPasswordBuffer)
}