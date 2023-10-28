import { CircularProgress } from "@mui/material";
import { Container } from "./styledLoader";

export const Loader = () => {
    return (
        <Container>
            <CircularProgress />
        </Container>
    );
};