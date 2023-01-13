import React from "react";
import Item from "./Item";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            disabled: true,
            valueFromInput: []
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;

        if (target) {
            this.setState({
                disabled: false
            });
        }

        this.setState({
            text: value
        });
    }

    handleInputAdd = (event) => {
        event.preventDefault();
        let arr = this.state.valueFromInput;
        arr.unshift(this.state.text);

        this.setState({
            text: '',
            disabled: true,
            valueFromInput: arr
        });
    }

    handleRemove = (event) => {
        event.preventDefault();
        let index = event.target.dataset.key;
        let arr = this.state.valueFromInput;
        arr.splice(+(index),1);

        this.setState( {
            valueFromInput: arr
            }
        )
    }

    render() {
        const valueFromInput = this.state.valueFromInput;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text"
                                   name="text"
                                   value={this.state.text}
                                   onChange={this.handleInputChange}
                                   required=""
                                   className="form-control"
                                   placeholder="I am going..."/>
                        </div>
                        <button type="submit"
                                disabled={this.state.disabled}
                                className="btn btn-primary"
                                onClick={this.handleInputAdd}>add</button>
                    </form>
                </div>

                <Item valueFromInput={valueFromInput} onRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default TodoBox;