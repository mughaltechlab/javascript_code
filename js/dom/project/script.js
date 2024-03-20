const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const newItem = document.getElementById('item');
const filter = document.getElementById('filter');


// events listener
form.addEventListener('submit',addItem);            // form submit event || add item into list event
itemList.addEventListener('click', removeItem);     // item remove event || list delete event
filter.addEventListener('keyup', filterItem);       // filter item 


// -------FUNCTIONS----------------
// add item function
function addItem(e){
    e.preventDefault();

    // create li elment
    let li = document.createElement('li');
    li.classList.add('list-group-item','d-flex','justify-content-between');


    // create button element
    let deleteBtn = document.createElement('button');
    // deleteBtn.classList.add('btn','btn-danger','btn-sm','float-right','delete');
    deleteBtn.className = 'btn btn-danger btn-sm delete';
    // deleteBtn.innerHTML = 'X';
    deleteBtn.appendChild(document.createTextNode('X'));

    // insert input value into this li
    let newItemText = newItem.value;
    // append this newItemText into li
    li.append(newItemText);
    // append btn to li
    li.append(deleteBtn);
    // APPEND LI INTO UL LIST
    itemList.append(li);
}

// remove function
function removeItem(e){
    const isBtn = e.target.classList;
    if (isBtn.contains('delete')) {
        if (confirm('Are You Sure')) {
            let li = e.target.parentElement;
            li.remove();
        }
        // console.log(2);
    } else {
        
    }
}

// filter item
function filterItem(e){
    // convert text to lowercase
    let searchText = e.target.value.toLowerCase();
    // get all li from ul(itemList)
    let items = itemList.getElementsByTagName('li');
    // convert HTML collection into an array
    Array.from(items).forEach((el)=>{
        let liText = el.firstChild.textContent;

        if (liText.toLowerCase().indexOf(searchText) != -1) {
            el.style.classList = 'block';
            el.classList.add('d-flex');
        }else {
            el.classList.remove('d-flex');
            el.style.display = 'none';
        }
        
        // console.log(el.firstChild.textContent.toLowerCase());
    });
    
    // console.log(searchText);
}