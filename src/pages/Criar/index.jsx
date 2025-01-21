import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { useVideosContext } from '../../contexts/videos';
import styles from './criar.module.css'
import { useNavigate } from 'react-router-dom';

const CriarPage = () => {
    const { addVideos } = useVideosContext()
    const [title, setTitle] = useState('')
    const [capa, setCapa] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault();
        const newVideo = {
            "titulo": title,
            "capa": capa,
            "link": videoUrl,
        }
        addVideos(newVideo)
        navigate('/')
    }

    return (
        <>
            <section>
                <form onSubmit={formSubmit} className={styles.formContainer}>
                    <Title>
                        <h1 style={{ margin: '5rem 0', fontWeight: '700' }}>Adicione o seu video!</h1>
                    </Title>
                    <Input
                        type='text'
                        placeholder='Digite o título do vídeo!'
                        idInput='titulo'
                        onChanged={value => setTitle(value)}
                        value={title}
                        required={true}
                    />
                    <Input
                        type='text'
                        placeholder='Digite a URL da Capa do vídeo!'
                        idInput='UrlImg'
                        onChanged={value => setCapa(value)}
                        required={true}
                        value={capa}
                    />
                    <Input
                        type='text'
                        placeholder='Digite o link do vídeo!'
                        idInput='LinkVideo'
                        onChanged={value => setVideoUrl(value)}
                        required={true}
                        value={videoUrl}
                    />
                    <Button
                        color={'primary'}
                        type={'submit'}
                    >
                        Adicionar vídeo
                    </Button>
                </form>
            </section>
        </>
    )
}
export default CriarPage;