import { Chart } from 'chart.js';
import { registerables } from 'chart.js';



export default{
  mounted(){

      const dropMenu = document?.querySelector('.drop-menu');
      const dropBtn = document?.querySelector('.drop-btn');
      const dOptions = document?.querySelectorAll('.d-option');
      const dBtn_text = document?.querySelector('.dBtn-text');
      // const dotsMenu = document.querySelector('.dots-menu');
      const tOptions = document.querySelectorAll('.t-option');
      const dotsBtn = document.querySelectorAll('.dots-btn');
    
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
  
      dotsBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('dots--active');
        });
      });
    
      tOptions.forEach((opt) => {
        opt.addEventListener('click', () => {
          dotsBtn.forEach((btn) => {
            btn.classList.remove('dots--active');
          });
        });
      });


    const day = document.querySelector('#day');
        const week = document.querySelector('#week');
        const month = document.querySelector('#month');
        const year = document.querySelector('#year');
      
        // all items
        
        const dayItem = document.querySelector('.day-item');
        const weekItem = document.querySelector('.week-item');
        const monthItem = document.querySelector('.month-item');
        const yearItem = document.querySelector('.year-item');
      
        week?.addEventListener('click', () => {
          week.classList.add('day-active');
          day.classList.remove('day-active');
          month.classList.remove('day-active');
          year.classList.remove('day-active');
          // item showing
          weekItem.style.display = 'block';
          dayItem.style.display = 'none';
          monthItem.style.display = 'none';
          yearItem.style.display = 'none';
        });
      
        month?.addEventListener('click', () => {
          month.classList.add('day-active');
          day.classList.remove('day-active');
          week.classList.remove('day-active');
          year.classList.remove('day-active');
          // item showing
          weekItem.style.display = 'none';
          dayItem.style.display = 'none';
          monthItem.style.display = 'block';
          yearItem.style.display = 'none';
        });
      
        year?.addEventListener('click', () => {
          year.classList.add('day-active');
          day.classList.remove('day-active');
          week.classList.remove('day-active');
          month.classList.remove('day-active');
          // item showing
          weekItem.style.display = 'none';
          dayItem.style.display = 'none';
          monthItem.style.display = 'none';
          yearItem.style.display = 'block';
        });
      
        day?.addEventListener('click', () => {
          day.classList.add('day-active');
          week.classList.remove('day-active');
          month.classList.remove('day-active');
          year.classList.remove('day-active');
          // item showing
          weekItem.style.display = 'none';
          dayItem.style.display = 'block';
          monthItem.style.display = 'none';
          yearItem.style.display = 'none';
        });
        this.initializeCharts();
  },

  beforeRouteLeave(to, from, next) {
      this.destroyCharts();
      next();
  },
    methods:{ 
      initializeCharts(){
        const ctxOne = document?.getElementById('myChartOne')?.getContext('2d');
        const ctxTwo = document?.getElementById('myChartTwo')?.getContext('2d');
        const ctxThree = document?.getElementById('myChartThree')?.getContext('2d');
        const ctxFour = document?.getElementById('myChartFour')?.getContext('2d');
  
        // Gradient fill
        let gradientOne = ctxOne?.createLinearGradient(0, 0, 0, 700);
        let gradientTwo = ctxTwo?.createLinearGradient(0, 0, 0, 700);
        let gradientThree = ctxTwo?.createLinearGradient(0, 0, 0, 700);
        let gradientFour = ctxTwo?.createLinearGradient(0, 0, 0, 700);
      
        gradientOne?.addColorStop(0, '#DEEFE9');
        gradientOne?.addColorStop(1, '#deefe933');
      
        gradientTwo?.addColorStop(0, '#DEEFE9');
        gradientTwo?.addColorStop(1, '#deefe933');
      
        gradientThree?.addColorStop(0, '#DEEFE9');
        gradientThree?.addColorStop(1, '#deefe933');
      
        gradientFour?.addColorStop(0, '#DEEFE9');
        gradientFour?.addColorStop(1, '#deefe933');
      
        const labels = [
          '15k',
          '10k',
          '20k',
          '25k',
          '30K',
          '35K',
          '40K',
          '45K',
          '50K',
          '55K',
          '60K',
        ];
      
        const data1 = {
          labels,
          datasets: [
            {
              data: [
                20, 40, 60, 30, 50, 30, 40, 60, 60, 100, 20, 40, 60, 60, 60, 20, 40,
                60, 60, 50, 80, 40, 60, 60, 100, 20, 40,
              ],
              label: 'chart label',
              fill: true,
              backgroundColor: gradientOne,
              borderColor: '#229269',
              pointBackgroundColor: '#229269',
            },
          ],
        };
      
        const data2 = {
          labels,
          datasets: [
            {
              data: [
                20, 40, 60, 60, 50, 80, 40, 60, 60, 100, 80, 40, 60, 60, 60, 100, 40,
                60, 60, 50, 80, 40, 60, 60, 30, 70, 40,
              ],
              label: 'chart label',
              fill: true,
              backgroundColor: gradientOne,
              borderColor: '#229269',
              pointBackgroundColor: '#229269',
            },
          ],
        };
      
        const data3 = {
          labels,
          datasets: [
            {
              data: [
                20, 40, 60, 60, 50, 80, 90, 60, 60, 100, 80, 40, 60, 60, 60, 100, 40,
                60, 60, 50, 80, 40, 60, 60, 70, 70, 0,
              ],
              label: 'chart label',
              fill: true,
              backgroundColor: gradientOne,
              borderColor: '#229269',
              pointBackgroundColor: '#229269',
            },
          ],
        };
      
        const data4 = {
          labels,
          datasets: [
            {
              data: [
                60, 40, 60, 60, 50, 80, 10, 60, 60, 50, 80, 40, 60, 60, 60, 30, 40,
                60, 60, 50, 80, 40, 60, 60, 100, 70, 80,
              ],
              label: 'chart label',
              fill: true,
              backgroundColor: gradientOne,
              borderColor: '#229269',
              pointBackgroundColor: '#229269',
            },
          ],
        };
      
        const labelTooltip1 = (tooltipItems) => {
          return '';
        };
      
        const config1 = {
          type: 'line',
          data: data1,
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                displayColors: false,
                backgroundColor: '#229269',
                yAlign: 'bottom',
                callbacks: {
                  label: labelTooltip1,
                },
              },
            },
      
            radius: 5,
            responsive: true,
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return value + '%';
                  },
                },
              },
      
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        };
      
        const config2 = {
          type: 'line',
          data: data2,
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                displayColors: false,
                backgroundColor: '#229269',
                yAlign: 'bottom',
                callbacks: {
                  label: labelTooltip1,
                },
              },
            },
            radius: 5,
            responsive: true,
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return value + '%';
                  },
                },
              },
      
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        };
      
        const config3 = {
          type: 'line',
          data: data3,
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                displayColors: false,
                backgroundColor: '#229269',
                yAlign: 'bottom',
                callbacks: {
                  label: labelTooltip1,
                },
              },
            },
      
            radius: 5,
            responsive: true,
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return value + '%';
                  },
                },
              },
      
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        };
      
        const config4 = {
          type: 'line',
          data: data4,
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                displayColors: false,
                backgroundColor: '#229269',
                yAlign: 'bottom',
                callbacks: {
                  label: labelTooltip1,
                },
              },
            },
      
            radius: 5,
            responsive: true,
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return value + '%';
                  },
                },
              },
      
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        };

      this.chartOne = new Chart(ctxOne, config1);
      this.chartTwo = new Chart(ctxTwo, config2);
      this.chartThree = new Chart(ctxThree, config3);
      this.chartFour = new Chart(ctxFour, config4);
    },
      destroyCharts() {
        this.chartOne.destroy();
        this.chartTwo.destroy();
        this.chartThree.destroy();
        this.chartFour.destroy();
      }
  }
 }

Chart.register(...registerables);
