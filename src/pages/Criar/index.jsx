import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './criar.module.css'

const CriarPage = () => {
    return (
        <>
            <section>
                <form onSubmit={() => { }}>
                    <Input type='text' placeholder='Digite o título do vídeo!' idInput='titulo' />
                    <Input type='text' placeholder='Digite a URL da Capa do vídeo!' idInput='UrlImg' />
                    <Input type='text' placeholder='Digite o link do vídeo!' idInput='LinkVideo' />
                    <Button color={'primary'} type={'submit'}>Adicionar vídeo</Button>
                </form>
            </section>
        </>
    )
}
export default CriarPage;