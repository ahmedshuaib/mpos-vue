<template>
    <section class="pro-users__section">
      <div class="section__container">
        <div  
          class="d-flex align-items-strech justify-content-between heading-box flex-wrap gap-2 btns"
        >
          <h4 class="mb-0">Product Transfer Reports</h4>
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

        <div class="col-lg-12 mb-4 mt-4">
            <div class="row  justify-content-end">
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
                <div class="col-lg-3 mt-4">
                    <label for="date" class="form-label m-0">Location</label>
                    <div class="input-group mb-3 location-search">
                        <span class="input-group-text rounded-0" id="basic-addon1"><img src="../assets/img/Location.svg" alt=""></span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col-lg-2 mt-4 btns d-flex align-items-center gap-3">
                    <button class="btn  m-0 green">Submit</button>
                    <button class="btn  m-0 green"><img src="../assets/img/Download.svg" alt="print"></button>
                </div>
            </div>
        </div>
      </div>
    </section>



    <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <table ref="table6" width="100%">
                  <thead>
                    <tr>
                      <th style="border-top-left-radius: 10px">SL</th>
                      <th>SKU</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr>
                            <td>P02021</td>
                            <td>1.00</td>
                            <td>Airpods</td>
                            <td>1.00</td>
                            <td>$310</td>
                        </tr>
                        <tr>
                            <td>P02021</td>
                            <td>1.00</td>
                            <td>Airpods</td>
                            <td>1.00</td>
                            <td>$310</td>
                        </tr>
                        <tr>
                            <td>P02021</td>
                            <td>1.00</td>
                            <td>Airpods</td>
                            <td>1.00</td>
                            <td>$310</td>
                        </tr>
                      <!-- calc row -->
                        <tr>
                            <td
                            style="
                                background-color: #e1e5e6 !important;
                                border-right: 1px solid #fff !important;
                                border-bottom-left-radius: 10px;
                            "
                          class="total_stock_amount" colspan="4" >
                            Total:
                            </td>
                            <td
                            style="
                                background-color: #e1e5e6 !important;
                                border-right: 1px solid #fff !important;
                            "
                              class="total_stock_amount">
                            $23,000
                            </td>
                            <td style="display:none !important"></td>
                            <td style="display:none !important"></td>
                            <td style="display:none !important"></td>

                        </tr>
                  </tbody>
                </table>
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