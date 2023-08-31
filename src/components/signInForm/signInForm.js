import { useState } from "react";

import { 
     signInWithGooglePopup,
     createUserDocumentFromAuth,
     signInAuthUserWithEmailAndPassword
} from '../../utility/firebase/firebase.utility';

import FormInput from "../formInput/formInput";
import Button from "../button/button";

import './signin-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields)

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const changeHandler = (event) => {
       const {name, value} = event.target;

       setFormFields({
        ...formFields,
        [name]: value
       })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password': 
                   alert('Incorrect password entered.');
                   break;
                case 'auth/user-not-found': 
                   alert('No user associated with this email.');
                   break;
                default:
                    console.log(error);
            }
        }
        
    }
     
    return <>
        <div className='signup-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler} >
                {/* Email Input */}
                <FormInput label='Email' type='email'  onChange={changeHandler} name='email' value={email} required />
                {/* Password */}
                <FormInput label='Password' type="password"  onChange={changeHandler} name='password' value={password} required />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div>
    </>
}

export default SignInForm;