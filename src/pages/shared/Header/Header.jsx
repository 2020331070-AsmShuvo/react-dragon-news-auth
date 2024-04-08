import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-4xl font-bold border text-center'>
           <img src={logo} />
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