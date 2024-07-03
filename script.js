const bar= document.getElementById('bar');
const close= document.getElementById('close');
const navber= document.getElementById('navber');

if(bar){
    bar.addEventListener('click',()=>{
        navber.classList.add('active');
});

}

if(close){
    close.addEventListener('click',()=>{
        navber.classList.remove('active');
});

}