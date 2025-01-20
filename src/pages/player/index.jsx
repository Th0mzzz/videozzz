import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import styles from './player.module.css'
import Error404 from '../error404';
import { useEffect, useState } from 'react';
import { useVideosContext } from '../../contexts/videos';

const Player = () => {
    const params = useParams();
    const { videos } = useVideosContext()
    const [video, setVideo] = useState({})

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
    return (
        <>
            <Banner imagem={'player'} />
            <Title> <h1>Player</h1> </Title>
            <section>
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
            </section>
        </>
    )
}

export default Player;