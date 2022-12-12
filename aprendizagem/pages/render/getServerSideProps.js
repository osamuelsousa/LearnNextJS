import styles from './index.module.css'
import Link from 'next/link'

export async function getServerSideProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/photos/1') //Colocando o /1 ver se consigo extrair uma unica imagem desse negocio
    const photos = await res.json()
    return { props: { photos } }
  }

/*
            {photos.map((fotos)=>(
            fotos.albumId == '1' ?
            //<div key={fotos.id}>{fotos.thumbnailUrl}</div> :
            <div key={fotos.id}>{fotos.url}</div> :
            null
        ))}

                Retirando do meio do codigo mais depois volta de novo
*/ 

function Render({photos}) {
    return (
    <div className={styles.index}>
        <Link href={"/render"}><button className={styles.indexBotao}>Voltar</button></Link>
        <img src={photos.url}></img>
        {console.log(('smauel'))}
      </div>
    )
  }

export default Render