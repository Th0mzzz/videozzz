import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Title from '../../components/Title';
import { useFavoritoContext } from '../../contexts/favoritos';
import styles from './favoritos.module.css'

const Favoritos = () => {
    const { favoritos } = useFavoritoContext()
    return (
        <>
            <Banner imagem={'favoritos'} />
            <Title><h1>Seus favoritos</h1></Title>
            <section className={styles.container}>
                {favoritos?.map(video => <Card {...video} key={video.id} />)}
            </section>
        </>
    )
}

export default Favoritos;