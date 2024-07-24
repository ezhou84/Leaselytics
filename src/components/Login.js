import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doCreateUserWithEmailAndPassword } from '../firebase/auth.js';
import { useAuth } from '../contexts/authContext/index.jsx';
import { Box, Button, Divider, Grid, TextField, Typography} from '@mui/material';

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const onSignIn = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    const onSignUp = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            {isSignUp ? 
                <Box className="login-form" style={{ margin: 'auto', width: '50%' }} sx={{ py: 2 }}>
                    <Typography sx={{ my: 1, fontSize: 24, color: 'text.secondary', fontWeight: 'bold' }}>
                        Welcome Back
                    </Typography>
                    <TextField label="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ width: '75%' }} sx={{ my: 1 }}/>
                    <TextField label="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ width: '75%' }} sx={{ my: 1 }} />
                    <Button
                        variant="contained"
                        style={{ width: '75%' }}
                        sx={{
                        my: 1,
                        backgroundColor: '#4877ee',
                        '&:hover': {
                            backgroundColor: '#1e3264'
                        }
                        }}
                        onClick={onSignIn}>
                        <b>Sign In</b>
                    </Button>
                    <Typography sx={{ my: 1 }}>Don't have an account? <Link onClick={toggleSignUp}><b>Sign up</b></Link></Typography>
                    <Grid container alignItems="center" justifyContent="center" spacing={1} sx={{ my: 1 }}>
                        <Grid item xs={5}>
                            <Divider />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                            OR
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Divider />
                        </Grid>
                    </Grid>
                    <Button
                        variant="outlined"
                        style={{ width: '75%' }}
                        sx={{
                        my: 1
                        }}
                        onClick={onGoogleSignIn}>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Typography variant="body1" style={{ color: 'black' }}>
                            <b>Continue with Google</b>
                        </Typography>
                    </Button>
                </Box> : 
                <Box className="login-form" style={{ margin: 'auto', width: '50%' }} sx={{ py: 2 }}>
                    <Typography sx={{ my: 1, fontSize: 24, color: 'text.secondary', fontWeight: 'bold' }}>
                        Create a New Account
                    </Typography>
                    <TextField label="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ width: '75%' }} sx={{ my: 1 }} />
                    <TextField label="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ width: '75%' }} sx={{ my: 1 }} />
                    <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} style={{ width: '75%' }} sx={{ my: 1 }} />
                    <Button
                        variant="contained"
                        style={{ width: '75%' }} 
                        sx={{
                        my: 1,
                        backgroundColor: '#4877ee',
                        '&:hover': {
                            backgroundColor: '#1e3264'
                        }
                        }}
                        onClick={onSignUp}>
                        <b>Sign Up</b>
                    </Button>
                    <Typography sx={{ my: 1 }}>
                        Already have an account? <Link onClick={toggleSignUp}><b>Continue</b></Link>
                    </Typography>
                </Box>
            }
        </div>
    )
}

export default Login;