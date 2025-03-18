import { ChangeEventHandler, MouseEventHandler } from "react"

const FormFields = ({ usernameHandler, passwordHandler, submitHandler, buttonText }:
     { usernameHandler: ChangeEventHandler<HTMLInputElement>,
       passwordHandler: ChangeEventHandler<HTMLInputElement>,
       submitHandler: MouseEventHandler<HTMLInputElement>,
       buttonText: string }) => (
    <form className='max-w-lg mx-auto'>
        <div className='mb-5'>
            <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
            <input type="text" name="username" id="username" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={usernameHandler} />
        </div>
        <div>
            <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
            <input type="password" name="password" id="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={passwordHandler} />
        </div>
        <input className='mr-4 text-white mt-8 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none cursor-pointer focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-200 dark:focus:ring-red-100' type="button" value={buttonText} onClick={submitHandler} />
    </form>
);

export default function SignIn({ passwordHandler, usernameHandler, submitHandler, type, changeForm }: { usernameHandler: ChangeEventHandler<HTMLInputElement>, passwordHandler: ChangeEventHandler<HTMLInputElement>, submitHandler: MouseEventHandler<HTMLInputElement>, type: string, changeForm: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <div className={`flex justify-center items-center h-screen flex-col`}>
            <h1 className='font-bold text-2xl mb-16'>{type === 'I' ? 'Sign In' : 'Sign Up'}</h1>
            <FormFields usernameHandler={usernameHandler} passwordHandler={passwordHandler} submitHandler={submitHandler} buttonText={type === 'I' ? 'Sign in' : 'Sign up'} />
            {type === 'I' && <button onClick={changeForm} className="mt-4 text-xs">Don't have an account? Register now!</button>}
        </div>
    );
}

