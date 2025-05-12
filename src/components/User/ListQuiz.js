import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import './ListQuiz.scss';

const ListQuiz = (props) => {
    const navigate = useNavigate();
    const [arrQuiz, setArrQuiz] = useState();
    useEffect(() => {
        fetchQuizByUser();
    }, [])
    const fetchQuizByUser = async () => {
        let res = await getQuizByUser();
        console.log(res);
        setArrQuiz(res.DT);
    }
    console.log('check quiz:', arrQuiz)
    return (
        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length > 0 && arrQuiz.map((item, index) => {
                return (
                    <div className="card" key={`${index}-quiz`} style={{ width: "18rem" }}>
                        <img src={`data:image/jpeg;base64,${item.image}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Quiz {index + 1}</h5>
                            <p className="card-text">{item.description}</p>
                            <button className="btn btn-primary"
                                onClick={() => navigate(`/quiz/${item.id}`, {
                                    state: { quizTitle: item.description }
                                })}>
                                Start now
                            </button>
                        </div>
                    </div>
                )
            })}
            {arrQuiz && arrQuiz.length === 0 &&
                <div>
                    You don't have any quiz now....
                </div>}
        </div>
    )
}
export default ListQuiz;