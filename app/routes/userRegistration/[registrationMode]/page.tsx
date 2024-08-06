'use client'
import {usePathname, useRouter} from "next/navigation";
import '@/public/cssStyles/userRegistrationForm.css'
import {useFormState} from 'react-dom'

type AuthMode = 'login' | 'signup'

// imported external functionalities
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
    const pathname: string = usePathname().split('/').at(-1) as AuthMode
    const router = useRouter()


    const [formState, formAction] = useFormState<FormState, FormData>(
        (state, formData) => authMode(state, pathname, formData),
        {
            validationErrors: {}
        });

    const handleToLoginPage = (): void => {
        const newPath: 'signup' | 'login' = pathname === 'signup' ? 'login' : 'signup';
        router.push(`/routes/userRegistration/${newPath}`);
    }


    return (
        <div className="URF_container">
            <div className="URForm">
                <h1>CW</h1>

                <div className="form_welcoming">
                    <h2>Start learning new concepts.</h2>
                    <p> {pathname === 'signup' ? 'If you already have an account. ' : 'Create an account. '}
                        <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={handleToLoginPage}>
                            {pathname === 'login' ? 'signup' : 'Login'}
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
                        {pathname === 'signup' &&
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