import { Link } from "react-router-dom"
import styled from "styled-components"
const StyledLink = styled(Link)`
    color:var(--cor-texto);
    font-size: 18px;
    font-weight: 400;
    padding: 1em;
    text-decoration: none;
    transition: all .3s;
    &:hover{
        color: var(--primary);
        
    }
`
const HeaderLink = ({ children, url }) => {
    return (
        <StyledLink to={url}>
            {children}
        </StyledLink>
    )
}

export default HeaderLink