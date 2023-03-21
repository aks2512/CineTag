import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'contexts/favoritos';

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
            {favorito.map((video) => (
                <Card key={video.id} {...video} />
            ))}
            </section>
        </>
    )
}
