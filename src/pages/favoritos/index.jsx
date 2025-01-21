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
                {
                favoritos.length > 0 
                ? favoritos.map(video => <Card {...video} key={video.id} />) 
                : <h2 style={{color:'var(--cor-texto)'}}>Não há favoritos!</h2>
                }

            </section>
        </>
    )
}

export default Favoritos;