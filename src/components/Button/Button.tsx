import React from 'react';
import './Button.css'; // Adjust if using styled-components

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
    return (
        <button className="custom-button" onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;