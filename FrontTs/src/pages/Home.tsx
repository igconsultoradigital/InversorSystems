import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {

        (
            async () => {
                await fetch('https://localhost:7232/api/users/1', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
            }
        )();

    });

    return (
        <div>
            Home
        </div>
    );
};

export default Home;