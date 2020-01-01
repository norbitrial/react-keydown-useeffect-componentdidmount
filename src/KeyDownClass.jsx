import React, { Component } from 'react';
import Consts from './Consts';

class KeyDownClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressedKeys: [],
        };

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyDown({key}) {
        if (Consts.ALLOWED_KEYS.includes(key) && !this.state.pressedKeys.includes(key)) {
            this.setState({
                pressedKeys: [...this.state.pressedKeys, key],
            });
        }
    }

    onKeyUp({key}) {
        if (Consts.ALLOWED_KEYS.includes(key)) {
            this.setState(previousState => ({
                pressedKeys: previousState.pressedKeys.filter(k => k !== key),
            }));
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
        document.addEventListener('keyup', this.onKeyUp);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
        document.removeEventListener('keyup', this.onKeyUp);
    }

    render() {
        return <>
            <h3>KeyDown Class Component</h3>
            <h4>Pressed Keys:</h4>

            {this.state.pressedKeys.map(e => <span key={e} className="key">{e}</span>)}
        </>
    }
}

export default KeyDownClass;