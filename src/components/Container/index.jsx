import styled from "styled-components";

const CSScontainer = styled.section`
    section {
        margin: 2em 20em;
    text-align: center;
    }
`

const Container = ({ children }) => {
    return (
        <CSScontainer>
            {children}
        </CSScontainer>
    )
}

export default Container