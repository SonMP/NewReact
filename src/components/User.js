import React from "react";
import { useState } from "react";

// class User extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "abc",
//             age: 25
//         }
//     }
//     handleOnChange = (event) => {
//         const { name } = event.target;
//         this.setState({
//             [name]: event.target.value,
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log('aa:', this.state);
//         this.props.handleAddNewUser(
//             {
//                 id: Math.floor((Math.random() * 100) + 1),
//                 name: this.state.name,
//                 age: this.state.age
//             }
//         );
//     }
//     handleDeleteUser = () => {

//     }
//     render() {
//         return (
//             <>
//                 <div>
//                     nani ga suki?
//                 </div>
//                 <div>
//                     {this.state.name + " " + this.state.age}
//                 </div>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <input name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)}></input>
//                     <input name="age" value={this.state.age} onChange={(event) => this.handleOnChange(event)}></input>
//                     <button>Click</button>

//                 </form>

//             </>

//         )
//     }
// }

const User = (props) => {
    const [user, setUser] = useState({ name: 'abdd', age: 25 });
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUser((preData) => (
            { ...preData, [name]: value }
        ))

    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1),
                name: user.name,
                age: user.age
            });
    }
    return (
        <>
            <div>
                nani ga suki????
            </div>
            <div>
                {user.name + " " + user.age}
            </div>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <input name="name" value={user.name} onChange={(event) => handleOnChange(event)}></input>
                <input name="age" value={user.age} onChange={(event) => handleOnChange(event)}></input>
                <button>Click</button>

            </form>

        </>
    )
}

export default User;