"use client";

import { styled } from "styled-components";

const Template = ({ children }) => {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 100vw;
    min-height: 100vh;
`
export default Template;