import styled from "styled-components"

const STitle = styled.div`
h1{
    font-size: 32px;
    font-weight: 600;
    text-align: center;
}
`

const Title = ({ children }) => {
    return (
        <STitle>
            {children}
        </STitle>
    )
}

export default Title;