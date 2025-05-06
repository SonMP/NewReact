import React from "react";
import User from "./User.js";
import DisplayInfor from "./DisplayInfor.js";
import DisplayInfor2 from "./Displayinfor2.js";
import { useState } from "react";

// class MyComponents extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             listUsers: [
//                 { id: 1, name: 'a', age: 2 },
//                 { id: 2, name: 'b', age: 33 },
//                 { id: 3, name: 'c', age: 42 }
//             ]
//         }
//     }

//     handleAddNewUser = (user) => {
//         //c1
//         this.setState({
//             listUsers: [user, ...this.state.listUsers]
//         })

//         //c2
//         // let listUsersNew = this.state.listUsers;
//         // listUsersNew.unshift(user)
//         // this.setState({
//         //     listUsers: listUsersNew
//         // })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         // const test = { name: 'as', age: 24 };
//         return (
//             <>
//                 {/* {JSON.stringify(test)} */}
//                 <User
//                     handleAddNewUser={this.handleAddNewUser}

//                 />
//                 <DisplayInfor2
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </>
//         )
//     }
// }


const MyComponents = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'a', age: 2 },
            { id: 2, name: 'b', age: 33 },
            { id: 3, name: 'c', age: 42 }]
    )
    const handleAddNewUser = (user) => {
        setListUsers([user, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone)
    }
    return (
        <>
            <User
                handleAddNewUser={handleAddNewUser}

            />
            <DisplayInfor2
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    )
}
export default MyComponents;