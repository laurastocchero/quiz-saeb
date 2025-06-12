//Elementos da interface
const form = document.getElementById("start-form");
const quizDiv = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const anwersDiv = document.getElementById("anwers");
const nextButton = document.getElementById("next-button");
const resultDiv = document.getElementById("result");

//Variáveis de controle
let studentName = "";
let serie = "";
let disciplina = "";
let currentQuestion = 0;
let score = 0;


// Banco de perguntas separadas por série e disciplina

const question = {
    "3ano": {
        matematica: [
            {
                question:"Se  é um número real tal que -2 < x < 3, qual das seguintes afirmações é verdadeira?",
                options: [" x pode ser igual a 3.", "x pode ser igual a -2.", " x pode ser igual a 4.", " x pode ser igual a 0."],
                correct: 3
            },
            {
                question: "Se  raíz de dois está localizado entre 1 e 2 na reta numérica, qual das seguintes afirmações é verdadeira",
                options: ["raíz de dois é um número inteiro", "raíz de dois é um número racional", "raíz de dois é aproximadamente 1,4", "raíz de dois é maior que 2"],
                correct: 2
            },
            {
                question: "Qual é a coordenada x do ponto A no plano cartesiano sabendo que ele está localizado no quadrante II?",
                options: ["positiva", "negativa", "zero", "não determinada."],
                correct: 1
            },
            {
                question: "Ana foi a um parque de diversões que possui um mapa representado num plano cartesiano. Os seguintes brinquedos estão localizados no mapa: - Carrossel está localizado no ponto C(2,3; - Roda-gigante no ponto R(−4,5); - Montanha-russa no ponto M(−6,−2). Em que quadrante está localizada cada atração? ",
                options: ["Carrossel no 1º quadrante, roda-gigante no 2º quadrante, montanha-russa no 4º quadrante.", "Carrossel no 2º quadrante, roda-gigante no 1º quadrante, montanha-russa no 3º quadrante.", " Carrossel no 1º quadrante, roda-gigante no 2º quadrante, montanha-russa no 3º quadrante.", "Carrossel no 4º quadrante, roda-gigante no 3º quadrante, montanha-russa no 2º quadrante."],
                correct: 2
            },
            {
                question: "A cidade de Arvoredo tem dois marcos históricos importantes: a Praça Central, localizada no ponto A(3,4), e a Torre do Relógio, situada no ponto B(7,1) no mapa da cidade, representado em um plano cartesiano. O departamento de turismo da cidade quer colocar placas informativas que indiquem a distância exata entre esses dois marcos. A distância, em unidades de mapa, que será informada é de:",
                options: ["3 unidades", "4 unidades", "5 unidades", "6 unidades."],
                correct: 2
            },
            {
                question: "Qual a distância entre dois pontos que possuem as coordenadas P (–4,4) e Q (3,4)?",
                options: ["4", "5", "6", "7."],
                correct: 3
            },
            {
               question: "Observe no esquema parte da rota de um ônibus. Entre os pontos de parada A e B, deseja-se instalar outro ponto C, tal que a distância entre os pontos A e C seja a mesma que de C a B. Determine as coordenadas do ponto C.?",
                options: ["4,5, 12", "0, 6", "4,5, 6", "12, 4,5"],
                correct: 2
            },
            {
                question: "Dado um segmento de reta AB cujas extremidades estão nas coordenadas A (1, 3) e B (– 5, – 6), quais são as coordenadas do seu ponto médio?",
                options: ["M = (– 1,5; – 2)", "M = (– 2; – 1,5)", "M = (2; 1,5)", "M = (1,5; 2)"],
                correct: 1
            },
            {
                question: "Maria ganha um salário de R$ 3 000,00 por mês. Ela recebeu um aumento de 20%. Qual será o novo salário de Maria?",
                options: ["R$ 3 000,00", "R$ 2 400,00", " R$ 3 600,00", "R$ 4 200,00", "R$ 4 500,00"],
                correct: 2
            },
            {
                question: "Uma loja de roupas está com uma promoção de 25% de desconto em todas as peças. Se uma camisa custa R$ 80,00, qual será o preço da camisa com o desconto?",
                options: ["R$ 60,00", "R$ 80,00", "R$ 100,00", "R$ 120,00", "R$ 125,00"],
                correct: 0
            },
            {
                question: "Marília tinha um salário de R$ 1.800,00 e recebeu um aumento de 10%. Quanto Eugênia passou a ganhar?",
                options: ["R$ 1.620,00", "R$ 1.810,00", "R$ 1.980,00", "R$ 2.160,00", "R$ 2.312,00."],
                correct: 2
            },
            {
                question: "6-Misael comprou uma assadeira que estava anunciada por R$ 26,00. O dono da loja lhe deu um desconto de 15%. Quanto Marcos pagou pela assadeira?",
                options: ["R$ 11,00", "R$ 22,10", "R$ 23,56", "R$ 24,75", "R$ 25,85"],
                correct: 1
            },
            {
                question: "O número de faces de um poliedro convexo que possui 34 arestas é igual ao número de vértices. Quantas faces possui esse poliedro?",
                options: ["18", "20", "36", "34", "19"],
                correct: 0
            },
            {
                question: "(Fuvest) O número de faces triangulares de uma pirâmide é 11. Pode-se, então, afirmar que essa pirâmide possui:",
                options: ["33 vértices e 22 arestas.", "12 vértices e 11 arestas.", "22 vértices e 11 arestas.", "11 vértices e 22 arestas.", "12 vértices e 22 arestas.",],
                correct: 4
            }
        ],
        portugues: [
            {
                question: "Qual é o antônimo de 'feliz'?",
                options: ["triste", "alegre", "contente"],
                correct: 0
            },
            {
                question: "Qual é o plural de 'papel'?",
                options: ["papéis", "papeis", "papelões"],
                correct: 0
            }
           
        ]
    }
    
};
//Ao enviar o formulário iniciamos o quiz
form.addEventListener("submit", function (e){
    e.preventDefault();

    studentName = document.getElementById("name").value;
    serie = document.getElementById("serie").value;
    disciplina = document.getElementById("disciplina").value;

    //Verifica se todos os campos foram preenchidos
    if(!studentName || !serie || !disciplina) return;

    //Esconde o formulário e mostra a primeira pergunta
    form.style.display = "block";
    showQuestion();
});

function showQuestion() {
    const q = questions[serie][disciplina][currentQuestion];
    questionText.textContent = q.question;
    anwersDiv.innerHTML = "";

    const total = question[serie][disciplina].length;
    const percent = ((currentQuestion) / total) * 100;
    document.getElementById("progress").style.width = `${percent}%`; 

    //cria os botões de resposta
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
            const buttons = anwersDiv.querySelectorAll("button");

            buttons.forEach((b, i) => {
                b.disabled = true;
                if(i === q.correct) {
                    b.classList.add("correct");
                }else if (i === idx) {
                    b.classList.add("wrong");
                }
            });
            if (idx === q.correct) score++;
            nextButton.style.display = "block";
        };
        anwersDiv.appendChild(btn);
    });

}