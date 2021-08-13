import React, { FC } from 'react';
import {Dish} from '../Types/Types'

type DishProps = {
    dish: Dish;
}


const DishCmp:FC<DishProps> = ({dish: {id,title,category,price, img, desc} }) => {

    return (<div>
        <img src={img} alt={title} />
        <div>
            <p>{ title }</p>
            <p>{ price }</p>
        </div>
        <p>{ desc }</p>
    </div>);
}

export default DishCmp;