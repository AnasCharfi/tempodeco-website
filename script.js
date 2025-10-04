const burger=document.querySelector('.burger');
const menu=document.querySelector('.menu');

if(burger&&menu){
  burger.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    burger.setAttribute('aria-expanded',open?'true':'false');
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
    const href=link.getAttribute('href');
    if(!href) return;
    if(href.startsWith('#')){
      const target=document.querySelector(href);
      if(!target) return;
      event.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      menu?.classList.remove('open');
      burger?.setAttribute('aria-expanded','false');
    }
  });
});

window.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    menu?.classList.remove('open');
    burger?.setAttribute('aria-expanded','false');
  }
});

window.addEventListener('click',event=>{
  if(!menu?.classList.contains('open')) return;
  if(event.target instanceof Element && (event.target.closest('.menu')||event.target.closest('.burger'))) return;
  menu.classList.remove('open');
  burger?.setAttribute('aria-expanded','false');
});
