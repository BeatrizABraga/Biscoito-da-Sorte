const close = document.getElementById('vibrating-img')
const button = document.querySelector('#back')
const phases = document.querySelector('#phases')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const frases = [
    "A vida é uma jornada, não um destino.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Se você quer algo que nunca teve, então precisa fazer algo que nunca fez.",
    "Quanto maior a dificuldade, maior a glória.",
    "O pessimista vê dificuldade em cada oportunidade. O otimista vê oportunidade em cada dificuldade.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "Acredite em si mesmo e tudo é possível."
]

close.addEventListener('click', toggleScreen)
button.addEventListener('click', toggleScreen)
document.addEventListener('click', function() {
    let phase = geratePhases()
    showThePhase(); // Chama a função para exibir uma fase ao carregar a página
});

function toggleScreen (){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function geratePhases () {
    const indice = Math.floor(Math.random() * frases.length) 
    
    return frases[indice]
}

function showThePhase (phase) {
    phase = geratePhases()
    phases.innerText = phase
}