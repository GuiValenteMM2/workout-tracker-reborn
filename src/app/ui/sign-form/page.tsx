"use client"

import { userService } from '@/app/lib/service/userService';
import { useState } from 'react';
import SignIn from './signin';

export default function login() {

    const [usernameValue, setUnValue] = useState("");
    const [passwordValue, setPwdValue] = useState("");

    function signIn() {
        userService.saveUser({
            id: userService.arrayLength(),
            username: usernameValue,
            password: passwordValue,
            programs: null
        });
        console.log(userService.getUsers());
    }

    return (
        <>
            <SignIn usernameHandler={(e) => setUnValue(e.target.value)} passwordHandler={(e) => setPwdValue(e.target.value)} submitHandler={signIn}/>
        </>
    )
}