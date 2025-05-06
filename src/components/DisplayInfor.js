import React from "react";
import logo from "../../src/logo.svg"

class DisplayInfor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    componentDidMount() {

    }

    handleShow = (event) => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    handleDeleteUser = (userId) => {
        this.props.handleDeleteUser(userId);
    }
    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            <>
                <div className="display-infor-container">
                    <img src={logo} style={{ width: "40px" }} />


                    <div>{this.props.address}</div>
                    <button onClick={(event) => this.handleShow(event)}>Hide</button>


                    {this.state.isShow &&
                        <>
                            {listUsers.map((item, index) => {
                                return (
                                    <>

                                        <div key={item.id} className={item.age > 18 ? "red" : "green"}>
                                            <div>{item.name}</div>
                                            <div>{item.age}</div>
                                            <hr />
                                        </div >
                                        <button onClick={() => this.handleDeleteUser(item.id)}>X</button>
                                    </>

                                )
                            })}
                        </>
                    }
                </div>
            </>
        )
    }
}

// const DisplayInfor = (props) => {
//     const { listUsers } = props;
//     console.log(listUsers);
//     return (
//         <>
//             <div className="display-infor-container">
//                 <img src={logo} style={{ width: "40px" }} />


//                 {/* <div>{this.props.address}</div> */}
//                 <button onClick={(event) => this.handleShow(event)}>Hide</button>


//                 {true &&
//                     <>
//                         {listUsers.map((item, index) => {
//                             return (
//                                 <>

//                                     <div key={item.id} className={item.age > 18 ? "red" : "green"}>
//                                         <div>{item.name}</div>
//                                         <div>{item.age}</div>
//                                         <hr />
//                                     </div >
//                                     {/* <button onClick={() => handleDeleteUser(item.id)}>X</button> */}
//                                 </>

//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         </>
//     )
// }

export default DisplayInfor