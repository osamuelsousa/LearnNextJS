//https://nextjs.org/docs/routing/dynamic-routes

import { useRouter } from 'next/router'

export default function Teste(){

    const router = useRouter()
    const { produtox } = router.query
    console.log(router)

    return(
        <>
        <h1>Post: {produtox} </h1>
        <p>Abra o console para dar uma olhada no que router entrega como objeto</p>
        </>
    )
}