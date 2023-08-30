// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../components/signUpForm/signUpForm';

import {
    // auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    // signInWithGoogleRedirect
} from '../../utility/firebase/firebase.utility';

const Authenticate = () => {

    // useEffect( () => {
    //     return ( async () => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //             console.log(userDocRef);
    //         }
    //     } );
    // }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign In with Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Redirect</button> */}
            <SignUpForm />
        </>
    );
}

export default Authenticate;