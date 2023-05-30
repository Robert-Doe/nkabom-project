import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function useSupervisorAuth() {
    const accessToken= localStorage.getItem('accessToken')
    const navigate = useNavigate();

    useEffect(() => {
        // Function to check the authenticity and expiration of the access token
        const checkAuth = () => {
            if (!accessToken) {
                // Access token is missing, redirect to login page
                navigate('/login');
            } else {

                axios.post('http://localhost:9999/api/supervisors/token-verification',
                    {token: localStorage.getItem('accessToken')}).then(response => {
                    if(response.status===200){
                        navigate('/supervisor/dashboard')
                    }
                })
            }
        };

        checkAuth(); // Initial check on component mount
    }, [accessToken, navigate]);

    return null; // Custom hook doesn't render any UI
}

export default useSupervisorAuth