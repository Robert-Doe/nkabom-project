import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useInternAuth() {
    const navigate = useNavigate();

    const accessToken= localStorage.getItem('accessToken')

    useEffect(() => {
        // Function to check the authenticity and expiration of the access token
        const checkAuth = () => {
            if (!accessToken) {
                // Access token is missing, redirect to login page
                navigate('/login');
            } else {
                // Perform additional checks, such as token decoding and expiration validation
                // You can use your preferred JWT library or authentication mechanism here

                // Example: Simulating token expiration after 1 hour
                const expirationTime = 60 * 60 * 1000; // 1 hour in milliseconds
                const tokenExpiration = localStorage.getItem('tokenExpiration');
                const currentTime = new Date().getTime();

                if (currentTime - tokenExpiration > expirationTime) {
                    // Access token has expired, redirect to login page
                    navigate('/login');
                }
            }
        };

        checkAuth(); // Initial check on component mount
    }, [accessToken, navigate]);

    return null; // Custom hook doesn't render any UI
}

export default useInternAuth