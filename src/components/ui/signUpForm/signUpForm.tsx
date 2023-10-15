import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Container, ContainerBtn, ContainerCheckBox, ContainerCheckBoxAndHref,
    ContainerFormControl, ContainerTextField, ContainerTitle, ErrorEmail,
    ErrorPassword, Span, Title, Wrapper
} from './styledSignUpForm';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

export const SignUpForm = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    });

    const onSubmit = (data: any) => console.log("DataFromLogin", data);
    console.log(errors);

    return (
        <Container >
            <Wrapper>
                <ContainerTitle>
                    <Title>Sign up</Title>
                </ContainerTitle>
                <FormControl onSubmit={handleSubmit(onSubmit)}>
                    <ContainerTextField>
                        <TextField
                            {...register("name", {
                                required: 'Поле name не заполнено',
                                minLength: {
                                    value: 8,
                                    message: "Minimum length is 8 characters.",
                                },
                                maxLength: {
                                    value: 24,
                                    message: "Maximum length is 28 characters.",
                                }
                            })}
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            sx={{ m: 1, width: '100%' }}
                            error={!!errors.name}
                        />
                        {errors.name && (
                            <ErrorEmail>{errors.name.message}</ErrorEmail>
                        )}
                    </ContainerTextField>
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
                            sx={{ m: 1, width: '100%' }}
                            error={!!errors.email}
                        />
                        {errors.email && (
                            <ErrorEmail>{errors.email.message}</ErrorEmail>
                        )}
                    </ContainerTextField>
                    <ContainerFormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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
                    <ContainerFormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel
                                htmlFor="outlined-adornment-password"

                            >Repeat password</InputLabel>

                            <OutlinedInput
                                {...register("repeatPassword", {
                                    required: 'Поле repaet password не заполнено',
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
                                label="Repeat password"
                                error={!!errors.repeatPassword}
                            />
                            {errors.repeatPassword && (
                                <ErrorPassword>{errors.repeatPassword.message}</ErrorPassword>
                            )}
                        </FormControl>
                    </ContainerFormControl>
                    <ContainerBtn>
                        <Button
                            variant="contained"
                            sx={{ width: "100%" }}
                        >Sign in
                        </Button>
                    </ContainerBtn>
                </FormControl>
            </Wrapper>
        </Container>
    );
}