"use client";

import { useState } from 'react';
import Image from 'next/image';

const ModuleCard = ({img, title, stext, htext}) => {

  const [visible, setVisible] = useState(false);

  const toggleView = () => {
    setVisible(!visible)
  }

  return (
    <div className={`${!visible ? "h-[376px]" : "h-[550px]"} p-4 flex flex-col border-2  border-primary rounded-2xl`}>
        <div className="rounded-[50%] px-2 bg-surface border-4 border-primaryContainer w-[240px] h-[240px] mb-4 mx-auto flex flex-col items-center justify-evenly">
            <Image src={img} width={200} height={200} alt={title} unoptimized={true}/>
        </div>
        <h2 className=" text-lg text-center mx-auto font-semibold font-lato pb-2">{title}</h2>
        <p className={`font-slab text-primary hover:text-onSurface text-center ${!visible ? 'block': 'hidden'} cursor-pointer`} onClick={() => toggleView()}>{htext}</p>
        <p className={`font-sans text-center ${visible ? 'block' : 'hidden'}`}>{stext}</p>
        <button></button>
    </div>
  )
}

export default ModuleCard;