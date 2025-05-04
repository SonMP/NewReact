import React from "react";

class User extends React.Component {

    state = {
        name: "abc",
        age: 25
    }

    handleOnChange = (event) => {
        const { name } = event.target;
        this.setState({
            [name]: event.target.value,
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('aa:', this.state);
        this.props.handleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1),
                name: this.state.name,
                age: this.state.age
            }
        );
    }
    handleDeleteUser = () => {

    }
    render() {
        return (
            <>
                <div>
                    nani ga suki?
                </div>
                <div>
                    {this.state.name + " " + this.state.age}
                </div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)}></input>
                    <input name="age" value={this.state.age} onChange={(event) => this.handleOnChange(event)}></input>
                    <button>Click</button>

                </form>

            </>

        )
    }
}

export default User;