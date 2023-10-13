// import { TextField } from "@mui/material";
// import { Container } from "./styledLoginForm";


// export const LoginForm = () => {
//     return (
//         <div>
//             <Container>
//                 <div>
//                     <h1>Log In</h1>
//                 </div>
//                 <TextField
//                     id="outlined-basic"
//                     label="Outlined"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="filled-basic"
//                     label="Filled"
//                     variant="filled"
//                 />
//                 <TextField
//                     id="standard-basic"
//                     label="Standard"
//                     variant="standard"
//                 />
//             </Container>
//         </div>
//     );
// };


import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Container, ContainerBtn, ContainerCheckBox, ContainerCheckBoxAndHref,
    ContainerFormControl, ContainerTextField, ContainerTitle, ErrorEmail, ErrorPassword, Span, Title, Wrapper
} from './styledLoginForm';
import { useForm } from 'react-hook-form';
import { error } from 'console';
import { Button } from '@mui/material';

export const LoginForm = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: any) => console.log("DataFromLogin", data);
    console.log(errors);

    return (
        <form
            style={{ minHeight: "31.7vw" }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Container >
                    <Wrapper>
                        <ContainerTitle>
                            <Title>Sign in</Title>
                        </ContainerTitle>
                        <ContainerTextField>
                            <TextField
                                {...register("email", {
                                    required: 'Поле email не заполнено',
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
                                sx={{ m: 1, width: '40ch' }}
                                error={!!errors.email}
                            />
                            {errors.email && (
                                <ErrorEmail>{errors.email.message}</ErrorEmail>
                            )}
                        </ContainerTextField>
                        <ContainerFormControl>
                            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                                <InputLabel
                                    htmlFor="outlined-adornment-password"

                                >Password</InputLabel>

                                <OutlinedInput
                                    {...register("password", {
                                        required: 'Поле password не заполнено',
                                        pattern: {
                                            value:
                                                /^(?=\S*?[0-9])(?=\S*?[?!@#$%^&*])(?=\S*?[a-z-а-я])(?=\S*?[A-Zа-яА-Я])\S+$/,
                                            message:
                                                "Password must contain at least one digit, one special character '!@#$%^&*', one lowercase letter, one uppercase letter, and should not contain any spaces.",
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
                                    error={!!errors.password}
                                />
                                {errors.password && (
                                    <ErrorPassword>{errors.password.message}</ErrorPassword>
                                )}
                            </FormControl>
                        </ContainerFormControl>
                        <ContainerCheckBoxAndHref>
                            <ContainerCheckBox>
                                <label>
                                    <input type="checkbox" />
                                    <span>Remember me?</span>
                                </label>
                            </ContainerCheckBox>
                            <div>
                                <Span>Forgotten password?</Span>
                            </div>
                        </ContainerCheckBoxAndHref>
                        <ContainerBtn>
                            <Button
                                variant="contained"
                                sx={{ width: "100%" }}
                            >Sign in
                            </Button>
                        </ContainerBtn>
                    </Wrapper>
                </Container>
            </Box>
        </form>
    );
}