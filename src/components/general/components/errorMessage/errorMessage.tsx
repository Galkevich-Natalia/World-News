import { ContainerErrorMessage } from "./styledErrorMessage";

interface ErrorMessageProps {
    errorText: string
};

export const ErrorMessage = ({errorText}: ErrorMessageProps) => {
    return(
        <ContainerErrorMessage>
            {errorText}
        </ContainerErrorMessage>
    );
};