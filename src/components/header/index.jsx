import { Link } from "react-router-dom";
import logo from "@/assets/logo.png"
import './header.module.css'
import styled from "styled-components";
import HeaderLink from "../Headerlink";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    padding: 1.1em 20em;
`
const Header = () => {
    return (
        <StyledHeader>
            <Link to="./">
                <img src={logo} alt="Logo cineTag" />
            </Link>
            <nav>
                <HeaderLink url='./'>
                    Home
                </HeaderLink>
                <HeaderLink url='./favoritos'>
                    Favoritos
                </HeaderLink>
            </nav>
        </StyledHeader>
    )
}

export default Header;