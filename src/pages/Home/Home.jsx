import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'><LeftSideNav/></div>
                <div className='md:col-span-2 border'>news coming soon</div>
                <div className='border'><RightSideNav/></div>   
            </div>
            
            <BreakingNews/>
        </div>
    );
};

export default Home;