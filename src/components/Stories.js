import React from 'react'
import { useGlobalContext } from '../Context'

export const Stories = () => {
    const { hits, isLoading, removePost } = useGlobalContext();

    if (isLoading) {
        return (
            <>
                <p className='text-xl'>Loading...</p>
            </>
        );
    }
    return (
        <div className='className="flex justify-center items-center flex-col gap-5'>
            <h1 className='text-xl m-[2,0] text-center'>My Tech News Post</h1>
            {hits.map((curPost) => {
                const { title, author, objectID, url, num_comments } = curPost
                return (
                    <div className='min-w[20rem] w-[40vw] p-[4rem] m-[auto] mt-[30px] bg-[#ffffff] shadow-[#64646f0px7px29px] rounded-[0.rem] text-[#15133c]' key={objectID}>
                        <h2 className='font-serif text-4xl'>{title}</h2>
                        <p className='m-[2rem,0] text-[#15133c] font-[400] text-2xl inline-block'>
                            By <span className='capitalize font-bold'>{author}</span> | <span className='capitalize font-bold'>{num_comments}</span>
                            Comments
                            <div className='flex flex-row w-[100%] justify-between'>
                                <a className='text-[#92b4ec] text-2xl' href={url}
                                    target="blank">Read More</a>
                                <a className="text-red-700" href="#" onClick={() => removePost(objectID)}>Remove</a>
                            </div>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
