"use client"

import { userService } from '@/app/lib/service/userService';
import { useState } from 'react';

export default function login() {

    const [usernameValue, setUnValue] = useState("");
    const [passwordValue, setPwdValue] = useState("");

    function signIn() {
        userService.saveUser({
            id: userService.arrayLength(),
            username: usernameValue,
            password: passwordValue,
            programs: null
        })
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen flex-col'>
                <h1 className='font-bold text-2xl mb-16'>Sign In</h1>
                <form action={signIn} className='max-w-sm mx-auto'>
                    <div className='mb-5'>
                        <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >Username</label>
                        <input type="text" name="username" id="username" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        onChange={(e) => setUnValue(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                        <input type="text" name="password" id="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        onChange={(e) => setPwdValue(e.target.value)}/>
                    </div>
                    <input className='text-white mt-8 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-200 dark:focus:ring-red-100' 
                    type="button" value="Sign in" onClick={signIn}/>
                </form>
            </div>
        </>
    )
}