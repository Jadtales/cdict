'use server'
import {hashUserData, verifyUserPassword} from "@/utils/dbUtils/dataEncryption";
import {createUser, getUserByEmail} from "./dbUtils"
import {createAuthSession, verifyAuthUser} from "@/utils/dbUtils/sessionsUtils";
import {redirect} from "next/navigation";


export async function signUpUser(prevState, formData) {
    const userEmail = formData.get('userEmail')
    const userPassword = formData.get('userPassword')
    const userUsername = formData.get('userUsername')
    const userName = formData.get('userName')

    let validationErrors = {};

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
        const user_username = await createUser(userName, userUsername, userEmail, hashedPassword)
        await createAuthSession(user_username)

    } catch (error) {
        return {
            validationErrors: {
                email: `${error.errors}`
            }
        }
    }

    redirect('/routes/bookmarks')
}

export async function loginUser(prevState, formData) {
    const userEmail = formData.get('userEmail')
    const userPassword = formData.get('userPassword')

    const checkIfUserExists = await getUserByEmail(userEmail)

    if (!checkIfUserExists?.email) {
        return {
            validationErrors: {
                email: 'Your email is incorrect or does not exist.'
            }
        }
    }

    const checkUserPassword = verifyUserPassword(checkIfUserExists.password, userPassword)
    if (!checkUserPassword) {
        return {
            validationErrors: {
                password: 'Password is incorrect.'
            }
        }
    }


    await createAuthSession(checkIfUserExists.email)
    redirect('/routes/bookmarks')


}

// pass authentication validation based on user existance
export async function authMode(prevState, authMode, formData) {
    if (authMode === 'signup') {
        return signUpUser(prevState, formData)
    }
    return loginUser(prevState, formData)
}

