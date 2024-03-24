import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center'>
                <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
                className='rounded-full w-10 h-10'/>
                <div>
                    <p className='font-medium'>Anish Balami</p>
                    <p className='text-sm text-gray-500 space-x-2'>{new Date().toLocaleString()}</p>
                </div>
            </div>
            <p className='py-4'>Lorem ipsum</p>
        </div>
        <div>
            {/* If Any Image */}
            <div className='relative h-60 md:h-96 bg-white'>
            <Image 
                src="https://images.pexels.com/photos/14203240/pexels-photo-14203240.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
                width={1200}
                height={800} 
                layout="responsive" // or "intrinsic" or "fill"
                objectFit="cover" // or "contain" or "none"
                alt="Your image description" 
            />
            </div>
        </div>
    </div>
  )
}

export default Post