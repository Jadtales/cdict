'use client'
import {usePathname, useRouter} from "next/navigation";
import '@/public/cssStyles/userRegistrationForm.css'
import {useFormState} from 'react-dom'


// imported external functionalities
import {signUpUtil} from "@/utils/dbUtils/authUtils";
import {authMode} from "@/utils/dbUtils/authUtils";

interface FormState {
    validationErrors?: {
        email?: string;
        password?: string;
        username?: string;
    };
    success?: boolean;
}

export default function UserRegistrationForm(): React.ReactElement | void {

    const [formState, formAction] = useFormState<FormState, FormData>(authMode.bind(null, ), {
        validationErrors: {}
    });

    const router = useRouter()
    const pathname = usePathname()

    const handleToLoginPage = (): void => {
        const newPath: 'signup' | 'login' = pathname.endsWith('signup') ? 'login' : 'signup';
        router.push(`/routes/userRegistration/${newPath}`);
    }

    const handleUserRegistrationExistance = async function (userEmail: string, userPassword: any): Promise<boolean> {
        try {
            const response = await fetch('/api/check-user-existence', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userEmail, userPassword}),
            });
            const result = await response.json();
            return result.exists;
        } catch (error) {
            console.error('Error checking user existence:', error);
            return false;
        }
    }

    return (
        <div className="URF_container">
            <div className="URForm">
                <h1>CW</h1>

                <div className="form_welcoming">
                    <h2>Start learning new concepts.</h2>
                    <p>If you already have an account.
                        <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={handleToLoginPage}>
                            {pathname.endsWith('login') ? 'Sign Up' : 'LogIn'}
                        </span>
                    </p>
                </div>

                <div className="registrationForm">


                    {formState.validationErrors && Object.keys(formState.validationErrors).length > 0 && (
                        <div id='formErrorsStyling'>
                            {Object.entries(formState.validationErrors).map(([key, error]) => (
                                <div key={key}>{error}</div>
                            ))}
                        </div>
                    )}
                    <form action={formAction}>
                        {pathname.endsWith('signup') &&
                            <>
                                <input type="text" placeholder="your name" name='userName'/>
                                <input type="text" placeholder="your username" name='userUsername'/>
                            </>}
                        <input type="email" placeholder="your email" name='userEmail'/>
                        <input type="password" placeholder="create a password" name='userPassword'/>

                        <button style={{cursor: 'pointer'}}>
                            {pathname.endsWith('signup') ? 'Sign up' : 'LogIn'}
                        </button>
                    </form>


                </div>
            </div>

            <div className="URF_sideDesign">
                {pathname}
            </div>
        </div>
    )
}