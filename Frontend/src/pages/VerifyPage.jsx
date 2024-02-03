import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function VerifyPage() {
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();
    const navigate = useNavigate();
    async function verify() {
        try {
            const {data} = await axios.get(`/api/user/${param.id}/verify/${param.token}`);
            setValidUrl(true);
            console.log(data);
            // alert("Success!");
            setTimeout(() => {
                navigate('/')
            }, 5000);
        } catch (error) {
            console.log("Verification failed. Try again!",error);
            setValidUrl(false);
        }
    }
    useEffect(() => {
        verify();

    }, [param])

    return (
        <div className='w-full h-H90vh flex justify-center items-center'>
            {validUrl ? <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjc4c2JrZXowbGJ0c2VkMXVidXRwZmZsbWZ3c29vcHJnd2tra3hiYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jPAudIbZS7AM3DdLqF/giphy.gif" alt="Verified" /> :
             <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnA5MGRxOGpjZDJicjFxdjU0bzd5dGl1Mjh1cHhhNG56ODc2YXI4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D7knpKzFbgDPBmdrVM/giphy.gif" alt="failed" />}
        </div>
    )
}
