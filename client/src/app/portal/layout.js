"use client";

import { styled } from "styled-components";

const DashboardLayout = ({ children }) => {
    return <Section>{children}</Section>
}

const Section = styled.section`
    max-width: 100%;
    border: 1px solid red;
    height: 100%;
`
export default DashboardLayout;