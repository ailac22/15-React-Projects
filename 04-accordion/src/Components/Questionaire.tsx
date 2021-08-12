import React, {FC} from 'react'
import QuestionCmp from './QuestionCmp'
import Question from '../Types/Question'
import './Questionaire.scss'

type QuestionaireProps = {
    questions: Question[];
}

/*question}*/

const Questionaire: FC<QuestionaireProps> = ({questions}) => {

    return (
        <div className="container">
            <h1 className='title'>Questions and answers about login</h1>
            <div>
            {questions.map((question) => {
                return  <QuestionCmp {...question }  ></QuestionCmp>
            })}
            </div>
        </div>
    )
}

export default Questionaire;