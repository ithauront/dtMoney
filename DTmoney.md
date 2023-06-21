DESAFIO: quando terminar as aulas inlcuir os butoes de segunda e terceira pagina para a transactions quando tiver muita transação ou seja cada pagina  ai ter so um numero maximo de transações e a partir desse numero uma nova pagina vai ser criada e ao clicarno butão dela vai renderizar as outras.

Nessa aqui eu so vou anotar coisas novas.

a variant de um styledComponents.
nos podemos criar um interface para um componente que é repetido diversas vezes com uma propriedade chamada variant?: 
colocando essa props no opcional.
com isso podemos mudar a cor por exemplo de uma variante do component sem ter que estilizar todo o componente novamente.
interface SummaryCardProps {
    variant?: 'green' | 'red' | 'blue'
}

podemos colocar varias possibilidades de nome para essa vbvariante. no nosso caso so usamos a green.
na estilização da div a gente passa essa propriedade para ela ter acesso dessa forma:
export const SummaryCard = styled.div<SummaryCardProps>`
e agora vamos fazer uma estilização condicional dessa forma
dentro do componente colocamos isso :
 ${props => props.variant === 'green' && css`
    background-color: ${props.theme['green-500']}
    `}
isso significa se a props.variant for igual a 'green' nos vamos adicionar um css (esse css tem que ser importado do styledComponentes) ai depois colocamos a templetes aspas e dentro delas estilizamos como quisermos. no background coloc não precisa colocar de novo o 'props => ' porque ja temos acesso as props por conta do props anterios. mas se quiser colocar vai fucnioanr tambem.
agora vamos no nosso index.tsx e colocar essa prop no card que a gente quiser que utilize ela.

# border-colapsing .
usamos a border colapsing para poder usar o border-spacing ai ele vai colocar o espaçamento que definimos no spacing entre cada linha da nossa tabela e não um espacaçamento desse em cada lado.

## modal
no react quando formos fazer um modal que tiver algo em tela (por exemplo um hover que faz abrir uma janela) temos que cuidar para que ele seja acessivel.
podemos até fazer com div, por exemlo clica no botão aparece uma div em tela. o leitor de tela pode não entender bem a acessibilidade. podemos seguir as regras do aria de acessibilidade, ou podemos usar uma biblioteca de acessibilidade que ja vem prontas para o react, por exemplo o ariakit criado por diego Ras um brasileiro.
outra seria o headless ui. ou chakra ui (mas esse traz uma estilização junta) nos vamos usar o radix-ui.com ele é uma serie de componentes primitivos que imita o comportamento de alo que existe mas de uma forma acessivel por exemplo o acordeon (uma janela com a flechinha pra baixo que abre uma nova lista) o acoredeon existe no html, mas com o radix ele ja vem com acessibilidade nem fazer tantas animaçoes.
no radix cada componente é instalado de maneira individual porque não faz sentido baixar o pacote sendo que raramente idemos utilizar diversos.
* usando o dialog
vamos importar * as dialog do radix-ui.
e vamos envolver todo o contexto <( ou seja tanto o botão que vai usar o modal quanto o proprio modal.) que vai usar o modal dentro de uma chave chamada Dialog.Root. o butão agora vai ficar envolvido em uma outra tag chamada dialog.triggerque vai fazer o modal abrir ou fechar. 
é interessante saber que o dialogTrigger ja é um button então a gente poderia usar ele para substituir a tag do button acessando ele no styles e estilizando ele. a gente teria que na pagina de styles importar o radix, e no lugar do button trocar o styled.button`` por um styled(Dialog.Trigger)`` masdessa forma a gente "sujaria" o nosso css com um codigo que é especifico de uma bilbioteca (o radix) por isso a gente não vai fazer. então para não fazer isso a gente vai colocar o dialogGTrigger por volta do botão e passar para ele uma propriedade chamaa asChild essa propriedade vai mudar para que ele não crie um novo butão e sim aproveite o butão que ja existe como o trigger, e se a gente não colocar isso vamos ter dois butões.
continuando (lendo a documentação se necessario) vamos precisar tabem de um dialog.Portal o portal ermite que a gente coloque um conteudo em um lugar e ele va parar em um outro lugar da aplicação. isso é necessario porque o modal vai ser feito no header porque o butão ta nele, mas se aparecer apenas no header vai ficar todo expremido la, ele tem que aparecer no corpo da aplicação. dentro do portal vamos colocar tambem o Dialog.Overlay que é basicamente o fundo preto para tirar o destaque do que esta no fundo (meio que aumentar a opacidade do fudno). e ainda dentro do portal temos o dialog.content que é o conteudo do que vamos ter no modal.
- dialog.content
o dialog content tem algumas predefinições de conteudo que podemos usar como title, description e close. é legal usar essas coisas se for necessario para o radix ja explicar para o leitor que tem um titulo ali e etc.
vamos usar o title e o close.
 vai ficar assim:
 import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import Logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

export function Header () {
    return(
     <HeaderContainer>
        <HeaderContent>
        <img src={Logo} alt="" />

       <Dialog.Root>
       < Dialog.Trigger asChild >
       <NewTransactionButton>Nova transação</NewTransactionButton>
       </Dialog.Trigger>
       <Dialog.DialogPortal>
        <Dialog.Overlay />
        <Dialog.Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <Dialog.Close />
        </Dialog.Content>

       </Dialog.DialogPortal>
       </Dialog.Root>

        </HeaderContent>
     </HeaderContainer>
    )
}
e vamos criar um componente novo chamado newTansactionModal para fazer o q tem dentro dele e o css.
agora vamos pegar tudo que esta envolvido pelo portal e vamos colocar la na pagina newTransaction modal e para substituir isso no Header a gente coloca so o componente newTransactionModal.
fica assim
  <Dialog.Root>
       < Dialog.Trigger asChild >
       <NewTransactionButton>Nova transação</NewTransactionButton>
       </Dialog.Trigger>
     <NewTransactionModal />
       </Dialog.Root>

e tudo que estava ali agora esta na pagina newTransactionModal.

agora vamos estilizar algumas coisas do newTransactionModal, principalmente o overLay e o content por ixxo vamos criar essas consts no styles dele. e agora sim vamos estilizar como uma tag do radix a pagina styles fica assim:

import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)` 
`
    
    e no index vamos traocar a tag dialog.overlay pela tag Overlay importada do nosso styles.

# manha para centralizar coisas na tela. no css fazer isso:
 position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)

# o radix tambem tem um componente para radio.
dessa forma a gente pode estilizar um butão para se tornar radio. é util porque estilizar radio é muito chato.
como para o button a gente vai ter que instalar esse componente.
e no site do radix eme mostra tambem como aplicar o radio.
quando clicamos no radio, o html coloca automaticamente um atributo chamado data-state='checked' a gente pode pegar isso para estilizar.

### JSON SERVER
como usamos so o react vamos usar o json server para simular um backend para nos.
o json server é um projeto que vamos instalar e ele é bem completo então vai servir para a maioria das coisas que vamos usar de API e backend.
vamos instalar ele com o npm i json-server -D
e vamos criar um arquivo na raiz do projeto chamado server.json
e nesse arquivo vamos abrir um objeto e cada propriedade que a gente passar para esse objeto vai ser uma entidade(ou rota ou podemos pensar como uma tabela do banco de dados) da nossa aplicação.
agora que estamos com o json server instalado a gente pode colocar ele nesse arquivo dando no terinal o codigo
npx json-server server.json //server json nesse caso sendo o nome do arquivo que a gente fez. se fosse outro nome a gente colocaria outro nome aqui.
ele vai tentar usar a porta 3000 por padrão se ela ja estiver sendo usada vdc tem que repetir o codigo com um -p e ecolher a porta por exemplo3333
apos isso o terminal vai rodar a alicação e se vc acessar a porta 3000 vc vai ter acesso ao banco de dados.
por exemplo a localhost.3000/transactions vai nos retornar o array.
se acessar so a 3000 não retorna nada.
* colocar data no json. o json não suporta a data no padrão js como escrever um new Date() então temos que ir no navegador e escrever new new Date().toISOString()
ai ele vai te dar a data no padrão que podemos usar no javascript assim.
'2023-06-19T17:59:58.027Z'
atualizamos o server.json e ele ficou assim:
{
    "transactions" :[
        {
            "id": 1,
            "description": "desenvolvimento de site",
            "type": "income",
            "category": "venda",
            "price": 14000,
            "createdAt": "'2023-06-19T17:59:58.027Z'"
        }
    ] 
}
agora o json server não fica monitorando esse arquivo, se a gente quiser isso a gente tem que passar um -w no fim do codigo para rodar ele. ai ele vai ficar com watch e vai monitoar o negocio. se não podemos dar reload. cntrl + c para sair e depois abre de novo
pelo visto precisa sair e abrir de novo com o -w no fim
la no site do json server ele vai ensinar como utilizar varias coisas para ordenar essa api como por exemplo um filtro. 
para usar um filtro vamos la no entedeço e depois colocamos um ? e por exemplo o type=o valor por exemplo
http://localhost:3000/transactions?type=income
todo isso esta escrito la na documentação do json server
podemos tambem adicionar um delay para ficar mais realista de que como se a gente tivesse uma api em server. o dalay é legal para a gente lebrar de coisas como o loading, desabilitar um botão pra o usuario não clicar mil vezes.
o comando fica
npx json-server server.json -w -d 500
nos vamos colocar ele no packagejson como um script de run. para isso copiamos sem o npx
o packagejson ficaassim
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext .ts,.tsx",
    "preview": "vite preview",
    "dev:server":"json-server server.json -w -d 500"
  },
  e ai a gente pode rodar ele com o npm run dev:server
  
### pegar as infos da api
para pegar as infos da api nos usamos o fetch. porem se a gente colocar ele solto ele vai ser chamado cada vez que ago na pagina mudar. para evistar sso vamos usar o useEffect assim ele so vai ser chamado quando a dependencia for alterada.e se a gente passar um array de dependencias vazio essa função qe esta dentro do useEffect so vai ser executada uma vez.
a gente podia fazer o useEffect assim: 
useEffect(()=> {
fetch('  http://localhost:3000/transactions').then(response =>{console.log(response)})
},[])
so qe a resposta que a gente receberia no console.log seria somente dizendoq eu esta vindo uma string e não o conteudo que é o que a gente quer.
para ter o que a gente quer a gente tem que transformar em texto dessa forma:
useEffect(()=> {
fetch('  http://localhost:3000/transactions').then(response =>{
    response.text().then(data => {console.log(data)}) })
},[])
como o nosso objeto que queremos pegar é um json. se a gente trocar o .text por .json ele ja vai trazer isso em formato objeto javascript e vai ser ainda melhor para a gente trabalhar.
o react no type script não permite transformar isso em uma função assincrona. porem podemos melhorar um pouco a sintaxe dessa função 
useEffect(()=> {
fetch('  http://localhost:3000/transactions')
.then(response => response.json())
    .then(data => {
        console.log(data)
    }) 
},[])
a geente passou o response.json direto apos a arrow do primeiro response.

se a gente quiser usar o assinc await dentro d useEffect a gente tem que passar uma função fora do useEffect com o assinc await e no useEffect chamar ela.
vamos fazer assim para poder ter tambem esse exemplo.
    async function loadTransactions() {
        const response = await fetch('  http://localhost:3000/transactions')
        const data = await response.json()

        console.log(data)
    }
useEffect(()=> {
    loadTransactions
},[])

### reduce
o reduce é utilizado quando queremos diminuir uma const a apenas alguns paramentros. nesse caso vamos diminuir a transactio a apenas os parametros income outcome e total.
  const summary = transactions.reduce((acc, transaction)=>{
if (transaction.type === 'income')
 { acc.income += transaction.price
acc.total += transaction.price
}
else {acc.outcome += transaction.price 
    acc.total -= transaction.price
}
        
        return acc;
    }, {income: 0 , outcome: 0, total: 0} )

o reduce pede que a gente de dois argumento geralmento o primeiro é chamado de acc ou acumulator. e o segundo é a const que estamos utilisando.
ai a gente nas dependencias definie o income outcome e total como iniciando em 0 esses valores vão ser os valores income outcome e total do acc. podemos acessar eles usando acc.income etc.  apos isso vamos iniciar a nossa mainupalção desses dados.
pevamos que se o transaction type que estiver chegando for de tipo income nos vamos pegar o acc.income (que no inicio é zero) e adicionar ele do valor desse income que esta vindo. alem disso vamos pegar o acc total e tambem adicionar do valor que esta vindo. vamos dizer que o price era 10 ai o acc.income vai ficar como 10 e o total tambem.
depois disso a gente faz o else (que nesse caso a unica possibilidade possivel é o transaction.outcome) ai iremos pegar o acc outcome e adicionar do transaction.price. e vams pegar o total e reduzir do transaction price. ou seja se o outcome foi de 5 vai ficar acc.outcome = 5 e acc.total = 5 porque era 10 menos 5. e o acc.income continua igual em 10.
depois disso retornamos nosso acc. 
e assim atualizamos os valores income outcome e total utilizando cada entrada do transaction.
se a gente for la no nosso server e adicionar um novo outcome ele vai mudar a soma.



    
    