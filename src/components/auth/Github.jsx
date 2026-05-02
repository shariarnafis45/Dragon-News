"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Github = () => {
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
          provider: "github",
        });
      };
    return (
        <button onClick={handleGithubSignIn} className='btn border-black'><FaGithub /> Login With Github</button>
    );
};

export default Github;