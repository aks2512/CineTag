import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useEffect, useState } from 'react';
import styles from './Inicio.module.css';

export default function Inicio() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/aks2512/cinetag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setvideos(dados);
      })
  }, [])

  return (
    <>
        <Banner imagem="home" />
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <section className={styles.container}>
          {videos.map((video) => (
            <Card key={video.id} {...video} />
          ))}
        </section>
    </>
  )
}
