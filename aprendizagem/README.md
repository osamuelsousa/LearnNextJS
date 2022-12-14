# LearnNextJS
-Criando um repositorio para apreender NEXTJS de acordo com a documentação.
-Cada novo TAB é um novo passo a passo

    https://nextjs.org/docs/getting-started: Documentação.
    npx create-next-app@latest: Criando um novo projeto
    npn run dev: Rodar o servidor:

    --------------------------------------PÁGINAS------------------------------------------------------------------------------------------------------
    
    Páginas: Exemplos de como as pastas interagem criando rotas:
    ./pages/index.js = localhost:3000
    ./pages/fileone.js = localhost:3000/fileone
    ./pages/home/index.js = localhost:3000/home
    ./pages/home/about.js = localhost:3000/home/about

    Páginas | Rotas dinamicas:
    Criando /pages/Rotas-Dinamicas
    Criando /pages/Rotas-Dinamicas/[pid].js: Isso faz com que qualquer escrita ao lado de Rotas-Dinamicas/ seja possivel usar. Mais informações na
    pasta de /pages/Rotas-Dinamicas

    Pré renderização:
    Existem duas estatica e no servidor, o recomendado é a renderização estatica...
    Estática: A página é gerada em tempo de contrução, significa que quando você executa o script next build a página é gerada, e é servida para o cliente já pronta.
    Por padrão, o Next.js pré-renderiza páginas usando geração estática sem buscar dados. Aqui está um exemplo:
        function About() {
            return <div>About</div>
        }
        export default About
    Observe que esta página não precisa buscar nenhum dado externo para ser pré-renderizado. Em casos como esse, o Next.js gera um único arquivo HTML por página durante o tempo de compilação.
        Geração estática com dados: Algumas páginas precisam de dados externos para formar a página html por completo. Existem dois caminhos, o conteúdo da sua página depende de dados externos: Use getStaticProps. ou se seus caminhos de PÁGINA dependem de dados externos: Use getStaticPaths.
        Testei os metodos acima na pasta /pages/getStaticProps
    
    Renderização ao lado do servidor: Sua página precisa ser renderizada a cada nova solicitação, pois os dados estão mudando constantimente.
    Exemplos:
            export async function getServerSideProps() {
                Abaixo ele ira fazer a requisição desses dados e armazenar em data.
            const res = await fetch(`https://.../data`)
            const data = await res.json()

                Abaixo ele ira retornar os dados armazenados em data.
            return { props: { data } }
            }

            export default function Page({ data }) {
                Aqui a page ira receber os dados passados pela funcao getsServerSideProps.
            }

            Testei os metodos acima na pasta /pages/Render.
    --------------------------------------Busca de Dados----------------------------------------------------------------------------------------------
    getServerSidePropssó roda no lado do servidor e nunca roda no navegador.
        export async function getServerSideProps(context) {
        return {
            props: {}, // will be passed to the page component as props
        }
        }

    getStaticProps roda no servidor quando está fazendo a build, depois de carregar os dados ele gera um html estatico com os dados passados para exibir ao  usuario com uma performance maior.
        export async function getStaticProps(context) {
        return {
            props: {}, // will be passed to the page component as props
        }
        }
    E tem a outra função tambem que serve para renderizar até as pastas dinamicas: getStaticPatch, que muda algumas pequenas escritas...

    Existem tambem o ISR: que é faz com que o Next.js permita que você crie ou atualize páginas estáticas depois de construir seu site. A regeneração estática incremental (ISR) permite que você use a geração estática por página, sem precisar reconstruir todo o site . Com o ISR, você pode manter os benefícios da estática enquanto dimensiona para milhões de páginas.
    Para usar o ISR, adicione o revalidateprop a getStaticProps: Exemplo abaixo:
        export async function getStaticProps() {
            const res = await fetch('https://.../posts')
            const posts = await res.json()
            return {props: {posts}, revalidate: 10, // In seconds}
        }

    Tambem é possivel fazer a busca de dados no lado do cliente:
    O exemplo a seguir mostra como você pode buscar dados no lado do cliente usando o hook useEffect.
    
    import { useState, useEffect } from 'react'

        function Profile() {
        const [data, setData] = useState(null)
        const [isLoading, setLoading] = useState(false)

        useEffect(() => {
            setLoading(true)
            fetch('/api/profile-data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        }, [])

        if (isLoading) return <p>Loading...</p>
        if (!data) return <p>No profile data</p>

        return (
            <div>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
            </div>
        )
        }

        ---------------------------------------Suporte a CSS integrado-------------------------------------------------------------------------
        Suporta muitos meios de como personalizar uma página:
        Sass, Css e em pages/_app.js (Que é um css global), porem usando o [nome do arquivo].module.css é possivel importar ele em qualquer página, sendo assim o de melhor utilidade.

        ---------------------------------------Disposições-------------------------------------------------------------------------
        Não ficou claro, mas não considerei muito importante:

        --------------------------Componente de imagem e otimização de imagem-------------------------------------------------------------------------
        Não ficou claro, mas não considerei muito importante:
        O componente Next.js Image, next/image, é uma extensão do <img>elemento HTML, desenvolvido para a web moderna. Ele inclui uma variedade de otimizações de desempenho integradas para ajudá-lo a obter bons Core Web Vitals . Essas pontuações são uma medida importante da experiência do usuário em seu site e são consideradas nas classificações de pesquisa do Google . Exemplo:
        import Image from 'next/image'

        export default function Home() {
        return (
            <>
            <h1>My Homepage</h1>
            <Image
                src="/me.png"
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <p>Welcome to my homepage!</p>
            </>
        )
        }
        É possivel colocar classname={Importar o style.css para remodelar a imagem, tambem é possivel fazer isso com as próprias propriedades da <IMAGE/>}, https://nextjs.org/docs/api-reference/next/image Uma lista de todas as propriedades, sempre escolher elas ao inves de folhas css...

        ---------------------------------------Otimizando Fonte-----------------------------------------------------------------
        @next/fontinclui auto-hospedagem automática integrada para qualquer arquivo de fonte. Isso significa que você pode carregar fontes da Web de maneira otimizada com mudança de layout zero, graças à size-adjustpropriedade CSS subjacente usada.
        Este novo sistema de fontes também permite que você use convenientemente todas as fontes do Google com desempenho e privacidade em mente. Os arquivos CSS e de fonte são baixados no momento da compilação e auto-hospedados com o restante de seus recursos estáticos. Nenhuma solicitação é enviada ao Google pelo navegador.
        Não ficou muito claro, mas acho que não seja necessario já que os arquivos estaricos já serão enviados para a produção com a fonte desejada.
        
        
        -----------------------------------Serviço de arquivo estático--------------------------------------------------------
        Next.js pode servir arquivos estáticos, como imagens, em uma pasta chamada publicno diretório raiz. Os arquivos internos publicpodem ser referenciados pelo seu código a partir da URL base ( /).
        Por exemplo, se você adicionar uma imagem a public/me.png, o seguinte código acessará a imagem:

        import Image from 'next/image'

        export default function Avatar() {
        return <Image src="/me.png" alt="me" width="64" height="64" />
        }

        -----------------------------------Atualização rápida------------------------------------------------------------------
        Nada de interessante, recurso do próprio nextjs

        -----------------------------------ESLintName------------------------------------------------------------------
        Nada de interessante, recurso do próprio nextjs

        -----------------------------------Da pra usar com Typescript------------------------------------------------------------------
        Nada de interessante, recurso do próprio nextjs

        -----------------------------------variáveis ​​ambientais---------------------------------------------------
        Nada de interessante, recurso do próprio nextjs

        -----------------------------------Otimizando Scripts-----------------------------------------------------------------
        Carregando script de terceiros dentro do nosso próprio código:
        import Script from 'next/script'

        export default function Dashboard() {
        return (
            <>
            <Script src="https://example.com/script.js" />
            </>
        )
        }