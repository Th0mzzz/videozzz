import styled from "styled-components";

const CSScontainer = styled.section`
    section {
        margin: 4em clamp(5em, 15vw, 10em);
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