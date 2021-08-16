import React, { FC } from 'react';
import {Dish} from '../Types/Types'

type DishProps = {
    dish: Dish;
}


const DishCmp:FC<DishProps> = ({dish: {id,title,category,price, img, desc} }) => {

    return (<section className='container grid md:grid-cols-custom grid-cols-1 max-w-xl'>
        <img src={img} alt={title} className='md:h-36 h-52 w-full object-cover border-4 rounded-md border-main block' />
        <div className=' text-justify px-5 pt-5 lg:pt-0'>
        <header className='flex justify-between border-b-2'>
            <h4 className='capitalize font-bold tracking-widest'>{ title }</h4>
            <h4 className='text-main font-bold'>{ price } €</h4>
        </header>
        <p className='mt-2 text-gray-500 border-dotted border-gray-500'>{ desc }</p>
        </div>
    </section>);
}

export default DishCmp;