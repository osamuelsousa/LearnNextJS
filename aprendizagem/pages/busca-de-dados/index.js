import styles from '../../styles/index.module.css'
import Link from 'next/link'

export default function Render() {
    return (
      <div className={styles.index}>
        <div>Testando metodos de carregar páginas:</div>
        <Link href={"/busca-de-dados/getServerSideProps"}><button className={styles.indexBotao}>getServerSideProps</button></Link>
        <Link href={"/busca-de-dados/getStaticProps"}><button className={styles.indexBotao}>getStaticProps</button></Link>
      </div>
    )
  }