import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Container, ContainerBtn, ContainerFormControl, ContainerTextField,
    ContainerTitle, ErrorInput, Form, Title, Wrapper
} from './styledSignUpForm';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/themeContext/themeContext';
import { ThemeContextType } from '../../../contexts/themeContext/types';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUserDataToStorage } from '../../../store/userStore/userStore';
import { useNavigate } from 'react-router-dom';
import { AuthorizedContext, AuthorizedContextType } from '../../../contexts/authContext/authContext';

export const SignUpForm = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
    const themeContext = useContext<ThemeContextType>(ThemeContext);
    const { loginF } = useContext<AuthorizedContextType>(AuthorizedContext)
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            userName: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log("DATA", data)
        const auth = getAuth();
        console.log("Auth", auth)
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                console.log("registration", userCredential)
                setUserDataToStorage(userCredential.user)
                navigate("/");
                loginF()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("registration_error", error)
            });
    };

return (
    <Container>
        <Wrapper themestyles={themeContext.themeStyles}>
            <ContainerTitle>
                <Title>Sign up</Title>
            </ContainerTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ContainerTextField>
                    <TextField
                        {...register("userName", {
                            required: 'The Username field is not filled in',
                            minLength: {
                                value: 2,
                                message: "Minimum length is 2 characters.",
                            },
                            maxLength: {
                                value: 24,
                                message: "Maximum length is 28 characters.",
                            }
                        })}
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        sx={{ m: 0, width: '100%' }}
                        // size="small"
                        error={!!errors.userName}
                    />
                    {errors.userName && (
                        <ErrorInput>{errors.userName.message}</ErrorInput>
                    )}
                </ContainerTextField>
                <ContainerTextField>
                    <TextField
                        {...register("email", {
                            required: 'The E-mail field is not filled in',
                            pattern: {
                                value:
                                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                message:
                                    "Make sure that the entered email address is correct.",
                            }
                        })}
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        sx={{ m: 0, width: '100%' }}
                        // size="small"
                        error={!!errors.email}
                    />
                    {errors.email && (
                        <ErrorInput>{errors.email.message}</ErrorInput>
                    )}
                </ContainerTextField>
                <ContainerFormControl>
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            error={!!errors.password}
                        // size="small"
                        >Password</InputLabel>
                        <OutlinedInput
                            {...register("password", {
                                required: 'The Password field is not filled in',
                                pattern: {
                                    value:
                                        /^(?=\S*?[0-9])(?=\S*?[?!@#$%^&*])(?=\S*?[a-z-а-я])(?=\S*?[A-Zа-яА-Я])\S+$/,
                                    message:
                                        "Password must contain at least one digit, one special character '!@#$%^&*', one lowercase letter, one uppercase letter and should not contain any spaces.",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Minimum length is 8 characters.",
                                },
                                maxLength: {
                                    value: 24,
                                    message: "Maximum length is 28 characters.",
                                }
                            })}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            // size="small"
                            error={!!errors.password}
                        />
                        {errors.password && (
                            <ErrorInput>{errors.password.message}</ErrorInput>
                        )}
                    </FormControl>
                </ContainerFormControl>
                <ContainerFormControl>
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            error={!!errors.repeatPassword}
                        // size="small"
                        >Repeat password</InputLabel>

                        <OutlinedInput
                            {...register("repeatPassword", {
                                required: 'The Repeat password field is not filled in',
                                pattern: {
                                    value:
                                        /^(?=\S*?[0-9])(?=\S*?[?!@#$%^&*])(?=\S*?[a-z-а-я])(?=\S*?[A-Zа-яА-Я])\S+$/,
                                    message:
                                        "Reapeat password must contain at least one digit, one special character '!@#$%^&*', one lowercase letter, one uppercase letter, and should not contain any spaces.",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Minimum length is 8 characters.",
                                },
                                maxLength: {
                                    value: 24,
                                    message: "Maximum length is 28 characters.",
                                }
                            })}
                            id="outlined-adornment-password"
                            type={showRepeatPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowRepeatPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Repeat password"
                            // size="small"
                            error={!!errors.repeatPassword}
                        />
                        {errors.repeatPassword && (
                            <ErrorInput>{errors.repeatPassword.message}</ErrorInput>
                        )}
                    </FormControl>
                </ContainerFormControl>
                <ContainerBtn>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: "100%", textTransform: "none" }}
                    >Sign up
                    </Button>
                </ContainerBtn>
            </Form>
        </Wrapper>
    </Container>
);
}