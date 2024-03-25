const questions = [
    // {
    //     question: "Which of the following is NOT a primitive data type in JavaScript?",
    //     answers: [
    //         {text: "String", correct: true},
    //         {text: "Number", correct: false},
    //         {text: "Object", correct: false},
    //         {text: "Boolean", correct: false},
    //     ]
    // },
    {
        question: "What will the following code output?\n <br> console.log(typeof null);",
        answers: [
            {text: "null", correct: false},
            {text: "undefined", correct: false},
            {text: "object", correct: true},
            {text: "null", correct: false},
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            {text: "React", correct: false},
            {text: "Node.js", correct: false},
            {text: "jQuery", correct: false},
            {text: "Angular", correct: false},
            {text: "A & D", correct: true},
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            {text: "Document Object Model", correct: true},
            {text: "Data Object Model", correct: false},
            {text: "Document Object Method", correct: false},
            {text: "Document Order Model", correct: false},
        ]
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        answers: [
            {text: "var", correct: false},
            {text: "let", correct: false},
            {text: "const", correct: false},
            {text: "AOT", correct: true},
        ]
    },
    {
        question: "What is the output of 3 + '3' in JavaScript?",
        answers: [
            {text: "6", correct: false},
            {text: "33", correct: true},
            {text: "Error", correct: false},
            {text: "NaN", correct: false},
        ]
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        answers: [
            {text: "Checks for equality without type conversion", correct: true},
            {text: "Checks for equality with type conversion", correct: false},
            {text: "Checks for inequality without type conversion", correct: false},
            {text: "Checks for inequality with type conversion", correct: false},
        ]
    },
    {
        question: "Which event is triggered when a user clicks on an HTML element?",
        answers: [
            {text: "mouseover", correct: false},
            {text: "click", correct: true},
            {text: "keydown", correct: false},
            {text: "submit", correct: false},
        ]
    },
    {
        question: "What is the result of typeof undefined?",
        answers: [
            {text: "undefined", correct: true},
            {text: "null", correct: false},
            {text: "object", correct: false},
            {text: "undefined", correct: false},
        ]
    },
    {
        question: "Which function is used to print content to the console in JavaScript?",
        answers: [
            {text: "print()", correct: false},
            {text: "log()", correct: false},
            {text: "console.log()", correct: true},
            {text: "echo()", correct: false},
        ]
    },
    {
        question: "What does the 'querySelector' method do in JavaScript?",
        answers: [
            {text: "Selects the first element that matches a specified CSS selector", correct: true},
            {text: "Selects all elements that match a specified CSS selector", correct: false},
            {text: "Selects the parent element of a specified element", correct: false},
            {text: "Selects the child elements of a specified element", correct: false},
        ]
    },
    {
        question: "What does the 'appendChild' method do in JavaScript?",
        answers: [
            {text: "Appends a new child node to an existing node", correct: true},
            {text: "Removes a child node from an existing node", correct: false},
            {text: "Inserts a new node before an existing node", correct: false},
            {text: "Replaces an existing node with a new node", correct: false},
        ]
    },
    {
        question: "What does the 'getAttribute' method do in JavaScript?",
        answers: [
            {text: "Gets the value of a specified attribute on the element", correct: true},
            {text: "Sets the value of a specified attribute on the element", correct: false},
            {text: "Gets the text content of the element", correct: false},
            {text: "Sets the text content of the element", correct: false},
        ]
    },
    {
        question: "What does the 'classList' property do in JavaScript?",
        answers: [
            {text: "Returns a DOMTokenList containing the list of class attributes of the element", correct: true},
            {text: "Adds a new class attribute to the element", correct: false},
            {text: "Removes a class attribute from the element", correct: false},
            {text: "Toggles the presence of a class attribute on the element", correct: false},
        ]
    },
    {
        question: "What does the 'innerHTML' property do in JavaScript?",
        answers: [
            {text: "Sets or returns the HTML content of the element", correct: true},
            {text: "Sets or returns the text content of the element", correct: false},
            {text: "Sets or returns the value of the element's attribute", correct: false},
            {text: "Sets or returns the CSS styles of the element", correct: false},
        ]
    },
    {
        question: "What is the purpose of the setInterval() function in JavaScript?",
        answers: [
            {text: "It repeatedly calls a function or executes a code snippet with a fixed time delay between each call", correct: true},
            {text: "It waits for a specified amount of time and then executes a function or code snippet", correct: false},
            {text: "It clears the interval set by setInterval()", correct: false},
            {text: "It executes a function or code snippet after a specified amount of time", correct: false},
        ]
    },
    {
        question: "What does the setTimeout() function do in JavaScript?",
        answers: [
            {text: "It waits for a specified amount of time and then executes a function or code snippet", correct: true},
            {text: "It repeatedly calls a function or executes a code snippet with a fixed time delay between each call", correct: false},
            {text: "It clears the timeout set by setTimeout()", correct: false},
            {text: "It executes a function or code snippet after a specified amount of time", correct: false},
        ]
    },
    {
        question: "How do you cancel a scheduled timeout or interval in JavaScript?",
        answers: [
            {text: "Using clearTimeout() for setTimeout() and clearInterval() for setInterval()", correct: true},
            {text: "Using clearInterval() for setTimeout() and clearTimeout() for setInterval()", correct: false},
            {text: "Using clearInterval() for both setTimeout() and setInterval()", correct: false},
            {text: "Using clearTimeout() for both setTimeout() and setInterval()", correct: false},
        ]
    },
    {
        question: "What is the difference between setInterval() and setTimeout()?",
        answers: [
            {text: "setInterval() repeatedly calls a function or executes a code snippet at a specified interval, while setTimeout() executes a function or code snippet once after a specified delay", correct: true},
            {text: "setTimeout() repeatedly calls a function or executes a code snippet at a specified interval, while setInterval() executes a function or code snippet once after a specified delay", correct: false},
            {text: "Both setInterval() and setTimeout() repeatedly call a function or execute a code snippet at a specified interval", correct: false},
            {text: "Both setInterval() and setTimeout() execute a function or code snippet once after a specified delay", correct: false},
        ]
    },
    {
        question: "What is encapsulation in Object-Oriented Programming (OOP)?",
        answers: [
            {text: "It is the bundling of data and methods that operate on the data into a single unit or class", correct: true},
            {text: "It is the process of creating a new instance of a class", correct: false},
            {text: "It is the ability of a child class to inherit properties and behavior from a parent class", correct: false},
            {text: "It is the process of hiding the implementation details of a class and only exposing the necessary functionality", correct: false},
        ]
    },
    {
        question: "What is inheritance in JavaScript?",
        answers: [
            {text: "It is the ability of a class to inherit properties and behavior from another class", correct: true},
            {text: "It is the process of creating multiple instances of a class", correct: false},
            {text: "It is the bundling of data and methods that operate on the data into a single unit or class", correct: false},
            {text: "It is the process of hiding the implementation details of a class and only exposing the necessary functionality", correct: false},
        ]
    },
    {
        question: "What is polymorphism in JavaScript?",
        answers: [
            {text: "It is the ability of an object to take on multiple forms or have multiple behaviors", correct: true},
            {text: "It is the process of creating a new instance of a class", correct: false},
            {text: "It is the ability of a child class to inherit properties and behavior from a parent class", correct: false},
            {text: "It is the process of hiding the implementation details of a class and only exposing the necessary functionality", correct: false},
        ]
    },
    {
        question: "What is the 'this' keyword in JavaScript?",
        answers: [
            {text: "It refers to the current instance of the object", correct: true},
            {text: "It refers to the parent class of an object", correct: false},
            {text: "It refers to the child class of an object", correct: false},
            {text: "It refers to the global object in the current context", correct: false},
        ]
    },
    {
        question: "What is a constructor function in JavaScript?",
        answers: [
            {text: "It is a special method for creating and initializing objects created within a class", correct: true},
            {text: "It is a method that is automatically called when an object is created", correct: false},
            {text: "It is a method used to add new properties and methods to an existing class", correct: false},
            {text: "It is a method used to define the behavior of an object", correct: false},
        ]
    },
    {
        question: "What is a prototype in JavaScript?",
        answers: [
            {text: "It is an object from which other objects inherit properties and methods", correct: true},
            {text: "It is a method used to create a new instance of a class", correct: false},
            {text: "It is a special method for creating and initializing objects created within a class", correct: false},
            {text: "It is a method that is automatically called when an object is created", correct: false},
        ]
    },
    {
        question: "What is the difference between a class and an object in JavaScript?",
        answers: [
            {text: "A class is a blueprint for creating objects, while an object is an instance of a class", correct: true},
            {text: "A class is an instance of an object, while an object is a blueprint for creating classes", correct: false},
            {text: "A class is a collection of properties and methods, while an object is a special type of data", correct: false},
            {text: "A class is a type of data, while an object is a collection of properties and methods", correct: false},
        ]
    },
    {
        question: "What is the 'new' keyword used for in JavaScript?",
        answers: [
            {text: "It is used to create new instances of a class", correct: true},
            {text: "It is used to define a new method within a class", correct: false},
            {text: "It is used to inherit properties and methods from another class", correct: false},
            {text: "It is used to access the properties and methods of an object", correct: false},
        ]
    },
    {
        question: "What does the 'extends' keyword do in JavaScript?",
        answers: [
            {text: "It is used to create a child class that inherits properties and methods from a parent class", correct: true},
            {text: "It is used to define a new method within a class", correct: false},
            {text: "It is used to create new instances of a class", correct: false},
            {text: "It is used to access the properties and methods of an object", correct: false},
        ]
    },
    {
        question: "What is a static method in JavaScript?",
        answers: [
            {text: "It is a method that belongs to the class itself, rather than to instances of the class", correct: true},
            {text: "It is a method that belongs to instances of the class, rather than to the class itself", correct: false},
            {text: "It is a method that is automatically called when an object is created", correct: false},
            {text: "It is a method that is used to define the behavior of an object", correct: false},
        ]
    },
    {
        question: "What is a private method in JavaScript?",
        answers: [
            {text: "It is a method that is only accessible within the class in which it is defined", correct: true},
            {text: "It is a method that is accessible from outside the class in which it is defined", correct: false},
            {text: "It is a method that is shared among all instances of a class", correct: false},
            {text: "It is a method that is used to define the behavior of an object", correct: false},
        ]
    },
    {
        question: "What is the purpose of getters and setters in JavaScript?",
        answers: [
            {text: "They allow for controlled access to an object's properties", correct: true},
            {text: "They are used to create new instances of a class", correct: false},
            {text: "They are used to define the behavior of an object", correct: false},
            {text: "They are used to define a new method within a class", correct: false},
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


let timer = document.querySelector('.time');


