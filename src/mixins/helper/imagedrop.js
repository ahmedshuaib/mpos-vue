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

            // const btns = document.querySelectorAll('.drop-btns');
            // btns.forEach(function(allbtn) {
            //   const exportList = allbtn.querySelector('.export-list');
            //   const listText = allbtn.querySelectorAll('.list-text');
            //   const button = allbtn.querySelector('.btn');
            
            //   allbtn.addEventListener('click', function() {
            //     exportList.classList.add('active');
            //   });
            
            //   listText.forEach(function(list) {
            //     list.addEventListener('click', function() {


            //       button.innerText = list.innerText;
            //     exportList.classList.remove('active')

            //     });
            //   });
            // });
            
          }
    }
}