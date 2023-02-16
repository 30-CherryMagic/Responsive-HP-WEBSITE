// min-width:768px
window.addEventListener("resize", () => {
  const btnOpen = document.getElementById('btnOpen');
  const btnClose = document.getElementById('btnClose');
  const menu = document.getElementById('menu');
  if(window.innerWidth<768){
    btnOpen.classList.remove('cl');
    btnOpen.classList.add('op');
    btnClose.classList.add('cl');
    menu.classList.add('cl');
  }else{
    btnOpen.classList='btn-navi cl';
    btnClose.classList='btn-navi cl';
    menu.classList='menu';
  }
});

//開く
btnOpen.addEventListener('click',function(){
  // alert('OPEN');
  menu.classList.add('op');
  menu.classList.remove('cl');
  btnOpen.classList.remove('op');
  btnOpen.classList.add('cl');
  btnClose.classList.remove('cl');
  btnClose.classList.add('op');
  
})
btnClose.addEventListener('click',function(){
  // alert('close');
  menu.classList.add('cl');
  menu.classList.remove('op');
  btnOpen.classList.remove('cl');
  btnOpen.classList.add('op');
  btnClose.classList.remove('op');
  btnClose.classList.add('cl');
 
})
