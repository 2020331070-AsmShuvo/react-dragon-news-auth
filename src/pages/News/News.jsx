import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import {useParams} from "react-router-dom";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header/>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className='text-4xl'>News Details</h2>
                    <p>{id}</p>
                </div>
                <div><RightSideNav/></div>
            </div>
            <h2>News details</h2>
        </div>
    );
};

export default News;