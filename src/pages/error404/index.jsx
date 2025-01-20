import { Link } from 'react-router-dom'
import styles from './error404.module.css'

const Error404 = ({ msg = null }) => {
    return (
        <>
            <section className="container">
                <h2>Error 404</h2>
                <h4>{msg ? msg : ''}</h4>

                <Link to={'/'}>
                    <p>Volte para a Home!</p>
                </Link>
            </section>
        </>
    )
}

export default Error404