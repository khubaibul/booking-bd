import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImage from "../../Utilities/404.jpg";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl font-bold'>Ops! An Error Ocurred!</h1>

                {error && (
                    <div className='flex flex-col mt-4 items-center'>
                        <img className='w-[50%] rounded-lg' src={errorImage} alt="" />
                        <p className='font-bold mr-3 text-lg'>{error.status}</p>
                        <p className='text-red-500 font-bold'>{error.statusText || error.message}</p>
                        <Link className='btn bg-[#FF1F59] btn-sm border-none mt-5' to="/home">Back To Homepage</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default ErrorPage;
