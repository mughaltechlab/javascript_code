const questions = [
    {
        question : "which is the largest animal in the world?",
        answers : [
            {text : "Shark", correct : false},
            {text : "Blue whale", correct : true},
            {text : "Elephant", correct : false},
            {text : "Giraffe", correct : false},
        ]
    },
    {
        question : "which is the smallest Country in the world?",
        answers : [
            {text : "Vatina City", correct : true},
            {text : "Bhutan", correct : false},
            {text : "Nepal", correct : false},
            {text : "Srilanka", correct : false},
        ]
    },
];

const questionEl = document.getElementById('question');
const answerBtn = document.getElementById('answerBtn');
const nextBtn = document.getElementById('nextBtn');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    if (currentQuestionIndex < questions.length) {
        let questionNo = currentQuestionIndex + 1;
        questionEl.innerHTML = `${questionNo}. ${currentQuestion.question}`;
    
        // set options 
        currentQuestion.answers.forEach((ans,i)=>{
            // create a button
            btn = document.createElement('button');
            btn.className = 'btn';
            btn.id = i;
            btn.innerHTML = ans.text;
    
            
            answerBtn.append(btn);
            console.log(btn);

        });
        btn.addEventListener('click',()=>{
            console.log(ans.correct);
        })
    }
    else{
        questionEl.innerHTML = `<h2 style="color:green; display:block; text-align:center;" >Completed</h2>`;
        answerBtn.innerHTML = `Your score ${score}`;
    }
}




function resetState(){
    nextBtn.style.display = 'none';

    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}


startQuiz();

// render next question and answers
// nextBtn.innerHTML = 'Start';
// nextBtn.style.display = 'block';
nextBtn.addEventListener('click',()=>{
    // answerBtn.innerHTML = '';
    currentQuestionIndex += 1;
    showQuestion();
});

