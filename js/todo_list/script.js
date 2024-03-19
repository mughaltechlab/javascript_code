


const inp = document.getElementById('inp');
const inpBtn = document.getElementById('inpBtn');
let taskUl = document.getElementById('myTaskList');
// const editBtn = document.getElementById('editBtn');


// update input
// let updateInp = document.getElementById('update_inp');


editBtn = document.querySelectorAll('.editBtn');

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


// taskUl.addEventListener('click',()=>{
//     c = taskUl.children ;
//     console.log(c);
// });

// taskUl.addEventListener('click',(e)=>{
//     // e.target.classList.toggle('complete');
//     c = e.target;
//     // console.log(c);
//     // check = e.target.innerText;
//     // if (String(check)) {
//     //     console.log(check);
//     // }
// });


// array for storing task lists
let listArr = [];






isUpdate = false;

function addElement(input_val){

    listArr.push(inpVal);
    let lastIndex = listArr.length - 1;


    // ! add li input and btns ---------------------------------------------------
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
    const list = document.createElement('li');
    list.id = lastIndex;

    taskInput = document.createElement('input');
    taskInput.classList.add('taskInput');
    listArr.forEach((e,i) => {
        unique = document.createElement('div');
        unique.textContent = e;
        unique.setAttribute('id',i);
        console.log(unique);
        // taskInput.value =  e;
    });
    taskInput.setAttribute('readOnly','readOnly');

    // list.textContent = listArrLastItem;
    
    // task = document.createTextNode(listArrLastItem);
    list.appendChild(unique);
    list.appendChild(btnDiv);
    // list.appendChild(delBtn);

    taskUl.appendChild(list);




    // ! add remove functionality----------------------------------------------
    closeBtnLists = document.querySelectorAll('.deleteBtn');

    closeBtnLists.forEach(e => {
        e.addEventListener('click',()=>{
            c = e.parentElement.parentElement ;
            c.remove(); 
            uniqueDiv = e.target.parentElement.parentElement.children[0];
            uniqueId = uniqueDiv.getAttribute('id');
            // delete listArr[uniqueId];
            // listArr.sllice(uniqueId,1);
            // c.style.display = 'none';
            // console.log(listArr[uniqueId]);
        });
    });
    // ! add update functionality----------------------------------------------
    editBtn.addEventListener('click',(e)=>{

        // isUpdate = true;
        btnText = e.target.innerText;

        uniqueDiv = e.target.parentElement.parentElement.children[0];
        // uniqueId = uniqueDiv.getAttribute('id');
        console.log(uniqueDiv.innerHTML + "  : " + uniqueDiv.getAttribute('id'));
        ind = uniqueDiv.getAttribute('id');
        console.log('array : '+listArr[ind]);
        
        if (btnText == 'Edit') {
            
            inp.value = uniqueDiv.textContent;
            // console.log(editBtn.innerText);
            // inputEl.removeAttribute('readonly');
            // inputEl.setAttribute('type','text');
            // inputEl.focus();
            // e.target.innerText = 'Save';
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


inpBtn.addEventListener('click',()=>{
    isUpdate && console.log(inp.value);
    if (isUpdate) {
        console.log('update');
        updateInp =  inp.Value;
        isUpdate = false;
    }
    // else{
    //     isUpdate ? console.log(updateInp):
    //     console.log('not');
    // }
    inpVal = inp.value;
    id=0;
    if (inpVal == '') {
        alert("never enter empty task");
    }else if(isUpdate){
        // listArr[id] = inp.value;
        // console.log('update '+ listArr[id]);
    }
    else{

        // console.log(TaskListLi);

        isEdit = listArr.includes(inp.value);

        if (isEdit) {
            console.log('hello');
        }
        else{
            addElement(inp.value)
            inp.value = '';
        }

        
    
        
    }
})



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