import React, {FC, useState} from 'react'
import Question from '../Types/Question'
import './QuestionCmp.scss'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { useToggle } from 'react-use'

const QuestionCmp: FC<Question> = ({id,info,title}) => {

    const [on, toggle] = useToggle(false)

    let answer;
    if (on)
        answer = <p className='answer'>'{info}</p>;

    //  {answer}
    return (
        <section>
            <header>
                <h4 className='question'>{title}</h4>
                <button className='toggleButton' onClick={() => toggle()}>{on ? <HiMinus/> : <HiPlus/>}</button>
            </header>
             <div className={on ? 'answer' : 'answerHidden'}>{info}</div> 
        </section>
    )
}

export default QuestionCmp;