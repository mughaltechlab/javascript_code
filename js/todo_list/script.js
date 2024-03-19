const inp = document.getElementById('inp');
const inpBtn = document.getElementById('inpBtn');
let taskUl = document.getElementById('myTaskList');
editBtn = document.querySelectorAll('.editBtn');

// array for storing task lists
let listArr = [];
let updateId;
let check = false;
// isUpdate = false;

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

    listArr.forEach((e,i) => {
        unique = document.createElement('div');
        unique.textContent = e;
        unique.setAttribute('id',i);
        console.log(unique);
        // taskInput.value =  e;
    });
    
    list.appendChild(unique);
    list.appendChild(btnDiv);

    taskUl.appendChild(list);




    // ! remove functionality----------------------------------------------
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
    // ! update functionality----------------------------------------------
    editBtn.addEventListener('click',(e)=>{

        // isUpdate = true;
        btnText = e.target.innerText;


        const uniqueDiv = e.target.parentElement.parentElement.children[0];
        updateId = uniqueDiv.getAttribute('id');


        check = listArr.includes(uniqueDiv.innerHTML);
        
        console.log(uniqueDiv.innerHTML + "  : " + uniqueDiv.getAttribute('id'));
        ind = uniqueDiv.getAttribute('id');
        console.log('array : '+listArr[ind]);
        
        if (btnText == 'Edit') {
            inp.value = uniqueDiv.textContent;
        }
    });
    // !-------------------------------------------------------------------------
}


//* add btn event listener-----------------------

inpBtn.addEventListener('click',()=>{
    inpVal = inp.value;
    id=0;
    if (inpVal == '') {
        alert("never enter empty task");
    }
    else{

        
        if (check) {
            console.log('exists : ' + inp.value);
            console.log('id : ' + updateId);
            listArr[updateId] = inp.value;

            // get all list 
            getLists = document.querySelectorAll('li');
            // console.log(getLists[updateId].children[0].textContent);
            getLists[updateId].children[0].textContent = listArr[updateId];
            inp.value = '';
            // console.log(updateId);
            // getLists.forEach((el,i)=>{
            //     console.log(el);
            // });
            // getLists[updateId];


            // if () {
                
            // } else {
                
            // }
            
            check = false;

        }
        else{
            addElement(inp.value)
            inp.value = '';
        }

        
    
        
    }
})