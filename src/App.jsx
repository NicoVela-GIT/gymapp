import { useState } from 'react'
import Hero from './compnents/Hero'
import Generator from './compnents/Generator'
import Workout from './compnents/Workout'


function App() {
  

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App
