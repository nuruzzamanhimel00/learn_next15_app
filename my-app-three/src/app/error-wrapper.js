'use client'
import { useState } from "react";
export default function ErrorWrapper({children}){
    const [error, setError] = useState(false);
    if(error){
        throw new Error('Random error')
    }

    const clickButton = () => setError(true);

    return (
        <>
            {/* <button
            onClick={clickButton}
            style={{
                color: 'white',
                fontSize: '20px',
                textAlign: 'center',
                backgroundColor: 'red'
            }}>Error wrapper</button> */}
            {children}
        </>
    );
}