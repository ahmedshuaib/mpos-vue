export default{
    mounted(){
      window.onload=()=>{
          const tOptions = document.querySelectorAll('.t-option');
          const dotsBtn = document.querySelectorAll('.dots-btn');
          dotsBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
              btn.classList.toggle('dots--active');
                console.log('asdf')
            });
          });
        
          tOptions.forEach((opt) => {
            opt.addEventListener('click', () => {
              dotsBtn.forEach((btn) => {
                btn.classList.remove('dots--active');
              });
            });
          });
        }

        const dropdowns=document.querySelectorAll('.dropdown-btn');
          dropdowns.forEach(function(dropdown){
              const select=dropdown.querySelector('.select');
              const menu=dropdown.querySelector('.menu');
              const options=dropdown.querySelectorAll('.menu li');
              const selected=dropdown.querySelector('.selected');
    
              select.addEventListener('click',function(){
                  select.classList.toggle('active')
                  menu.classList.toggle('menu-open')
              });
    
              options.forEach(function(option){
                  option.addEventListener('click',function(){
                      selected.innerText=option.innerText;
                      menu.classList.remove('menu-open')
                  })
                  options.forEach(function(option){
                      option.classList.remove('active');
                  })
                  option.classList.add('active');
              })
          })
    }
}
