const count=document.getElementById('count');
const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const reset=document.getElementById('reset');

plus.addEventListener('click',()=>{
    count.innerHTML++;
})
minus.addEventListener('click',()=>{
    count.innerHTML--;
})
reset.addEventListener('click',()=>{
    count.innerHTML=0;
})