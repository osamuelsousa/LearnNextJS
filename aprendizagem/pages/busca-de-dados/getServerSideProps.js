import styles from '../../styles/index.module.css'
import Link from 'next/link'

export async function getServerSideProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/photos') //Colocando o /1 ver se consigo extrair uma unica imagem desse negocio
    const photos = await res.json()
    return { props: { photos } }
  }
  
  function Render({photos}) {
    return (
    <div className={styles.indexCorreto}>
        <Link href={"/busca-de-dados"} className={styles.indexMargin}><button className={styles.indexBotao}>Voltar</button></Link>
        <ul className={styles.indexUl}>
        {photos.map((fotos)=>(
          fotos.albumId == 1 ?
          <img alt='fotos.title' src={fotos.thumbnailUrl} className={styles.indexLi}></img> :
          null
        ))}
        </ul>
      </div>
    )
  }

export default Render