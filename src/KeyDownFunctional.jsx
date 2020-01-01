import React, { useEffect, useState } from 'react';
import Consts from './Consts';

const KeyDownFunctional = () => {
    const [pressedKeys, setPressedKeys] = useState([]);

    useEffect(() => {
        const onKeyDown = ({key}) => {
            if (Consts.ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
                setPressedKeys(previousPressedKeys => [...previousPressedKeys, key]);
            }
        }
    
        const onKeyUp = ({key}) => {
            if (Consts.ALLOWED_KEYS.includes(key)) {
                setPressedKeys(previousPressedKeys => previousPressedKeys.filter(k => k !== key));
            }
        }

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>
        <h3>KeyDown Functional Component</h3>
        <h4>Pressed Keys:</h4>

        {pressedKeys.map(e => <span key={e} className="key">{e}</span>)}
    </>
}

export default KeyDownFunctional;