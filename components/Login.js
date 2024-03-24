import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto py-20'>

    
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png"
            height={340}
            width={340} />
            <div className='flex items center py-20'>
            <a onClick={signIn} className='flex px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white'>Login</a>
            </div>
            
        
    </div>
  )
}

export default Login