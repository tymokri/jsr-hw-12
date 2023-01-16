import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { valueFromInput, onRemove } = this.props;

        return (
            <div>{
                valueFromInput.map((item, index) => {
                    return (
                        <div className="todo-item" key={uniqid()}>
                            <div className="row">
                                <div className="col-auto">
                                    <button className={cn("btn", "btn-primary", "btn-sm")}
                                            type="button"
                                            onClick={onRemove(index)}>-</button>
                                </div>
                                <div className="col">{item}</div>
                            </div>
                        </div>
                    )
                })
            }</div>
        )
    }
}

Item.propTypes = {
    valueFromInput: PropTypes.array
}

export default Item;