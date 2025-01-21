import { Link } from 'react-router-dom'
import styles from './error404.module.css'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Error404 = ({ msg = null }) => {
    return (
        <>
            <section className={styles.container}>
                <Title><h1>Error 404</h1></Title>
                <h4>{msg ? msg : ''}</h4>
                <Link to={'/'}>
                    <Button color='primary'>Volte para a Home!</Button>
                </Link>
            </section>
        </>
    )
}

export default Error404