import CabecalhoLink from 'components/CabecalhoLink';
import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to="./" >
            <img src={logo} alt="Logo da cinetag" />
        </Link>
        <nav>
            <ul>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
            </ul>
        </nav>
    </header>
  )
}
