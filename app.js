    // تغییر تم صفحه 
// let root = document.documentElement;
// let btn = document.querySelector('button');


// btn.addEventListener('click',()=>{
//     let change  = getComputedStyle(root).getPropertyValue('--bg-color');
//     if(change === '#fff'){
//         console.log('ok');
        
//         root.style.setProperty('--bg-color' , 'black');
//         root.style.setProperty('--text-color','#fff')
//     }else{
//         root.style.setProperty('--bg-color' , '#fff');
//         root.style.setProperty('--text-color','black')
//     }
// })
// پروؤه BMi
let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let calulation = document.querySelector('#calulation');
let h1 = document.querySelector('#h1')
let h2 = document.querySelector('#h2')
let result = document.querySelector('.result')

calulation.addEventListener('click',calulations)
function calulations(){
    let weights = weight.value;
    let heights = height.value / 100;
    if(weights <= 0 || heights <=0 || isNaN(weights) || isNaN(heights)){
        alert('اعداد مناسب نست')
        return
    }
    
    let calulation_v = (weights / (heights * heights)).toFixed(1)
    h1.textContent = calulation_v
    let res
    if(calulation_v  < 18.5){
        res = 'کمبود وزن'
        h1.style.color = 'blue'
        h2.style.color = 'blue'
    }else if(calulation_v >= 18.5 && calulation_v < 24.5){
        res = 'وزن سلامت'
        h1.style.color = 'green'
        h2.style.color = 'green'
    }else if(calulation_v >= 24.5 && calulation_v < 29.9){
        res = 'اضافه وزن'
        h1.style.color = 'orange'
        h2.style.color = 'orange'
    }else {
        res ='چاقی'
        h1.style.color = 'red'
        h2.style.color = 'red'
    }
    h2.textContent = res
    result.style.display = 'block'
    
    
}




