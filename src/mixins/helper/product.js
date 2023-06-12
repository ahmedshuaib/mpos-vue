export default{
  methods:{
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
        const selectBtn = document.querySelector('.select-btn');
        const options = document.querySelectorAll('.option');
        const sBtn_text = document.querySelector('.sBtn-text');

        options.forEach((option) => {
          option.addEventListener('click', () => {
            let selected = option.querySelector('.option-text').innerText;
            sBtn_text.innerText = selected;
            optionMenu.classList.remove('select-menu--active');
          });
        });

        selectBtn.addEventListener('click', () => {
          optionMenu.classList.add('select-menu--active');
        });
        optionMenu.classList.add('select-menu--active');
    },
  },
    mounted(){
        window.addEventListener('load', () => {
            dropDown();
            dotsMenu();
          });


          
          const dropDown = () => {
            const dropMenu = document?.querySelector('.drop-menu');
            const dropBtn = document?.querySelector('.drop-btn');
            const dOptions = document?.querySelectorAll('.d-option');
            const dBtn_text = document?.querySelector('.dBtn-text');
          
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
          
          const dotsMenu = () => {
            const dotsMenu = document.querySelector('.dots-menu');
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
          };
          
    }
}