import Image from 'next/image'
import React from 'react'

const Explainer = () => {
  return (
    <div className='md:py-12 px-8 pb-6 bg-surface'>
        <h1 className='text-3xl font-lato text-center font-semibold py-4 md:pb-4 md:pt-0'>Xpresion&apos;s evolution</h1>
        <hr className='w-auto h-1 mb-4 bg-primary'/>
        <div className='lg:flex lg:items-center lg:justify-between'>
        <Image
          src="images/Evolution.svg"
          alt="Xpresion Evolution"
          priority={true}
          width={662}
          height={480}
        />
        <div>
          <h2 className='text-2xl font-sans font-medium pb-3'>Pioneering Innovation</h2>
          <p className='text-md pb-2'>
              With over three decades of industry expertise, Busisoft proudly presents a journey of innovation and adaptation. 
              Since its inception in <span className='font-bold'>1995</span>, Xpresion, our flagship product, has evolved from its early days in <span className='font-bold'>DOS to advanced Windows .Net, Online, and Cloud platforms </span>.
              In our relentless pursuit of innovation and excellence, we are developing <span className='font-bold'>cutting-edge solutions</span> designed to elevate Xpresion to new heights & further enhace customer experience. 
              {/* Now, we are excited to introduce <span className='font-bold'>Xpresion Next</span>, a cutting-edge application designed to enhance the efficiency of customer operations with its sophisticated technological framework. */}
          </p>
          <h2 className='text-2xl font-sans font-medium py-3'>Client-focused</h2>
          <p className='text-md pb-2'>
          <span className='font-bold'>Adaptability and customer-centricity</span> lie at the heart of Xpresion.
              We continuously leverage our deep-rooted <span className='font-bold'>techno-functional expertise</span> to improve operational efficiency and convenience for our clients.
              Our <span className='font-bold'>commitment to understanding and meeting market needs</span> drives us to innovate relentlessly, ensuring that Xpresion stays at the <span className='font-bold'>forefront of industry standards.</span>
          </p>
          <h2 className='text-2xl font-sans font-medium py-3'>Building future-ready solutions</h2>
          <p className='text-md'>
              Join us as we embark on the next chapter of innovation, dedicated to <span className='font-bold'>empowering businesses</span> with <span className='font-bold'>robust solutions</span> tailored to meet tomorrow&apos;s challenges.
          </p>
        </div>
        </div>
    </div>
  )
}

export default Explainer