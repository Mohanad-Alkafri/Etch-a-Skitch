const gridContainer = document.querySelector('.sqrs');

for(let i=0; i<256; ++i){
    let sqr = document.createElement('div');
    sqr.className = 'sqr';
    gridContainer.appendChild(sqr);
};

let sqr = document.querySelector('.sqr');
let btn = document.querySelector('.btn');

let userNum;
function customUserGrid (userNum){
    document.querySelectorAll('.sqr').forEach(e =>e.remove())
    for(let i=0; i<(userNum*userNum); ++i){
        let sqr = document.createElement('div');
        sqr.className = 'sqr';
        gridContainer.appendChild(sqr);
    };
};

btn.addEventListener('click', ()=>{
    userNum = prompt('how many sqrs do you want in your grid?', '')
    if(userNum<=100 && userNum>0){
        customUserGrid(userNum);
        console.log('wtf')
    }
    else if(userNum>100 || userNum<=0){
        alert(`sorry we cant make a grid of ${userNum} squares, the maximum is 100 and minimum is 1`);
    };
    }
);

