import React, { FC } from 'react';
import {Dish} from '../Types/Types'

type DishProps = {
    dish: Dish;
}


const DishCmp:FC<DishProps> = ({dish: {id,title,category,price, img, desc} }) => {

    return (<section className='container grid md:grid-cols-custom grid-cols-1 max-w-xl'>
        <img src={img} alt={title} className='md:h-36 h-52 w-full object-cover border-4 rounded-md border-main block' />
        <div className=' text-justify px-5'>
        <header className='flex justify-between '>
            <h4 >{ title }</h4>
            <h4 >{ price }</h4>
        </header>
        <p>{ desc }</p>
        </div>
    </section>);
}

export default DishCmp;