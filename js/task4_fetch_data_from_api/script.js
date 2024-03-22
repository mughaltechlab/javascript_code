const url = "https://dummyjson.com/products";

const itemList = document.getElementById('items');
let productsArr = [];

// fetch data 
fetch(url)
.then(async(resp)=>{
    const data = await resp.json();
    console.log(data);

    productsArr = data['products'];
    console.log(productsArr[0]['title']);
    



    productsArr.forEach((el,i) => {

        //* create li element
        let li = document.createElement('li');
        li.id = i;
        li.className = 'list-group-item d-flex justify-content-between';
        let inp = document.createElement('input');
        inp.className = 'form-control border-0';
        inp.value = el['title'];
        inp.setAttribute('readonly','readonly');
        li.append(inp);        
        // li.appendChild(document.createTextNode(el['title']));        
        // console.log(li.textContent);
        
        //* create button element
        let editBtn = document.createElement('button');
        editBtn.id = i;
        editBtn.className = 'btn btn-primary btn-sm';
        editBtn.appendChild(document.createTextNode('edit'));

        //* append editBtn into li
        li.append(editBtn);
        //* append li into item(ul)
        itemList.append(li);

        editBtn.addEventListener('click',(e)=>{
            let btn = e.target.textContent;
            let currentInp = e.target.parentElement.firstChild;
            let index = e.target.getAttribute('id');
            // console.log(index);

            if (btn == 'edit') {
                e.target.textContent = 'save';
                // console.log(e.target.parentElement);
                currentInp.removeAttribute('readonly');
                currentInp.setAttribute('type','text');
                currentInp.focus();
            }else{
                // save functionality
                e.target.textContent = 'edit';
                currentInp.removeAttribute('type');
                currentInp.setAttribute('readonly','readonly');

                let value = currentInp.value;
                productsArr[index]['title'] = value;
                console.log(value);
            }
        })

    });

    
})
