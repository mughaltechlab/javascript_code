document.querySelector(".fetch").addEventListener('click',async()=>{
    console.log('hello');
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    arr = data['products'];
    // console.log(data['products']);
    newArr = arr.map((el)=>{
        el['name']='Saqib';
        return el;
        // console.log(el)
    });

    // console.log(newArr);
    // console.log(data['products']);
    
    newArr.forEach(element => {
        console.log(element['name'])

        id = element['id'];
        name = element['name'];
        title = element['title'];

        // create element for id
        li = document.createElement('li');
        li.textContent = id;
        document.body.appendChild(li);
        // create element for title
        nam = document.createElement('h2');
        nam.textContent = title;
        document.body.appendChild(nam);
    });
    
});


const inp = document.getElementById('inp');
const inpBtn = document.getElementById('inpBtn');
listArr = [];
inpBtn.addEventListener('click',()=>{
    inpVal = inp.value;
    a =  listArr.push(inpVal);
    console.log(a);
    // listArr.map();
    // console.log('hello'+ inpVal);
})
listArr.forEach((el)=>{
    list = document.createElement('li');
    list.textContent = el;
    document.body.appendChild(list);
})



// nameText = document.createTextNode('sss');
// nameText = document.createTextNode('ssss') ;
// name.innerHtml = nameText;