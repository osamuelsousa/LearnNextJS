import styles from './index.module.css'
import Link from 'next/link'

export default function Render() {
    return (
      <div className={styles.index}>
        <div>Testando metodos de carregar páginas:</div>
        <Link href={"/render/getServerSideProps"}><button className={styles.indexBotao}>getServerSideProps</button></Link>
      </div>
    )
  }