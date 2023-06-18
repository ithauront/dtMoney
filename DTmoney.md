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
