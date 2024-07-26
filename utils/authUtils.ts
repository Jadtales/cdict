'use server'

import {hashUserData} from "@/utils/dataEncryption";
import {createUser} from "./dbUtils"
import {redirect} from "next/navigation";

interface FormErrorsKeys {
    email?: string;
    password?: string;
    username?: string;
    name?: string;
    allWrong?: string;
}

interface SignUpResult {
    validationErrors?: FormErrorsKeys;
    success?: boolean;
}

export async function signUpUtil(prevState: SignUpResult, formData: FormData): Promise<SignUpResult> {
    const userEmail = formData.get('userEmail') as string;
    const userPassword = formData.get('userPassword') as string;
    const userUsername = formData.get('userUsername') as string;
    const userName = formData.get('userName') as string;

    let validationErrors: FormErrorsKeys = {};

    if(!userName){
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
        return { validationErrors };
    }

    // hash user's data if user entered valid auth inputs
    const hashedPassword = hashUserData(userPassword)
    try {
        await createUser(userName, userEmail, hashedPassword, userUsername)
    }catch (error){
        return {
            validationErrors: {
                email: `${error.errors}`
            }
        }
    }

    redirect('/routes/bookmarks')
}