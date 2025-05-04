import React from "react";
import User from "./User.js";
import DisplayInfor from "./DisplayInfor.js";

class MyComponents extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'a', age: 2 },
            { id: 2, name: 'b', age: 33 },
            { id: 3, name: 'c', age: 42 }
        ]
    }

    handleAddNewUser = (user) => {
        //c1
        this.setState({
            listUsers: [user, ...this.state.listUsers]
        })

        //c2
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(user)
        // this.setState({
        //     listUsers: listUsersNew
        // })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }
    render() {
        // const test = { name: 'as', age: 24 };
        return (
            <>
                {/* {JSON.stringify(test)} */}
                <User
                    handleAddNewUser={this.handleAddNewUser}

                />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        )
    }
}

export default MyComponents;