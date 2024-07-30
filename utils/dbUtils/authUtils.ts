'use server'

import {hashUserData, verifyUserPassword} from "@/utils/dbUtils/dataEncryption";
import {createUser, getUserByEmail} from "./dbUtils"
import {createAuthSession, verifyAuthUser} from "@/utils/dbUtils/sessionsUtils";
import {redirect} from "next/navigation";

interface FormErrorsKeys {
    email?: string;
    password?: string;
    username?: string;
    name?: string;
    allWrong?: string;
}

interface loginFormErrorsKeys {
    email?: string;
    password?: string;
}

interface SignUpResult {
    validationErrors?: FormErrorsKeys;
    success?: boolean;
}

interface logInResult {

}

export async function signUpUtil(prevState: SignUpResult, formData: FormData): Promise<SignUpResult> {
    const userEmail = formData.get('userEmail') as string;
    const userPassword = formData.get('userPassword') as string;
    const userUsername = formData.get('userUsername') as string;
    const userName = formData.get('userName') as string;

    let validationErrors: FormErrorsKeys = {};

    if (!userName) {
        validationErrors.name = 'You must enter your name'
    }

    if (!userEmail || userEmail.length > 200 || !userEmail.includes('@')) {
        validationErrors.email = 'Please enter a valid email address.';
    }

    if (!userPassword || userPassword.trim().length < 9) {
        validationErrors.password = 'Your password must be longer than 8 characters.';
    }

    if (!userUsername || userUsername.trim().length < 3) {
        validationErrors.username = 'Username must be at least 3 characters long.';
    }

    // Checking if all inputs are wrong
    if (Object.keys(validationErrors).length === 3) {
        validationErrors = {
            allWrong: 'All input fields are incorrect. Please check your entries.'
        };
    }

    if (Object.keys(validationErrors).length > 0) {
        return {validationErrors};
    }

    // hash user's data if user entered valid auth inputs
    const hashedPassword = hashUserData(userPassword)
    try {
        const userId = await createUser(userName, userUsername, userEmail, hashedPassword)
        await createAuthSession(userId)

    } catch (error: Error) {
        return {
            validationErrors: {
                email: `${error.errors}`
            }
        }
    }

    redirect('/routes/bookmarks')
}

export async function loginUser(prevState, formData: FormData) {
    const userEmail = formData.get('userEmail') as string
    const userPassword = formData.get('userPassword') as string

    const checkIfUserExists = await getUserByEmail(userEmail)

    if (!checkIfUserExists?.email) {
        return {
            validationErrors: {
                email: `Your email is incorrect or does not exist.`
            }
        }
    }

    const checkUserPassword = verifyUserPassword(checkIfUserExists.password, userPassword)

    if(!checkUserPassword){
        return {
            validationErrors: {
                password: 'Password is incorrect.'
            }
        }
    }

    await createAuthSession(checkIfUserExists.user_username)
    redirect('/routes/bookmarks')

}

// pass authentication validation based on user existance
export async function authMode(authMode: string, prevState: any, formData: FormData){
    if(authMode === 'login'){
        return loginUser(prevState, formData)
    }else{
        return signUpUtil(prevState, formData)
    }
}