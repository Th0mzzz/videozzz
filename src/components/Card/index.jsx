import styled from "styled-components";
import { useFavoritoContext } from "@/contexts/favoritos.jsx";
import { Link } from "react-router-dom";
import { useVideosContext } from "../../contexts/videos";
import { TiHeart } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";

const CssCard = styled.div`
    background: var(--cor-container);
    border-radius: 15px;
    padding: 0 0 1em 0; 
    margin-top:.5em;
    width: 282px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 0 5px #0000005e;
    .card-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--cor-container);
        z-index: 100;
        position:relative;
    }
    .capa{
        width: 100%;
        height: 180px;
        object-fit: cover;
        transition: all .4s;
        &:hover{
            transform: scale(1.1);
        }
    }
    a{
        text-decoration: none !important;

    }
    h2, .favoritar{
        padding: 0 1em;
        color: var(--cor-texto);

    }
    .favoritar{
        font-size: 32px;
        cursor: pointer;
        &.favoritado{
            animation: pular .6s;
            color: var(--primary);
        }

    }

    @keyframes pular {
        0%,100%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.5);
        }
    }
`

const Card = ({ id, titulo, capa }) => {
    const { favoritos, addFavorito } = useFavoritoContext()
    const { videos } = useVideosContext()
    const favoritado = favoritos.some(item => item.id === id)

    return (
        <CssCard>
            <Link to={`/player/${id}`}>
                <img src={capa} alt={titulo} className="capa" />
            </Link>
            <div className="card-info">
                <Link to={`player/${id}`}>
                    <h2>{titulo}</h2>
                </Link>
                <div className={`favoritar ${favoritado ? 'favoritado' : ''}`} onClick={() => { addFavorito(videos.find(item => item.id === id)) }}>
                    {favoritado ? <TiHeart /> : <TiHeartOutline />}
                </div>
            </div>
        </CssCard>
    )
}

export default Card;