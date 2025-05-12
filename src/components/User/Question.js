import _ from 'lodash';
import { useState } from 'react';
const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }
    const handleCheckBox = (event, answerId, questionId) => {
        console.log('data :', data);
        props.handleCheckbox(answerId, questionId);
    }
    return (
        <>
            {data.image
                ?
                <div className='quiz-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} />
                </div>
                :
                <div className='quiz-image'>
                </div>
            }
            <div className="quiz-question">
                Question {index + 1}: {data.questionDescription}?
            </div>
            <div className="quiz-answer">
                {data.answer && data.answer.length &&
                    data.answer.map((item, index) => {
                        return (
                            <div key={`answer - ${index}`} className='answer-child'>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                        type='checkbox'
                                        checked={item.isSelected}
                                        onChange={(event) => handleCheckBox(event, item.id, data.questionId)}
                                    />
                                    <label className='form-check-label' >
                                        {item.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })}

            </div>
        </>
    )
}
export default Question;