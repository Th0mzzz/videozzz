import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    background: #000;
    align-items: center;
    justify-content: center;
    color: #fff;
`

const Footer = () =>{
    return(
        <StyledFooter>
            <p>Desenvolvido por Th0mzzz</p>
        </StyledFooter>
    )
}

export default Footer