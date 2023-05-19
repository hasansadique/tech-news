import React from 'react'
import { useGlobalContext } from '../Context'

export const Search = () => {
    const { query, searchPost } = useGlobalContext();
    console.log(query)
    return (
        <div>
            <form className='grid place-items-center' onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text" className='p-3 min-w-[38rem] text-3xl capitalize border-none outline-none'
                        placeholder='Search here'
                        value={query}
                        onChange={(e) => searchPost(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}
