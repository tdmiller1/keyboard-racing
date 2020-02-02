import React from 'react';
import TypingPrompt from '../TypingPrompt/TypingPrompt';

class Race extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render = () => {
        return (
            <div>
                <TypingPrompt />
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Race;
