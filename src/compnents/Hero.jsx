import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>

        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Your<span className='text-blue-400'> Gym Bag</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Welcome to <span className='text-blue-400 font-medium'>GymBagBuddy,</span> the newest essental tool in your gym bag, your gym bro, and the ultimate acountability partner. <span className='text-blue-400 font-medium'>GymBagBuddy</span> was designed to keep you in check when you're at the gym and to take away the task of thinking through your workoouts. Grab a water, bring your gym bag and go hit some weights!</p>
        <button className='px-4 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
            <p>I'm Ready to Begin</p>
        </button>
    </div>
  )
}
