import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        {error && (
          <div className='flex mt-4 items-center'>
            <p className='font-bold mr-3 text-lg'>{error.status}</p>
            <p className='text-red-500 font-bold'>{error.statusText || error.message}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage;
