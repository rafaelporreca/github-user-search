import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({text}: Props) => (
    <div className="d-flex">
        <button className="btn btn-primary btn-content">
            {text}
        </button>
    </div>
);

export default Button;