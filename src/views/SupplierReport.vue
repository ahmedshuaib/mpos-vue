<template>
    <section class="pro-users__section">
      <div class="section__container">
        <div  
          class="d-flex align-items-strech justify-content-between heading-box flex-wrap gap-2 btns"
        >
          <h4 class="mb-0">Supplier Wise Product Sell Report</h4>

        

          <a>
            
            <button class="btn green" id="user-add-btn" @click="openModal">
                  <span class="me-1">+</span>Add
            </button>
            
          </a>
        </div>
        <div
              class="pro__search"
              >
              <div class="pro-select-box justify-content-start">
                  <!-- dropdown menu -->

                  <!-- select menu -->
                  <div class="select-menu  text-start">
                  <div class="select-btn green-export" @click="selectBtn">
                      <span class="sBtn-text">Export</span>
                      <img src="../assets/img/drop.svg" alt="">
                  </div>

                  <ul class="options">
                      <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Copy</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Export to CSV</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Export to Excel</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Export to PDF</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Print</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Column Visibility</p>
                      </li>
                  </ul>
                  </div>
              </div>
        </div>

        <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-3 mt-4">
                    <label for="supplier">Supplier:</label>
                    <select class="form-select" aria-label="Default select example" id="supplier">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-lg-3 mt-4">
                    <div class="mb-3">
                        <label for="date" class="form-label m-0">Date From:</label>
                        <input type="text" class="form-control" id="date" placeholder="Date From">
                    </div>
                </div>
                <div class="col-lg-3 mt-4">
                    <div class="mb-3">
                        <label for="date" class="form-label m-0">Date To:</label>
                        <input type="text" class="form-control" id="date" placeholder="Date To">
                    </div>
                </div>
                <div class="col-lg-3 mt-4 btns d-flex align-items-center gap-3">
                    <button class="btn bg-white m-0">Refresh <img src="../assets/img/refresh.svg" alt="" class="align-text-top"></button>
                    <button class="btn  m-0 green">Submit</button>
                    <button class="btn  m-0 green"><img src="../assets/img/print.svg" alt="print"></button>
                    <button class="btn  m-0 green"><img src="../assets/img/Download.svg" alt="print"></button>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section class="pro-search__section">
          <div class="section__container">

          </div>
    </section>
    
    <section class="pro-table__section">
      <div class="section__container">
        <div class="table__wrapper">
          <div class="table-scrollable">
            <table ref="table6" width="100%">
              <thead>
                <tr>
                  <th style="border-top-left-radius: 10px">Supplier Name</th>
                  <th>Sell Qty</th>
                  <th>Return Qty</th>
                  <th>Purchase Amount</th>
                  <th>Sale Amount</th>
                  <th>Discount</th>
                  <th>Vat</th>
                  <th>Return Amount</th>
                  <th>Net Sale</th>
                  <th>Gross Profit</th>

                </tr>
              </thead>
              <tbody>
                    <tr>
                        <td>Kamrul Islam</td>
                        <td>2.00</td>
                        <td>0.00</td>
                        <td>0.000</td>
                        <td>0.00</td> 
                        <td>1900</td>
                        <td>0.000</td>
                        <td>0.000</td>
                        <td>1900</td>
                        <td>1700</td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <router-view></router-view>
</template>

<script>
export default{
}
</script>

<style>

</style>