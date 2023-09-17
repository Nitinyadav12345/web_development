import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1920px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
       
        {/* Cards */}
        <div className='rounded-xl relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                 <p className='font-bold text-3xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                 <p className='px-2'>Through 8/26</p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[280px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="/" />
        </div>
        {/* Cards */}
        <div className='rounded-xl relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                 <p className='font-bold text-3xl px-2 pt-4'>New Restaurants</p>
                 <p className='px-2'>Added daily</p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[280px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="/" />
        </div>
        {/* Cards */}
        <div className='rounded-xl relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                 <p className='font-bold text-3xl px-2 pt-4'>We Deliver Desserts</p>
                 <p className='px-2'>Tasty Tasty</p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[280px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1652561781059-58d5d9ffcb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNob2NvbGF0ZSUyMGxhdmElMjBjYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="/" />
        </div>
    </div>
  )
}

export default Headlinecards
