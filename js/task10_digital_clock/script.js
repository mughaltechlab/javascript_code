let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// create date object for get currenttime

setInterval(()=>{
    let currenttime = new Date();
    hrs.innerHTML = checkNum(currenttime.getHours());
    min.innerHTML = checkNum(currenttime.getMinutes());
    sec.innerHTML = checkNum(currenttime.getSeconds());
    
    // hrs.innerHTML = (currenttime.getHours() < 10 ? "0" : "") + currenttime.getHours();
    // min.innerHTML = (currenttime.getMinutes() < 10 ? "0" : "") + currenttime.getMinutes();
    // sec.innerHTML = (currenttime.getSeconds() < 10 ? "0" : "") + currenttime.getSeconds();

},1000)

function checkNum(num){
    let myNum;
    if(num < 10){
        myNum = '0'+num;
    }else{
        myNum = num;
    }
    return myNum;
}

// console.log(currenttime.getHours());