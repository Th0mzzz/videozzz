import styled from "styled-components";
import iconeFavoritar from './favorite_outline.png'
import iconeFavoritado from './favorite.png'
import { useFavoritoContext } from "@/contexts/favoritos.jsx";
import { Link } from "react-router-dom";
import { useVideosContext } from "../../contexts/videos";

const CssCard = styled.div`
    background: #f2f2f2;
    padding: 0 0 1em 0; 
    margin-top:.5em;
    width: 282px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .capa{
        width: 100%;
    }
    a{
        text-decoration: none !important;

    }
    h2, .favoritar{
        padding: 0 1em;
        color:#000;

    }
    .favoritar{
        width: 25px;
    }
    img.favoritar{
        cursor: pointer;
    }
`

const Card = ({ id, titulo, capa }) => {
    const { favoritos, addFavorito } = useFavoritoContext()
    const { videos } = useVideosContext()
    const favoritado = favoritos.some(item => item.id === id)

    return (
        <CssCard>
            <Link to={`player/${id}`}>
                <img src={capa} alt={titulo} className="capa" />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={favoritado ? iconeFavoritado : iconeFavoritar}
                alt="Favoritar filme" className="favoritar"
                onClick={() => { addFavorito(videos.find(item => item.id === id)) }}
            />
        </CssCard>
    )
}

export default Card;