const texto = document.querySelector('#descricao')
const exposicao = document.querySelector('#cartaz')
const filme01 = document.querySelector('#filme1')
const filme02 = document.querySelector('#filme2')
const filme03 = document.querySelector('#filme3')
const filme04 = document.querySelector('#filme4')

filme01.addEventListener('click', passagem01)
filme02.addEventListener('click', passagem02)
filme03.addEventListener('click', passagem03)
filme04.addEventListener('click', passagem04)

function passagem01(){
    exposicao.src='images/cartaz_01.jfif'
    texto.textContent =`Deadpool & Wolverine reúne o  icônico mercenário tagarela Wade Wilson (Ryan Reynolds) e o poderoso mutante Wolverine (Hugh Jackman) em uma aventura explosiva, escrita e produzida pelos mesmos talentos por trás de Deadpool (2016) e Deadpool 2 (2018). Wade Wilson desfruta de um momento de aparente calma ao lado de Vanessa (Morena Baccarin) e seus amigos e, em contra partida, Wolverine se recupera de seus ferimentos. Um têm os seus caminhos cruzados com o outro, dando início a uma improvável aliança. Juntos, eles enfrentam um inimigo formidável em comum, desencadeando uma jornada repleta de ação, humor e reviravoltas surpreendentes. Deadpool & Wolverine promete ser uma aventura épica, cheia de referências aos quadrinhos e momentos de pura adrenalina, proporcionando aos fãs uma experiência única e inesquecível no universo dos super-heróis.`

}
function passagem02(){
    exposicao.src='images/cartaz_02.webp'
    texto.textContent=`Baseado em fatos reais, "Silvio", dirigido por Marcelo Antunez, retrata o sequestro do icônico apresentador Silvio Santos, vivido por Rodrigo Faro. A trama se inicia 12 horas após o sequestro de sua filha (Polliana Aleixo), quando Silvio enfrenta uma nova crise: sua casa é invadida e ele é mantido como refém por sete horas. Diante dessa situação de extremo perigo, o apresentador precisa lutar pela sua vida e pela segurança de sua família, enquanto reflete sobre sua trajetória de vida, marcada por desafios e conquistas. As lembranças remontam à sua juventude, quando, aos 14 anos, começou a trabalhar como camelô, dando os primeiros passos em direção ao sucesso. O filme explora o lado humano de Silvio, que, mesmo em uma situação de vulnerabilidade, tenta proteger seu legado. Esse evento dramático marcou o Brasil e se tornou um dos momentos mais desafiadores na vida do apresentador, destacando sua resiliência e força interior.`

}
function passagem03(){
    exposicao.src='images/cartaz_03.jfif'
    texto.textContent = `Em A Fera, Dr. Nate Daniels (Idris Elba) é um homem que perdeu a mulher recentemente. Para viver o luto, ele decide retornar à África do Sul, local onde conheceu sua falecida esposa, para passar férias há muito planejadas com suas duas filhas (Iyana Halley e Leah Jeffries) em uma reserva natural administrada pelo velho amigo da família Martin Battles (Sharlto Copley), um biólogo da vida selvagem. Mas esse descanso há muito tempo esperado e tranquilo se transformará em um teste de sobrevivência quando um leão sedento de vingança, o único sobrevivente da caça sanguinária de caçadores furtivos, que mataram toda sua manada, começa a devorar qualquer humano em seu caminho, já que considera todos os humanos como um inimigo e persegue o médico e sua família por toda a savana. Agora, o único jeito de escapar das garras da fera é lutando e sobrevivendo, ou matar o leão de uma vez por todas.`

}
function passagem04(){
    exposicao.src='images/cartaz_04.jfif'
    texto.textContent = `Em Coringa 2, acompanhamos a sequência do longa sobre Arthur Fleck (Joaquin Phoenix), que trabalhava como palhaço para uma agência de talentos e precisou lidar desde sempre com seus problemas mentais. Vindo de uma origem familiar complicada, sua personalidade nada convencional o fez ser demitido do emprego, e, numa reação a essa e tantas outras infelicidades em sua vida, ele assumiu uma postura violenta - e se tornou o Coringa. A continuação se passa depois dos acontecimentos do filme de 2019, após ser iniciado um movimento popular contra a elite de Gotham City, revolução esta, que teve o Coringa como seu maior representante. Preso no hospital psiquiátrico de Arkham, ele acaba conhecendo Harleen "Lee" Quinzel (Lady Gaga).`
}