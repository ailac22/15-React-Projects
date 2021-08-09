import React, { useState } from 'react'
import Tour from '../Types/TourTypes'
import './TourCmp.scss'

type TourCmpProps = {

    tour: Tour;
    removeTour: (id: string) => void; 
}

const TourCmp: React.FC<TourCmpProps> = ({tour: { id,image,info,name,price }, removeTour}) => {

    const [readMore, setReadMore] = useState(false)
    return (
    <article className="tour-container"> 
        <img src={image} alt={name}/> 
        <footer>
            <div className="info">
                <h4>{name}</h4>
                <h4>{price}</h4>
            </div>
            <p>{readMore ?  info: `${ info.substr(0,150)}...` }
            <button className="readMoreBtn" onClick={() => setReadMore(!readMore)}> { readMore ? "Read more" : "Read less" } </button></p>
            
        <button className="not-interested-btn" onClick={() => removeTour(id)}>Not interested</button>
        </footer>
    </article>
    )
}

export default TourCmp;