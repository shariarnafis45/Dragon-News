import React from 'react';
import logo  from "@/assets/logo.png"
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    const date = format(new Date(), "EEEE, MMMM dd , yyyy");
    return (
        <div className='max-w-7xl mx-auto py-10 text-center px-5'>
            <Image src={logo} height={300} width={300} alt='logo' className='mx-auto'>

            </Image>
            <p className=' text-[#706F6F] mt-4'>Journalism Without Fear or Favour</p>
            <p className='font-medium'>{date}</p>
        </div>
    );
};

export default Header;