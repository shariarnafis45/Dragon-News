import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import SwimmingImg from "@/assets/swimming.png"
import ClassImg from "@/assets/class.png"
import PlayGroundImg from "@/assets/playground.png"
import Goggle from '@/components/auth/Goggle';
import Github from '@/components/auth/Github';

const RightSideBar = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl">Login With</h2>
            <div className='flex flex-col gap-3 mt-5'>
                <Goggle/>
                <Github/>
            </div>
            <div className='flex flex-col gap-4 mt-5'>
                <h2 className="font-semibold   ">Find Us On</h2>
                <button className='btn justify-start btn-md'><FaFacebook/> Facebook</button>
                <button className='btn justify-start btn-md'><FaTwitter/> Twitter</button>
                <button className='btn justify-start btn-md'><FaInstagram/> Instagram</button>
            </div>
            <div className='flex flex-col gap-4 mt-5 bg-[#F3F3F3] p-4'>
                <h2 className="font-semibold   ">Q-Zone</h2>
                <div className='space-y-4'>
                    <Image src={SwimmingImg} height={250} width={250} alt='a baby swimming'/>
                    <Image src={ClassImg} height={250} width={250} alt='a baby swimming'/>
                    <Image src={PlayGroundImg} height={250} width={250} alt='a baby swimming'/>
                </div>

            </div>
        </div>
    );
};

export default RightSideBar;