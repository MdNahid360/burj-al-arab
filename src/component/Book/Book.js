import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams()
    return (
        <div className="container py-5">
            <div className="card">
                <div className="card-body">
                <h1>Let's Book a {bedType} room</h1>
             <Link to="/home">Deggerent Room ?</Link>
                </div>
                </div>           
        </div>
    );
};

export default Book;