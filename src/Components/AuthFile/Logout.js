import axios from 'axios';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL, TOKEN } from '../../Backend/config';

const Logout = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('$Token')) {
            axios.get(`${BASE_URL}/logout`, {
                headers: {
                    Authorization: TOKEN
                }
            }).then((response) => {
                console.log(response);
                localStorage.clear();
                navigate("/Login");
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [navigate]);
}

export default Logout
