import React, { FC , useState} from 'react'
import { Category } from '../Types/Types'

type CategoriesProps = {
    categories: Category[];
    filterByCategory:(category: Category) => void;
}

const CategoriesCmp: FC<CategoriesProps> = ({categories, filterByCategory}) => {

    
    return (
    <div className='flex justify-center'>
    {categories.map((category: Category) => {
        return <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
        onClick={() => {filterByCategory(category)}}>{ category }</button>;
    })}
    </div>
    )
}

export default CategoriesCmp;