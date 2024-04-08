import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div className='p-2'>
            <h2 className='text-2xl my-4'>All Categories</h2>
            <p  className='space-y-2'>
                {
                    categories.map(category => <Link to={`/categoty/${category.id}`} className='text-xl font-semibold ml-4 block px-4' key={category.id}>{category.name}</Link>)
                }
            </p>
        </div>
    );
};

export default LeftSideNav;

