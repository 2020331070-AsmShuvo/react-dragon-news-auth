import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-4xl font-bold space-y-2 text-center'>
           <div className='flex items-center justify-center'>
           <img src={logo} />
           </div>
           <p>Journalism without Fear or Favour</p>
           <p className='text-xl'>
            {
                moment().format('dddd, MMMM D, YYYY')
            }
           </p>
        </div>
    );
};

export default Header;