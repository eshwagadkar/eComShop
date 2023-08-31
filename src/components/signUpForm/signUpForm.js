import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utility';

import FormInput from "../formInput/formInput";
import Button from "../button/button";

import './signup-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields)

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

        // Password validation
        if(password !== confirmPassword){
            alert('Password do not match');
            return;
        }

        try{
            const { user } =  await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        }catch(error){
            if(error.code ===  'auth/email-already-in-use'){
                alert('Cannot create user, email already in use.')
            } else {
                console.log('Error', error);
            }
        }
    }

    return <>
        <div className='signup-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler} >
                {/* Display Name Input */}
                <FormInput label='Display Name' type='text'  onChange={changeHandler} name='displayName' value={displayName} required />
                {/* Email Input */}
                <FormInput label='Email' type='email'  onChange={changeHandler} name='email' value={email} required />
                {/* Password */}
                <FormInput label='Password' type="password"  onChange={changeHandler} name='password' value={password} required />
                {/* Confirm Password */}
                <FormInput label='Confirm Password' type="password"  onChange={changeHandler} name='confirmPassword' value={confirmPassword} required />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    </>
}

export default SignUpForm;