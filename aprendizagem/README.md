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

