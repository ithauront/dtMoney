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

    
    