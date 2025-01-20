import { Link } from "react-router-dom"
import styled from "styled-components"
const StyledLink = styled(Link)`
    color:#fff;
    font-size: 18px;
    font-weight: 400;
    padding: 1em;
    text-decoration: none;
`
const HeaderLink = ({ children, url }) => {
    return (
        <StyledLink to={url}>
            {children}
        </StyledLink>
    )
}

export default HeaderLink