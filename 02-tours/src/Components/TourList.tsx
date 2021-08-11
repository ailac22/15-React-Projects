import React from 'react';
import Tour from '../Types/TourTypes'
import TourCmp from './TourCmp'

type TourListProps = {

    tours?: Tour[];
    removeTour: (id: string) => void;
};

const TourList: React.FC<TourListProps> = ({tours, removeTour}) => {

    return (

        <div>
        {tours?.map((tour:Tour) => 
                <TourCmp tour={tour} removeTour={removeTour}></TourCmp>
        )}
        </div>
    );
}

export default TourList;