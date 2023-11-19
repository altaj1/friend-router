import React from 'react';
import { useParams } from 'react-router-dom';

const FriendEmail = () => {
    const params = useParams();
    return (
        <div>
            <p>Email:{params.email}</p>
        </div>
    );
};

export default FriendEmail;