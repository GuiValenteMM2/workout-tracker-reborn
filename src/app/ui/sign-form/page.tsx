"use client"

import { userService } from '@/app/lib/service/userService';
import { useState } from 'react';
import SignIn from './signIn';
import { User } from '@/app/lib/entities/User';

export default function Login() {

    const [usernameValue, setUnValue] = useState("");
    const [passwordValue, setPwdValue] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    function signUp() {
        userService.saveUser({
            id: userService.arrayLength(),
            username: usernameValue,
            password: passwordValue,
            programs: null
        });
        console.log(userService.getUsers());
    }

    function signIn(): boolean {
        const user = {
            username: usernameValue,
            password: passwordValue
        }
        const arr = userService.getUsers().filter(registeredUser => registeredUser.username === user.username && registeredUser.password === user.password);
        if (arr.length > 0) return true;
        return false;
    }

    return (
        <>
            <SignIn usernameHandler={(e) => setUnValue(e.target.value)} passwordHandler={(e) => setPwdValue(e.target.value)} submitHandler={signIn} show={'inline'}/>
            <SignIn usernameHandler={(e) => setUnValue(e.target.value)} passwordHandler={(e) => setPwdValue(e.target.value)} submitHandler={signUp} show={'hidden'}/>
        </>
    )
}