import React, {FC, useState} from 'react'
import Question from '../Types/Question'
import './QuestionCmp.scss'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import { useToggle } from 'react-use'

const QuestionCmp: FC<Question> = ({id,info,title}) => {

    const [on, toggle] = useToggle(false)

    let icon;
    if (on)
        icon = <AiFillMinusSquare className="icon"/>
    else
        icon = <AiFillPlusSquare className="icon" />


    let answer;
    if (on)
        answer = <p className="answer">{info}</p>;

    return (
        <section>
            <header>
                <h4 className="question">{title}</h4>
                <button  onClick={() => toggle()}>{icon}</button>
                
            </header>
            {answer}
        </section>

    )
}

export default QuestionCmp;