import React, { FC , useState} from 'react'
import { Category } from '../Types/Types'
import './../tailwind.output.css';

type CategoriesProps = {
    categories: Category[];
    filterByCategory:(category: Category) => void;
}

//'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'

const CategoriesCmp: FC<CategoriesProps> = ({categories, filterByCategory}) => {

    //flex justify-center 
    return (
    <div className='space-x-10 mb-10'>
    {categories.map((category: Category) => {
        return <button className=' p-2 rounded text-yellow-500 hover:bg-main hover:text-white duration-500 capitalize'
        onClick={() => {filterByCategory(category)}}>{ category }</button>;
    })}
    </div>
    )
}

export default CategoriesCmp;