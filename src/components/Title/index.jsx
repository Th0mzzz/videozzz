import styled from "styled-components"

const CSSTitle = styled.div`
h1{
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: var(--cor-texto);
    margin: 2rem 0;
}
h3{
    font-size: 24px;
    font-weight: 600;
    color: var(--cor-texto);
    margin: 1rem 0;
}
`

const Title = ({ children }) => {
    return (
        <CSSTitle>
            {children}
        </CSSTitle>
    )
}

export default Title;