import { useFavoritoContext } from 'contexts/favoritos';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import iconeDesfavoritar from './favorite.png';
import iconeFavoritar from './favorite_outline.png';

export default function Card({id, titulo, capa}) {
  const { adicionarFavorito, isFavorito } = useFavoritoContext();
  return (
    <div className={styles.container}>
        <Link className={styles.link} to={`/${id}`}>
          <img src={capa} alt={titulo} className={styles.capa} />
          <h2>{titulo}</h2>
        </Link>
        <img 
          className={styles.favoritar} 
          src={ isFavorito(id) === true ? iconeDesfavoritar : iconeFavoritar } 
          alt="Favoritar filme" 
          onClick={() => adicionarFavorito({ id, titulo, capa })}
        />
    </div>
  )
}
