import React, {FC} from 'react'
import QuestionCmp from './QuestionCmp'
import Question from '../Types/Question'

type QuestionaireProps = {
    questions: Question[];
}

const Questionaire: FC<QuestionaireProps> = ({questions}) => {

    return (
        <div>
            <h1>Questions and answers about login</h1>
            <div>
            {questions.map((question) => {
                return  <QuestionCmp {...question}></QuestionCmp>
            })}
            </div>
        </div>
    )
}

export default Questionaire;