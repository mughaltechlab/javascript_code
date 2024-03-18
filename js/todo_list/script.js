


const inp = document.getElementById('inp');
const inpBtn = document.getElementById('inpBtn');
let taskUl = document.getElementById('myTaskList');


// array for storing task lists
listArr = [];
inpBtn.addEventListener('click',()=>{
    inpVal = inp.value;
    if (inpVal == '') {
        alert("never enter empty task");
    }else{

        
        a =  listArr.push(inpVal);
        inp.value = '';


        // ! add li and delete btn ---------------------------------------------------

        listArrLastItem = listArr[listArr.length - 1];

        // delete btn
        delBtn = document.createElement('button');
        delBtn.textContent = 'x';
        delBtn.classList.add('deleteBtn');
        // li
        list = document.createElement('li');
        // list.textContent = listArrLastItem;
        var task = document.createTextNode(listArrLastItem);
        list.appendChild(task);
        list.appendChild(delBtn);

        taskUl.appendChild(list);

        // ! add remove functionality----------------------------------------------
        closeBtnLists = document.querySelectorAll('.deleteBtn');

        closeBtnLists.forEach(e => {
            e.addEventListener('click',()=>{
                c = e.parentElement ;
                c.style.display = 'none';
                console.log(c);
            });
        });
        // ! add remove functionality----------------------------------------------
        
        
        // !-------------------------------------------------------------------------


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




// nameText = document.createTextNode('sss');
// nameText = document.createTextNode('ssss') ;
// name.innerHtml = nameText;