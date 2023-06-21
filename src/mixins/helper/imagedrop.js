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
    }
}