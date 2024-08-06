import crypto from "node:crypto";

export function hashUserData(userPassword: string) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hashUserPassword = crypto.scryptSync(userPassword, salt, 64);
    return `${hashUserPassword.toString('hex')}:${salt}`;
}

export function verifyUserPassword(storedPassword: string, givenPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(':');
    const hashedPasswordBuffer = Buffer.from(hashedPassword, 'hex');
    const givenPasswordBuffer = crypto.scryptSync(givenPassword, salt, 64);

    return crypto.timingSafeEqual(hashedPasswordBuffer, givenPasswordBuffer);
}