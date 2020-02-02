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
        const done = !this.state.todoText.length && !this.state.wrongText.length;

        if (!done) {
            if (wasBackspacePressed)
                this.backspace()
            else if (newestChar === this.state.todoText.charAt(0) && !this.state.wrongText.length)
                this.correctInput(newestChar)
            else
                this.incorrectInput()

            this.setState({ inputValue: newString });
        }
    }

    backspace = () => {
        let wrongText = this.state.wrongText;
        let correctText = this.state.correctText;
        let todoText = this.state.todoText;

        if (wrongText.length) {
            todoText = wrongText.charAt(wrongText.length - 1) + todoText;
            wrongText = wrongText.substr(0, wrongText.length - 1);
        } else if (correctText.length) {
            todoText = correctText.charAt(correctText.length - 1) + todoText;
            correctText = correctText.substr(0, correctText.length - 1);
        }

        this.setState({
            correctText,
            wrongText,
            todoText
        });
    }

    correctInput = (newestChar) => {
        this.setState({
            correctText: this.state.correctText + newestChar,
            todoText: this.state.todoText.substr(1, this.state.todoText.length)
        });
    }

    incorrectInput = () => {
        this.setState({
            wrongText: this.state.wrongText + this.state.todoText.charAt(0),
            todoText: this.state.todoText.substr(1, this.state.todoText.length)
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
