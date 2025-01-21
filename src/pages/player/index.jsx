import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import styles from './player.module.css'
import Error404 from '../error404';
import { useEffect, useState } from 'react';
import { useVideosContext } from '../../contexts/videos';
import { TiHeart } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { useFavoritoContext } from '../../contexts/favoritos';
const Player = () => {
    const params = useParams();
    const { videos } = useVideosContext()
    const [video, setVideo] = useState({})
    const { favoritos, addFavorito } = useFavoritoContext()
    useEffect(() => {
        if (videos.length > 0) {
            const curVideo = videos.find(video => video.id === Number(params.id))
            console.log(curVideo)
            return setVideo(curVideo)
        }
    }, [params.id, videos])
    if (!video) {
        return <Error404 msg='Video não encontrado' />
    }
    const favoritado = favoritos.some(item => item.id === video.id)

    return (
        <>
            <Banner imagem={'player'} />
            <Title> <h1>Player</h1> </Title>
            <section>
                <div className={styles.player}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={video.link}
                        title={video.titulo}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>

                    </iframe>
                    <div className={styles.playerInfo}>
                        <Title><h3>{video.titulo}</h3></Title>
                        <div className={`${styles.favoritar} ${favoritado ? styles.favoritado : ''}`} onClick={() => { addFavorito(videos.find(item => item.id === video.id)) }}>
                            {favoritado ? <TiHeart /> : <TiHeartOutline />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Player;