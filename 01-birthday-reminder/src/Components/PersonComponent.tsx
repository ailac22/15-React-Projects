import React from 'react'
import './PersonComponent.scss'
import { Person } from '../Types/PersonListType'

type PersonProps = {
    info: Person;
}

const PersonComponent: React.FC<PersonProps> = ({ info: {name, age, image} }) => {
    return (
        <article className="container">

            <img src={image} alt={name} />
            <div>
                <p id="name">{name}</p>
                <p>{age} y.o.</p>
            </div>
        </article>
    )
}

export default PersonComponent;