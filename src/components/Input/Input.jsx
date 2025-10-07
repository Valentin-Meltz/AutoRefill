import React from "react";
import "./Input.css";

export default function Input({id, type, placeholder, src, alt}) {
    return(
        <div className="input-box">
            <input id={ id } type={ type } placeholder={ placeholder } />
            <img className="w-7" src={ src } alt={ alt } />             
        </div>
    );
}