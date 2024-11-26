import Image from 'next/image'
import React from 'react'
import "@fontsource/londrina-shadow"; // Defaults to weight 400

const About = () => {
    return (
        <section className='w-full h-full flex items-center justify-center mb-40 px-10'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-[13rem] font-semibold londrina-shadow-regular -mb-28 opacity-25 text-[#000000]'>Nova Flame</div>
                <Image src="/image11.png" alt='gif' className='z-10' width={800} height={500} />
            </div>

        </section>
    )
}

export default About