import './toggle.css!';
import * as React from 'react';

export const Toggle = (props: { isOpen: boolean, toggle: any, ref?: any }) => {
    const stateClass = props.isOpen ? 'toggle on' : 'toggle off';

    return (
        <small className={stateClass} onClick={props.toggle}>
            &hearts;{props.isOpen ? 'ON' : 'OFF'}
        </small>
    );
};