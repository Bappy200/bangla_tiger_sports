import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from 'react'
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import firebaseConfig from './firebase.config';
import './Login.css'



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

function Login() {
    const [newUser, setNewUser] = useState(true);
    const [loginUser,setLoginUser] = useContext(userContext);
    const [error,setError] = useState('');
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photoURL: '',
    })

    
    const histry = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    //create facebook provider
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    //create google author provider
    const googleProvider = new firebase.auth.GoogleAuthProvider();


    //handler sing in 
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email, photoURL } = result.user;
                const userSignIn = {
                    isSignIn: true,
                    name: displayName,
                    email,
                    photoURL,
                    password: '',
                    error: '',
                    success: false,
                    
                }
                setUser(userSignIn);
                setLoginUser(result.user);
                console.log(userSignIn);
                console.log(loginUser)
                
                
                setError('successfully done')
                histry.push(from);
            }).catch((error) => {
                console.log(error)
            })
    }


    // //sign out headler
    // const handleSignOut = () => {
    //     firebase.auth().signOut().then(() => {
    //         const signOutUser = {
    //             isSignIn: false,
    //             name: '',
    //             email: '',
    //             photoURL: '',
    //         }
    //         setUser(signOutUser);
    //         setLoginUser(signOutUser);
    //     }).catch(error => {
    //         alert('Sign out error ', error)
    //     })
    // }

    // back to go page
  
      
    // submit heandler 
    const headlerSubmit = (event) => {
        if (user.confromPassword && newUser && user.email && user.password) {
            console.log(user.email, user.password)
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const newUser = { ...user };
                    newUser.error = ''
                   
                    setLoginUser(userCredential.user)
                    updateName(newUser.name)
                    setUser(newUser)
                    console.log('create bro',newUser);
                    
                    console.log('create bro baaa ', userCredential.user[0]);
                    histry.push(from);
                    setError('')

                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUser = { ...user };
                    newUser.error = errorMessage
                    newUser.success = false;
                    setError(errorMessage)
                    setUser(newUser)
                    console.log(errorCode, errorMessage)
                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    const newUser = { ...user };
                    newUser.error = '';
                    newUser.success = true;
                    setUser(newUser)
                    setLoginUser(userCredential.user)
                    setError('Login user')
                    histry.push(from);

                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    setError(errorMessage)
                });
        }
        event.preventDefault();
    }


    //update user name
    const updateName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function (result) {
            // Update successful.
            setError('Create account')
        }).catch(function (error) {
            // An error happened.
            console.log(error)
        });
    }

    //handler blur
    const handlerBlur = (event) => {
        let isFieldValide = true;
        setError('');
        if (event.target.name === 'email') {
            isFieldValide = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            isFieldValide = (event.target.value).length > 6 && /\d{1}/.test(event.target.value)
        }
        if (event.target.name === 'confromPassword') {
            isFieldValide = event.target.value === user.password;
        }
        if (isFieldValide) {
            const newUser = { ...user }

            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }
        else{
            setError('Please give currect input')
        }
    }


    //facabook login handler
    const handlerFacebook = (event) => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;

                // The signed-in user info.
                const user = result.user;
                console.log('User fb ', user)
                setLoginUser(user);
                setError('Successfully done')

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const accessToken = credential.accessToken;
                console.log('access Tocken : ', accessToken)

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log('fb error ', errorCode, errorMessage, email, credential)

                // ...
            });
    }
    return (

        <div className='main-content'>
        <div className='login-content'>
             <form  onSubmit={headlerSubmit}>
                    <h2>{newUser ? 'Create account':'Login'}</h2>
                   
                     <br />
                    {
                        newUser && <input type="text" name="name" onBlur={handlerBlur} placeholder="Enter your name" className='form-control' required />
                    }
                    <br />
                    <input type="email" name="email" onBlur={handlerBlur} placeholder="Enter your email address" className='form-control' required/>
                    <br />
                    <input type="password" name="password" onBlur={handlerBlur} placeholder="Enter your password" className='form-control' required/>
                    <br />
                    {
                        newUser && <input type="password" name="confromPassword" onBlur={handlerBlur} placeholder="Confrom password" className='form-control' required />
                    }
                    <p>{error}</p>
                    <input className='btn btn-primary mt-2 mb-3 d-block' type="submit" value={newUser ? 'Create account' : 'Login'} />
                </form>
                <p>You Dont have an account <span  onClick={() => setNewUser(!newUser)}  style={{textDecoration:'underLine',color:'red',cursor:'pointer'}}>{newUser ? 'Login':'create an account'}</span></p>
                <p style={{ color: 'red' }}>{user.error}</p>
                {/* {
                    user.success && <p style={{ color: 'green' }}>{!newUser ? 'Login in':'Create account'} success ful</p>
                } */}

               <div style={{display:'flex', justifyContent:'center'}}>
               
                <button className='btn btn-success d-block' onClick={handleSignIn}>{newUser ? 'Continue With Google':'Login With Google'}</button>
                
                <br />
                <button onClick={handlerFacebook} className='btn btn-success ml-2 d-block'>{newUser ? 'Continue With Facebook':'Login With Facebook'}</button>
               </div>

            </div>
        </div>
    );
}

export default Login;
