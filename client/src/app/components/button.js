"use client";

import { styled } from "styled-components";

const Button = ({ text }) => {
    return (
        <Abutton>{text}</Abutton>
    );
}

const Abutton = styled.button`
    width: 400px;
    height: 300px;
`
export default Button;