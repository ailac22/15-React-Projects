import React from 'react'
import {PersonList} from '../Types/PersonListType'
import PersonComponent from './PersonComponent'
import './List.scss'

type ListProps = {
    people: PersonList;
    onClick: () => void;

}
const List:React.FC<ListProps> = ({people,onClick}) => {
    
    const list = people.map((info) => {
        return <PersonComponent key={info.id} info={info}></PersonComponent>
    })

    return (
    <section className="list-container">
        <h2>{people.length} birthdays today</h2>
        {list}
        <button className="clear-button" onClick={onClick}>Clear list</button>
    </section>)

};

export default List;
