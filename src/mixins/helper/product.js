export default{
  data(){
    return{
      error:{}
    }
  },
  methods:{
    handle(){

      this.error={};
      try{
        const dragarea=document.querySelector('.drag-area');
  
  
        dragarea.addEventListener('dragover',function(event){
            event.preventDefault();
        })
    
        dragarea.addEventListener('dragleave',function(event){
    
    
        })
        dragarea.addEventListener('drop', function(event) {
          event.preventDefault();
          const file = event.dataTransfer.files[0];
          let fileType = file.type;
          let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
      
          if (validExtensions.includes(fileType)) {
              let fileReader = new FileReader();
      
              fileReader.onload = () => {
                  let fileURL = fileReader.result;
      
                  let imgTag = document.createElement('img');
                  imgTag.src = fileURL;
                  imgTag.alt = '';
      
                  // Clear existing content of the dragarea div
                  dragarea.innerHTML = '';
      
                  // Append the dropped image to the dragarea div
                  dragarea.appendChild(imgTag);
              };
      
              fileReader.readAsDataURL(file);
          }
      });

      }catch(err){
        this.error=err;
      }
    },









    popup(){
      document.body.style.overflowY = 'scroll'; // Reset the overflow-y property
      document.body.style.padding = '0'; // Reset the overflow-y property
    },
    
    searchBar(){
      const mobile__input = document.querySelector('.mobile__input');

      mobile__input.classList.toggle('mobile__input--active');

    },
    menubar(){
      const nav = document.querySelector('nav');
      const mainHeader=document.querySelector('.main');
      nav.classList.toggle('active');
      nav.classList.toggle('nav--active');
      mainHeader.classList.toggle('active');
      console.log('asdf')
    },

    selectBtn() {
        const optionMenu = document.querySelector('.select-menu');
        const selectBtn = document.querySelectorAll('.select-btn');
        const options = document.querySelectorAll('.option');
        const sBtn_text = document.querySelector('.sBtn-text');
        const  selectmenu = document.querySelectorAll('.select-menu');


        options.forEach((option) => {
          option.addEventListener('click', () => {
            let selected = option.querySelector('.option-text').innerText;
            sBtn_text.innerText = selected;
            optionMenu.classList.remove('select-menu--active');
          });
        });

        selectBtn.forEach(function(selectBtns){
          selectBtns.addEventListener('click', () => {
            optionMenu.classList.add('select-menu--active');
          });
        })



    },
  },

    mounted(){
        window.addEventListener('load', () => {
            accordion();
            dropDown();
          });
          this.handle();

          const dropDown = () => {
            const dropMenu = document?.querySelector('.drop-menu');
            const dropBtn = document?.querySelector('.drop-btn');
            const dOptions = document?.querySelectorAll('.d-option');
            const dBtn_text = document?.querySelector('.dBtn-text');
            const popup_close=document.querySelector('#popup-close');
            dOptions?.forEach((option) => {
              option?.addEventListener('click', () => {
                let selected = option.querySelector('.d-option-text').innerText;
                dBtn_text.innerText = selected;
                dropMenu.classList.remove('drop-menu--active');
              });
            });
          
            dropBtn?.addEventListener('click', () => {
              dropMenu.classList.toggle('drop-menu--active');
            });
          };
          




          const accordion = () => {  
            const acHeader=document.querySelectorAll('.accordion-header');
            const unstyle=document.querySelectorAll('.side-List')
            const unstyleImg=document.querySelectorAll('.side-List img')

            acHeader.forEach(function(tab,index){

              tab.addEventListener('click',function() {
                unstyleImg.forEach(function(img){
                  img.classList.remove('active')
                })
                unstyle.forEach(function(newtab){

                  newtab.classList.remove('active');

                })

                unstyle[index].classList.add('active');
                unstyleImg[index].classList.add('active')
              })
              
            })
          }




        },
    }