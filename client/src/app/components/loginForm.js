"use client";

import { styled } from "styled-components";

const LoginForm = () => {
    return (
        <Form>
            <>
                <label>Username</label>
                <input type="email" />
            </>
            <>
                <label>Password</label>
                <input type="password" />
            </>
            <input type="submit" value="Login" />
        </Form>
    );
}

const Form = styled.form`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1em
`
export default LoginForm;