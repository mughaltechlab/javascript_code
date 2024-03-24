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


// function showQuestion(){

//     resetState();

//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionEl.innerHTML = `${questionNo}. ${currentQuestion.question}`;

//     // set options 
//     currentQuestion.answers.forEach((ans,i)=>{
//         // create a button
//         const btn = document.createElement('button');
//         btn.className = 'btn';
//         btn.id = i;
//         btn.innerHTML = ans.text;
//         answerBtn.append(btn);

//         if (ans.correct) {
//             btn.dataset.correct = ans.correct;
//         }
        
//         console.log(btn);

//         btn.addEventListener('click', selectedAns)
//     });
// }




function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    if (currentQuestionIndex < questions.length) {
        let questionNo = currentQuestionIndex + 1;
        questionEl.innerHTML = `${questionNo}. ${currentQuestion.question}`;
    
        // set options 
        currentQuestion.answers.forEach((ans,i)=>{
            // create a button
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.id = i;
            btn.innerHTML = ans.text;
            answerBtn.append(btn);

            if (ans.correct) {
                btn.dataset.correct = ans.correct;
            }
            
            console.log(btn);

            btn.addEventListener('click', selectedAns)
        });
    }
    else{
        questionEl.innerHTML = `Your Score : <span style = " color: green ">${score}</span> <br/> Total questions : <span style = " color: green ">${questions.length}</span>`;
        answerBtn.innerHTML = `<h2 style="color:green; display:block; text-align:center;" >Completed</h2>`;
        nextBtn.innerHTML = 'Play Again';
        nextBtn.style.display = 'block';
    }
}




function resetState(){
    questionEl.innerHTML = '';
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}


function selectedAns(e){
    const thisBtn = e.target;
    const isCorrect = e.target.dataset.correct === "true";
    if (isCorrect) {
        console.log('correct');
        score ++;
       thisBtn.classList.add('correct');
    }
    else{
        console.log('wrong');
       thisBtn.classList.add('incorrect');
    }

    Array.from(answerBtn.children).forEach((btn)=>{
        btn.style.cursor = 'no-drop';
        // btn.setAttribute('disabled','true');
        btn.disabled = true;
        if (btn.dataset.correct === "true") {
           btn.classList.add('correct');
        }
    });
    nextBtn.style.display = 'block';
}

startQuiz();

// render next question and answers

function handleNextBtn(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
        
    }
}

function showScore(){
    resetState();
    questionEl.innerHTML = `Your Score : <span style = " color: green ">${score}</span> <br/> Total questions : <span style = " color: green ">${questions.length}</span>`;
    console.log(questionEl.innerHTML);
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
}

// nextBtn.addEventListener('click',()=>{
//     if (currentQuestionIndex < questions.length) {
//         handleNextBtn();
//     }
//     else{
//         startQuiz();
//     }
// });

// my nextBtn logic

nextBtn.addEventListener('click',()=>{
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex += 1;
        showQuestion();
    }
    else {
        
        startQuiz();
    }
});

