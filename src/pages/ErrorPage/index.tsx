import { useNavigate, useLocation } from 'react-router-dom';
import Button from "components/Button";
import { SErrorPageContainer, SErrorMessage } from './ErrorPage.styles';


const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        navigate(-1);
    };

    const isNotFound = location.pathname === '/404';

    return (
        <SErrorPageContainer>
            <SErrorMessage>
                {isNotFound ? (
                    <>
                        <h1>404 - Page Not Found</h1>
                        <p>Sorry, the page you are looking for does not exist.</p>
                    </>
                ) : (
                    <>
                        <h1>OOPS! Something went wrong!</h1>
                        <p>We're sorry, but something went wrong. Please try again later.</p>
                    </>
                )}
                <Button onClick={handleGoBack}>Go to Home</Button>
            </SErrorMessage>
        </SErrorPageContainer>
    );
};

export default ErrorPage;
