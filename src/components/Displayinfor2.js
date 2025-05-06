import React from "react";
import { useState, useEffect } from "react";

const DisplayInfor2 = (props) => {

    const [isShowHide, setIsShowHide] = useState(true);
    const { listUsers } = props;
    const handleShow = () => {
        setIsShowHide(!isShowHide)
    }
    return (
        <>
            <div className="display-infor-container">

                <button onClick={(event) => handleShow(event)}>{isShowHide == true ? 'Hide' : 'Show'}</button>


                {isShowHide &&
                    <>
                        {listUsers.map((item, index) => {
                            return (
                                <>

                                    <div key={item.id} className={item.age > 18 ? "red" : "green"}>
                                        <div>{item.name}</div>
                                        <div>{item.age}</div>
                                        <hr />
                                    </div >
                                    <button onClick={() => props.handleDeleteUser(item.id)}>X</button>
                                </>

                            )
                        })}
                    </>
                }
            </div>
        </>
    )
}


export default DisplayInfor2