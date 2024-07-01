import Image from 'next/image'
import React from 'react'

const Explainer = () => {
  return (
    <div className='md:py-12 px-8 pb-6'>
        <h1 className='text-3xl font-lato text-center font-semibold pb-4'>Xpresion&apos;s evolution</h1>
        <hr className='w-auto h-1 mb-4 bg-primary'/>
        <div className='lg:flex lg:items-center lg:justify-between'>
        <Image
          src="/Evolution.svg"
          alt="Xpresion Evolution"
          priority={true}
          width={662}
          height={480}
        />
        <div>
          <h2 className='text-2xl font-sans font-medium pb-3'>Pioneering Innovation</h2>
          <p className='text-md pb-2'>
              With over three decades of industry expertise, Busisoft proudly presents our journey of innovation and adaptation. 
              Since its inception in 1995, Xpresion, our flagship product, has evolved from its early days in DOS to advanced Windows .Net, Online, and Cloud platforms. 
              Now, we are excited to introduce Xpresion Next, a cutting-edge application designed to enhance the efficiency of customer operations with its sophisticated technological framework.
          </p>
          <h2 className='text-2xl font-sans font-medium py-3'>Client-focused</h2>
          <p className='text-md pb-2'>
              Adaptability and customer-centricity lie at the heart of Xpresion.
              We continuously leverage our deep-rooted techno-functional expertise to improve operational efficiency and convenience for our clients.
              Our commitment to understanding and meeting market needs drives us to innovate relentlessly, ensuring that Xpresion stays at the forefront of industry standards.
          </p>
          <h2 className='text-2xl font-sans font-medium py-3'>Building future-ready solutions</h2>
          <p className='text-md'>
              Join us as we embark on the next chapter of innovation, dedicated to empowering businesses with robust solutions tailored to meet tomorrow&apos;s challenges.
          </p>
        </div>
        </div>
    </div>
  )
}

export default Explainer