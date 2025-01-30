let cursor=document.querySelector('.cursor');
document.addEventListener('mousemove', function(dets){
    // console.log(dets);
    cursor.style.top = dets.clientY + 'px';
    cursor.style.left = dets.clientX + 'px';

})



let moveX =0;
let moveY =0;
let blackHole = document.querySelector('.circle');
let shinchan = document.querySelector('img');
const imageWidth = shinchan.width;
const imageHeight = shinchan.height;

const blackHoleX = window.innerWidth - blackHole.offsetWidth;
const blackHoleY = window.innerHeight - blackHole.offsetHeight;

document.addEventListener('keydown', (dets)=>{
    if (dets.key == 'ArrowUp'){
        if (moveX > 0)
        moveY += -10;
        
    }
    else if (dets.key == 'ArrowRight'){
        if (moveX < window.innerWidth)
        moveX += 10;

    }
    else if(dets.key == 'ArrowLeft'){
        if (moveX > 0)
        moveX += -10;

    }
    else if (dets.key == 'ArrowDown'){
        if (moveY < window.innerHeight)
        moveY += 10;
    }
    // shinchan.style.right = moveX + 'px' ;
    shinchan.style.left = moveX + 'px';
    shinchan.style.top = moveY + 'px' ;


    if (
        moveX  >= blackHoleX &&
        moveX <= blackHoleX + blackHole.offsetWidth &&
        moveY  >= blackHoleY &&
        moveY <= blackHoleY + blackHole.offsetHeight) {
        shinchan.style.opacity = '0';
        shinchan.style.transform = 'scale(0.5)';
        shinchan.style.transition = 'all 0.5s ease-in-out';

      }
});

