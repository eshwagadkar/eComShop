// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../components/signUpForm/signUpForm';
import SignInForm from '../../components/signInForm/signInForm';

import './authentication.styles.scss';

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

    return (
        <>
        <div className='authenticaton-container'>
            <SignInForm />
            <SignUpForm />
        </div>
        </>
    );
}

export default Authenticate;