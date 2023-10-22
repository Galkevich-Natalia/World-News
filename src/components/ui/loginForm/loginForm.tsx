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
    Container, ContainerBtn, ContainerFormControl, ContainerText, ContainerTextField,
    ContainerTitle, Description, ErrorInput, LinkOnSignUp, TextAboutSignUp, Title, Wrapper
} from './styledLoginForm';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../../themeContext/themeContext';
import { ThemeContextType } from '../../../themeContext/types';

export const LoginForm = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const themeContext = useContext<ThemeContextType>(ThemeContext);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: any) => console.log("DataFromLogin", data);
    console.log(errors);

    const handleOnSignUp = () => navigate("/signup");

    return (
        <Container >
            <Wrapper themestyles={themeContext.themeStyles} >
                <ContainerTitle>
                    <Title>Sign in</Title>
                </ContainerTitle>
                <Description>
                    <p>Welcome back! Please enter your details</p>
                </Description>
                <FormControl onSubmit={handleSubmit(onSubmit)}>
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
                            sx={{
                                m: 0,
                                width: '100%',
                                borderRadius: '5px'
                            }}
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
                    <ContainerBtn>
                        <Button
                            variant="contained"
                            sx={{ width: "100%", textTransform: "none" }}
                        >Sign in
                        </Button>
                    </ContainerBtn>
                    <ContainerText>
                        <TextAboutSignUp>Don't have an account? {' '}
                            <LinkOnSignUp
                                onClick={handleOnSignUp}>
                                Sign up
                            </LinkOnSignUp>
                        </TextAboutSignUp>
                    </ContainerText>
                </FormControl>
            </Wrapper>
        </Container>
    );
}