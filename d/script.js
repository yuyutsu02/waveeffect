import anime from '/node_modules/animejs/lib/anime.es.js';

//creating boxes with id
const container=document.querySelector('.container');
for(var i=0;i<400;i++){
    const temp=document.createElement('div');
    temp.classList.add('box');
    temp.setAttribute('id',`${i}`);
    temp.setAttribute('state','off');
    container.append(temp);
}
let toggled=false;
const handleonClick = index=>{
    toggled=!toggled;
    anime({
        targets:'.box',
        opacity: toggled ? 0:1,
        delay:anime.stagger(50,{
            grid:[20,20],
            from:index
        })
    });

} 
function activateClick(){
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((box)=>{
        box.addEventListener('click',()=>{
            // animate(box);
            const index=parseInt(box.id);
            handleonClick(index);
        });
    });
}
activateClick();

