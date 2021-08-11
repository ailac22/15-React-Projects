import React, {FC} from 'react'
import Question from '../Types/Question'



const QuestionCmp: FC<Question> = ({id,info,title}) => {

    return (
        <section>
            <p>{title}</p>
            <p>{info}</p>
        </section>

    )
}

export default QuestionCmp;