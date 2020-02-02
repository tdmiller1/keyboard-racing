import React from 'react';
import './Race.scss';

class Race extends React.Component {

    constructor() {
        super();
        this.state = {
            correctText: 'Thi',
            wrongText: 's i',
            todoText: 's a typing prompt',
            inputValue: ''
        };
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render = () => {
        return (
            <div>
                <div className="typing-prompt-container">
                    <span className="typing-prompt-correct">{this.state.correctText}</span>
                    <span className="typing-prompt-wrong">{this.state.wrongText}</span>
                    <span className="typing-prompt-todo">{this.state.todoText}</span>
                </div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Race;
