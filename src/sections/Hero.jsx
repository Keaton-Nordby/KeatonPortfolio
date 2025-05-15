import React from 'react'
import { words } from '../constants'


const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

        <div className='hero-layout'>
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Turning 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex flex-center md:gap-3 gap-1 pb-2 text-purple-400'>
                                            <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 ' 
                                            />
                                            <span>{word.text}</span>

                                        </span>
                                    ))}
                                </span>

                            </span>
                        </h1>
                        <h1>into real-world applications</h1>
                        <h1>that deliver impact</h1>

                    </div>
                </div>
            </header>
        </div>
    </section>
  )
}

export default Hero