import React from 'react'
import { useGlobalContext } from '../Context'

export const Pagination = () => {
    const { page, nbPages, getPreviousPage, getNextPage } = useGlobalContext()
    return (
        <div className='w-[100%] flex justify-center items-center'>
            <button className='p-[0.8rem2.2rem] border-none text-[1.6rem] bg-[#15133c] text-[#fff] m-[3rem] cursor-pointer inline-block' onClick={() => getPreviousPage()}>Prev</button>
            <p>{page + 1} of {nbPages}</p>
            {console.log(page)}
            <button className='p-[0.8rem2.2rem] border-none text-[1.6rem] bg-[#15133c] text-[#fff] m-[3rem] cursor-pointer inline-block' onClick={() => getNextPage()}>Next</button>
        </div>
    )
}
