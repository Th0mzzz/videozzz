import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Title from "../../components/Title";
import styles from './home.module.css'
import { useVideosContext } from "../../contexts/videos";
const Home = () => {
    const { videos } = useVideosContext()

    return (
        <>
            <Banner imagem={'home'} />
            <Title><h1>Um lugar para salvar seus vídeos e filmes!</h1></Title>
            <section className={styles.container}>
                {videos.map(video => <Card {...video} key={video.id} />)}
            </section>
        </>
    )
}

export default Home;