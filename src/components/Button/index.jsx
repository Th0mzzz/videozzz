import styled from "styled-components";

const CSSbutton = styled.button`
    background: ${props => `var(--${props.$color})`};
    border:none;
    color:#fff;
    font-weight:400;
    font-size:18px;
    font-family:'Poppins', Arial;
    padding: .5rem 1rem;
    border-radius:10px;
    cursor: pointer;
    transition:all .4s;
    width: ${props => props.$type === 'submit' ? `100%` : 'fit-content'};
    &:hover{
        box-shadow: 0 0 8px var(--primary);
    }
`

const Button = ({ children, color, type = null }) => {
    return (
        <CSSbutton $color={color} $type={type}>
            {children}
        </CSSbutton>
    )
}

export default Button;