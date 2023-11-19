import React from 'react';
import friend from './friend.css'
import { Link } from 'react-router-dom';

const Friend = (props) => {
    console.log(props)
    
    return (
        <div className='friend'>
            <h3>Name:{props.friend.name}</h3>
            <p>id: <Link to ={`/about/${props.friend.id}`} >show detail of {props.friend.id}</Link></p>
            <p>email: <Link to = {`/email/${props.friend.email}`} >Show email {props.friend.email}</Link> </p>
        </div>
    );
};

export default Friend;