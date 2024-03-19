


const inp = document.getElementById('inp');
const inpBtn = document.getElementById('inpBtn');
let taskUl = document.getElementById('myTaskList');
// const editBtn = document.getElementById('editBtn');


// update input
let updateInp = document.getElementById('update_inp');


editBtn = document.querySelectorAll('.editBtn');
btnPresent = false;

// if(editBtn){
//     editBtn.addEventListener('click',(e)=>{
//         console.log('hello');
    
//         btnText = editBtn.innerText;
    
//         if (btnText == 'Edit') {
//             // console.log(editBtn.innerText);
//             inputEl = e.target.parentElement.parentElement.children[0];
//             inputEl.removeAttribute('readonly');
//             inputEl.setAttribute('type','text');
//             inputEl.focus();
//             editBtn.innerText = 'Save';
//             // inputEl.setAttribute('autoFocus',)
//             // console.log(pEl[0].value);
//         }else{
//             inputEl = e.target.parentElement.parentElement.children[0];
//             inputEl.removeAttribute('type','text');
//             inputEl.setAttribute('readonly','readonly');
//             // inputEl.focus();
//             editBtn.innerText = 'Edit';
//         }
        
//     });
// }



taskUl.addEventListener('click',(e)=>{
    // e.target.classList.toggle('complete');
    c = e.target;
    // console.log(c);
    // check = e.target.innerText;
    // if (String(check)) {
    //     console.log(check);
    // }
});


// array for storing task lists
listArr = [];
inpBtn.addEventListener('click',()=>{
    inpVal = inp.value;
    if (inpVal == '') {
        alert("never enter empty task");
    }else{

        btnPresent = true;
        console.log(btnPresent);
        a =  listArr.push(inpVal);
        inp.value = '';


        // ! add li input and btns ---------------------------------------------------

        listArrLastItem = listArr[listArr.length - 1];

        // create a div for btns
        btnDiv = document.createElement('div');
        btnDiv.classList.add('actionDiv');

        // ! create edit and delete btn element
        //* delete btn
        delBtn = document.createElement('button');
        // delBtn.textContent = 'x';
        delBtn.innerHTML = 'x';
        delBtn.classList.add('deleteBtn');
        //* edit btn
        editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('editBtn');


        // todo------->>>>>>>>>>>>>>>>
        // update event
        // editBtn.addEventListener('click',(e)=>{

        //     btnText = editBtn.innerText;

        //     if (btnText == 'Edit') {
        //         // console.log(editBtn.innerText);
        //         inputEl = e.target.parentElement.parentElement.children[0];
        //         inputEl.removeAttribute('readonly');
        //         inputEl.setAttribute('type','text');
        //         inputEl.focus();
        //         editBtn.innerText = 'Save';
        //         // inputEl.setAttribute('autoFocus',)
        //         // console.log(pEl[0].value);
        //     }else{
        //         inputEl = e.target.parentElement.parentElement.children[0];
        //         inputEl.removeAttribute('type','text');
        //         inputEl.setAttribute('readonly','readonly');
        //         // inputEl.focus();
        //         editBtn.innerText = 'Edit';
        //     }
            
        // });
        // todo----^^^

        // append those BUTTONS in btnDiv(.actionDiv);
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(delBtn);


        // !-------------------------------------------------------------------
        // list item added in ul
        list = document.createElement('li');
        taskInput = document.createElement('input');
        taskInput.value = listArrLastItem;
        taskInput.setAttribute('readOnly','readOnly');

        // list.textContent = listArrLastItem;
        
        // task = document.createTextNode(listArrLastItem);
        list.appendChild(taskInput);
        list.appendChild(btnDiv);
        // list.appendChild(delBtn);

        taskUl.appendChild(list);

        // ! add remove functionality----------------------------------------------
        closeBtnLists = document.querySelectorAll('.deleteBtn');

        closeBtnLists.forEach(e => {
            e.addEventListener('click',()=>{
                c = e.parentElement.parentElement ;
                c.remove(); 
                // c.style.display = 'none';
                console.log(c);
            });
        });
        // ! add update functionality----------------------------------------------
        editBtn.addEventListener('click',(e)=>{

            btnText = e.target.innerText;

            inputEl = e.target.parentElement.parentElement.children[0];
            if (btnText == 'Edit') {
                // console.log(editBtn.innerText);
                inputEl.removeAttribute('readonly');
                inputEl.setAttribute('type','text');
                inputEl.focus();
                e.target.innerText = 'Save';
                // inputEl.setAttribute('autoFocus',)
                // console.log(pEl[0].value);
            }else{
                inputEl = e.target.parentElement.parentElement.children[0];
                inputEl.removeAttribute('type','text');
                inputEl.setAttribute('readonly','readonly');
                // inputEl.focus();
                e.target.innerText = 'Edit';
            }
            
        });
        
        // !-------------------------------------------------------------------------
        // document.querySelectorAll('.deleteBtn').map();
        // document.querySelector('.deleteBtn').style.fontSize = '100px';

        // for(i = 0; i < listsOfLi.length; i++){
        //     delBtn = document.createElement('button');
        //     delBtn.textContent = 'x';
        //     listsOfLi[i].appendChild(delBtn);
        // }


        // delBtn = document.createElement('button');
        // delBtn.textContent = 'x';
        // // var delIcon = document.createTextNode('x');
        // // delBtn.appendChild(delIcon);
        // document.querySelector('li').appendChild(delBtn);





        // listsOfLi.map((el)=>{
        //     // delete btn
        //     // document.body.append(list);
            
        // })


        
        // console.log(listArr[listArr.length - 1]);
        // console.log(a);
        // listArr.map();
        // listArr.map((el)=>{
        //     list = document.createElement('li');
        //     list.textContent = el;
        //     taskUl.appendChild(list);
        //     // document.body.append(list);
            
        // })
        // console.log('hello'+ inpVal);
    }
})


if (btnPresent == true) {
    console.log('hello');
}

// editBtn = document.querySelector('.editBtn');
// if(editBtn){
//     editBtn.addEventListener('click',(e)=>{
//         console.log('hello');
    
//         btnText = editBtn.innerText;
    
//         if (btnText == 'Edit') {
//             // console.log(editBtn.innerText);
//             inputEl = e.target.parentElement.parentElement.children[0];
//             inputEl.removeAttribute('readonly');
//             inputEl.setAttribute('type','text');
//             inputEl.focus();
//             editBtn.innerText = 'Save';
//             // inputEl.setAttribute('autoFocus',)
//             // console.log(pEl[0].value);
//         }else{
//             inputEl = e.target.parentElement.parentElement.children[0];
//             inputEl.removeAttribute('type','text');
//             inputEl.setAttribute('readonly','readonly');
//             // inputEl.focus();
//             editBtn.innerText = 'Edit';
//         }
        
//     });
// }




// nameText = document.createTextNode('sss');
// nameText = document.createTextNode('ssss') ;
// name.innerHtml = nameText;