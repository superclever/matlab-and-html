window.addEventListener('load',function(){
  b1 = document.getElementById('bacBut');
  bd = document.getElementById('bac');
  f1 = document.querySelector('#fileInput');
  b1.addEventListener('click',()=>{
    // bd.style.backgroundImage = 'url(/beachand2.png)';
    // bd.style.width = '100%';
    // bd.style.height = '100%';
    console.log('1');
    f1.click();
  });

  f1.addEventListener('change',function(){
    var reader = new FileReader();
    reader.addEventListener('load',(e)=>{
      console.log(22);
      console.log(e);
      bd.style.backgroundImage = "url('" + e.target.result + "')";
    });
    reader.readAsDataURL(this.files[0]);
    console.log(reader);
  });

});
