import { Link } from "react-router-dom";
import logo from "@/assets/logos/logo.png"
import logoDark from "@/assets/logos/logo-dark.png"
import styled from "styled-components";
import HeaderLink from "../Headerlink";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { useEffect, useState } from "react";
import Button from "../Button";

const StyledHeader = styled.header`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    background: var(--fundo-1);
    padding: 1.1em clamp(5em, 15vw, 10em);
    transition: all .4s;
    .logo{
        width: 80vw;
        min-width: 180px;
        max-width: 280px;
    }
    .icon-btn{
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        width: 25px;
        height: 25px;
        width: fit-content;
        cursor: pointer;
        color: var(--cor-texto);
        margin-left: 1rem;
        outline: none;
        svg{
            width: 100%;
            height: 100%;
        }
    }
    nav{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
    }
    
    @media (min-width: 1024px) {
        &{
            justify-content: space-between;
        }
    }
`


const Header = () => {
    const initialTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(initialTheme ? initialTheme : 'light')
    function changeTheme() {
        return theme === 'light'
            ? setTheme('dark')
            : setTheme('light')
    }
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <StyledHeader>
            <Link to="./">
                <img src={theme === 'light' ? logo : logoDark} alt="Logo Videozzz" className="logo" />
            </Link>
            <nav>
                <HeaderLink url='./'>
                    Home
                </HeaderLink>
                <HeaderLink url='./favoritos'>
                    Favoritos
                </HeaderLink>
                <button className="icon-btn" onClick={() => { changeTheme() }}>
                    {
                        theme === 'light' ? <LuMoon /> : <LuSun />
                    }
                </button>
                <Link to={'/criar'} style={{ marginLeft: '1rem' }}>
                    <Button color='primary' >
                        Adicionar vídeo
                    </Button>
                </Link>
            </nav>
        </StyledHeader>
    )
}

export default Header;