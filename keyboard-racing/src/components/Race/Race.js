import React from 'react';
import './Race.scss';

class Race extends React.Component {

    constructor() {
        super();
        this.state = {
            correctText: '',
            wrongText: '',
            todoText: 'This is a typing prompt!',
            inputValue: ''
        };
    }

    type = (e) => {
        const newString = e.target.value;
        const newestChar = newString.charAt(newString.length - 1);
        const wasBackspacePressed = newString.length <= this.state.inputValue.length;

        if (this.state.todoText) {
            if (wasBackspacePressed)
                this.backspace()
            else if (newestChar === this.state.todoText.charAt(0))
                this.correctInput(newestChar)
            else
                this.incorrectInput(newestChar)

            this.setState({ inputValue: newString });
        }
    }

    backspace = () => {
        let wrongText = this.state.wrongText, correctText = this.state.correctText;

        if (wrongText.length)
            wrongText = wrongText.substr(0, wrongText.length - 1);
        else if (correctText.length)
            correctText = correctText.substr(0, correctText.length - 1)

        this.setState({
            correctText,
            wrongText
        });
    }

    correctInput = (newestChar) => {
        this.setState({
            correctText: this.state.correctText + newestChar,
            todoText: this.state.todoText.substr(1, this.state.todoText.length)
        });
    }

    incorrectInput = (newestChar) => {
        this.setState({
            wrongText: this.state.wrongText + newestChar
        })
    }

    render = () => {
        return (
            <div>
                <div className="typing-prompt-container">
                    <span className="typing-prompt-correct">{this.state.correctText}</span>
                    <span className="typing-prompt-wrong">{this.state.wrongText}</span>
                    <span className="typing-prompt-todo">{this.state.todoText}</span>
                </div>
                <input type="text" value={this.state.inputValue} onChange={this.type} />
            </div>
        );
    }
}

export default Race;
