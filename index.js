window.addEventListener('load',()=>{
  b1 = document.getElementById('bacBut');
  bd = document.getElementById('bac');
  ba = document.getElementsByClassName('bac');

  b1.addEventListener('click',()=>{
    bd.style.backgroundImage = 'url(/beachand2.png)';
    bd.style.width = '100%';
    bd.style.height = '100%';
    console.log('1');
  });
});
