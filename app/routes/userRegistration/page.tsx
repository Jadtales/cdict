import '@/public/cssStyles/userRegistrationForm.css'

export default function UserRegistrationForm(): void {
    return (
        <div className="URF_container">
            <div className="URForm">
                <h1>CW</h1>

                <div className="form_welcoming">
                    <h2>Start learning new concepts.</h2>
                    <p>If you alraedy have an account. <span style={{textDecoration: 'underline', cursor: 'pointer'}}>Logi in</span></p>
                </div>

                <div className="registrationForm">
                    <input type="text" placeholder="your username"/>
                    <input type="email" placeholder="your email"/>
                    <input type="password" placeholder="create a password"/>
                    <button type="submit">Sign up</button>
                </div>
            </div>

            <div className="URF_sideDesign">
                blabla
            </div>
        </div>
    )
}