// !----------------------------------------------------------------------------------------------------------------
//* EXAMINE THE DOCUMENT OBJECT //
// !----------------------------------------------------------------------------------------------------------------
// shows us all of the different properties and methods attached to the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);        // gives full path of a document
// console.log(document.title);      // return doc title
// document.title = 'mughaltechlab'; // we can change title 
// console.log(document.title);      // return doc title
// console.log(document.doctype);    // return doc type
// console.log(document.head);       // show us head body
// console.log(document.body);       // show us html body
// console.log(document.all);       // gives an array of html collection
// console.log(document.all[10]);       // gives our header title which is on index 10 in an array of document.all 

// // document.all[10].textContent = 'LonewolF';  // we can change that header title also but this is not the right way to change
// console.log(document.forms);        // return an array of forms collection
// console.log(document.forms[0]);     // return an index 0 form from an array of forms collection
// console.log(document.links);        // return all links in a collection/array
// console.log(document.images);        // return all images in a collection/array
// !----------------------------------------------------------------------------------------------------------------
//* SELECTORS //
// !----------------------------------------------------------------------------------------------------------------

// GETELEMETBYID
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// header.classList.add('bg-danger');
// header.style.boxShadow = ' 0 0 10px rgba(0,0,0,.5) ';

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);     // it pays attention to the styling, in headerTitle we have span class of d-none; so it leave that span
// headerTitle.innerHTML = '<h3 class="display-6">LonewolF</h3>';
// --------------------------------------------------------------
// GETELEMETSBYCLASSNAME
// --------------------------------------------------------------
// let list = document.getElementsByClassName('list-group-item');  // return an array
// for(let i = 0; i < list.length; i++){
//     // list[i].style.backgroundColor = 'grey';
//     list[i].classList.add('bg-dark','text-danger', 'border-bottom');
// }
// --------------------------------------------------------------
// GETELEMENTbyTAGNAME
// --------------------------------------------------------------
// let li = document.getElementsByTagName('li');  // return an array
// console.log(li);
// for(let i = 0; i < li.length; i++){
//     // list[i].style.backgroundColor = 'grey';
//     // li[i].classList.add('bg-success','text-white', 'border-bottom');
// }
// --------------------------------------------------------------
// QUERYSELECTOR
// --------------------------------------------------------------
// let input = document.querySelector('input');    // querySelector grab only first element
// input.value = 'hello world';
// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');  
// item.classList.add('text-danger');

// let lastItem = document.querySelector('.list-group-item:last-child');  
// lastItem.classList.add('text-danger');

// let nItem = document.querySelector('.list-group-item:nth-child(3)');  
// nItem.classList.add('text-danger');
// --------------------------------------------------------------
// QUERYSELECTOR
// --------------------------------------------------------------
// let title = document.querySelectorAll('.title');
// console.log(title);
// title.forEach((e)=>{
//     e.style.textShadow = '0 0 5px rgba(0,0,0,.4)'
// })

// let even = document.querySelectorAll('.list-group-item:nth-child(even)');
// even.forEach((e)=>{
//     e.classList.add('bg-secondary-subtle','text-dark');
// });

// !----------------------------------------------------------------------------------------------------------------
//* TRAVERSING THE DOM // PART-2
// !----------------------------------------------------------------------------------------------------------------
/**
 * todo : dif b/w parentElement and parentNode
 */
let item = document.querySelector('#items');
// console.log(item);
// item.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(item);
// item.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(item);
// console.log(item.parentElement.parentNode.parentElement);
// console.log(item.children);
// console.log(item.children[1].textContent);
// console.log(item.childElementCount);            //give length of childrens

// ? ADD UNIQUE ID TO ALL LI OF UL(#ITEMS)
len = item.children.length;
console.log(len);
let items = item.children;
// console.log(item.firstElementChild)
for(let i = 0; i < len; i++){
    // console.log(items[i]);
    items[i].setAttribute('id',`list${i}`);
}

item.lastElementChild.textContent = '✅ Task Complete';

console.log(item.previousElementSibling);

// -----CREATEELEMENT-----

// create a div
let newDiv = document.createElement('div');
// add class
newDiv.className = 'newDiv';
newDiv.classList.add('text-center', 'mt-2');
// add id
newDiv.id = 'newDiv1';
// add attribute
newDiv.setAttribute('title','new div');
// create textnode
const newDivText = document.createTextNode('developed by 💙');
// add text to newDiv
newDiv.append(newDivText);

// append this in body
document.getElementById('main').append(newDiv);

let div2 = document.createElement('div');
div2.classList.add('div2','text-end');
let div2Text = document.createTextNode('Set Your Priority 🚀');
// div2.append(div2Text);

const container = document.querySelector('header .container');
const headerH1 = document.querySelector('header h1');

container.insertBefore(div2,headerH1);

let output = document.getElementById('output');
let btn = document.getElementById('button');


const header = document.querySelector('header');
header.style.borderBottom = '5px solid rgba(255,0,0,70%)';
document.body.addEventListener('mousemove',(e)=>{
    // console.log(e.offsetX);
    header.style.borderColor = `rgba(${e.offsetY},${e.offsetX},${e.offsetY},70%)`;
    // console.log(header.style.borderColor);
});


let inp = document.querySelector('input[type="text"]');
inp.addEventListener('input',(e)=>{

    output.innerHTML =  e.target.value;
    console.log(e.target.value);

    
    
    // const text = e.target.classList;
    // output.innerHTML = text;

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey && 'altkey' || e.ctrlKey && 'ctrlkey' || e.metaKey && 'metaKey');
    // console.log(e.ctrlKey && 'ctrlkey');

    console.log(e.type);
});

const select = document.getElementById('select');
select.addEventListener('change',(e)=>{
    output.innerHTML = e.target.value;
});



