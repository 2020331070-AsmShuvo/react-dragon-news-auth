import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData} from "react-router-dom";
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div>
            <Header/>
            <Navbar/>
            <BreakingNews/>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='p-2'><LeftSideNav/></div>
                <div className='md:col-span-2 p-2'>
                    {
                        news.map(it => <NewsCard key={it.id} news={it}/>)
                    }
                </div>
                <div className='border'><RightSideNav/></div>   
            </div>
            
            
        </div>
    );
};

export default Home;