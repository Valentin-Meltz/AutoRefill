import React from "react";
import "./Button.css"

export default function Button({ text, onClick, type }) {
    return (
        <button type={ type } className="btn" onClick={ onClick }>{ text }</button>
    );
}