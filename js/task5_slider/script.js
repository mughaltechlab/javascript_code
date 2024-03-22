let imgArr = ['img1.png','img2.png','img3.png'];

let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');

let slider = document.querySelector('.wrapper');
let img = document.querySelector('.wrapper img');





let i = 0

setInterval(()=>{
    
    if ( i < imgArr.length) {
        // img.className = 'next';
        console.log(imgArr[i]);

        // img.setAttribute('src',`./${imgArr[i]}`);
        slider.innerHTML =  `<img class="next" src="./${imgArr[i]}" alt="">`;
        i+=1;
    }else{
        // console.log('array is end');
        // img.classList.add('next');

        i=0;
        console.log(imgArr[i]);
        // img.setAttribute('src',`./${imgArr[i]}`);

        slider.innerHTML =  `<img class="next" src="./${imgArr[i]}" alt="">`;
        i+=1;
    }
}, 3000);


nextBtn.addEventListener('click',()=>{
    if ( i < imgArr.length) {
        // img.className = 'next';
        console.log(imgArr[i]);

        // img.setAttribute('src',`./${imgArr[i]}`);
        slider.innerHTML =  `<img class="next" src="./${imgArr[i]}" alt="">`;
        i+=1;
    }else{
        // console.log('array is end');
        // img.classList.add('next');

        i=0;
        console.log(imgArr[i]);
        // img.setAttribute('src',`./${imgArr[i]}`);

        slider.innerHTML =  `<img class="next" src="./${imgArr[i]}" alt="">`;
        i+=1;
    }
})

// const check = (i<imgArr.length) && (i > 0);
// console.log(check);
// let j = check ? i : imgArr.length-1;

let j = imgArr.length - 1;
prevBtn.addEventListener('click',()=>{
    console.log(j);
    // img.classList.remove('next');
    // lastInd = imgArr.length - 1;
    // if (i <= lastInd && i > 0) {
    //     j = i - 1;
    //     console.log (j);
    // }else{
    //     j = imgArr.length - 1;
    // }

    if ( j >= 0 ) {
            // img.className = 'prev';
    
            console.log(imgArr[j]);
    
            // img.setAttribute('src',`./${imgArr[i]}`);
            slider.innerHTML =  `<img class="prev" src="./${imgArr[j]}" alt="">`;
            j-=1;
    }
    else{
            // console.log('array is end');
            // img.classList.add('prev');
    
            j=imgArr.length-1;
            console.log(imgArr[j]);
            // img.setAttribute('src',`./${imgArr[i]}`);
    
            slider.innerHTML =  `<img class="prev" src="./${imgArr[j]}" alt="">`;
            j-=1;
    }
    
})