<template>


    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Expense</h4>
          <a ref="" class="add-role-link btns">
            <button class="btn green"><span class="me-1">+</span>Add</button>
          </a>
        </div>

          <div class="col-lg-12 product-image">
            <div class="filter">
                <img src="../assets/img/filter.svg" alt="filter">
            </div>
            <div class="row pay-term">
                <div class="col-lg-4">
                    <label for="Pay">Pay term*</label>
                    <input type="text" placeholder="Pay term" class="form-control">
                </div>
                <div class="col-lg-4">
                  <label for="Pay">Pay term*</label>
                  <input type="text" placeholder="Pay term" class="form-control">
                </div>
                <div class="col-lg-4">
                  <label for="Pay">Pay term*</label>
                  <input type="text" placeholder="Pay term" class="form-control">
                </div>
            </div>
          </div>
      </div>

      <section class="pro-search__section mt-3">
          <div class="section__container">
              <div
              class="pro__search"
              >
              <div class="pro-select-box">
                  <!-- dropdown menu -->

                  <!-- select menu -->
                  <div class="select-menu">
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
          </div>
    </section>
    </section>


    <section class="pro-table__section">
      <div class="section__container">
        <div class="table__wrapper">
          <div class="table-scrollable">
            
            <table ref="table5" style="width:100%">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reference No</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Payment Status</th>
                  <th>Total Amount</th>
                  <th>Payment due</th>
                  <th>Expense For</th>
                  <th>Action</th>
                </tr>
              </thead>


              <tbody>
                <tr>
                    <td>17/04/22</td>
                    <td>P022541</td>
                    <td>Office Clean</td>
                    <td>Original Gadget</td>
                    <td>
                        <button class="pro-edit-btn">
                          Paid      
                        </button>
                    </td>
                    <td>$1200</td>
                    <td>0.00</td>
                    <td>Alor Pothe</td>
                    <td>
                        <div class="dots-menu">
                          <div class="dots-btn">
                              <i class="fa-solid fa-ellipsis"></i>
                          </div>

                          <ul class="t-options">
                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Delete</p>
                              </li>
                          </ul>
                          </div> 
                    </td>
                </tr>
                <tr>
                    <td>17/04/22</td>
                    <td>P022541</td>
                    <td>Office Clean</td>
                    <td>Original Gadget</td>
                    <td>
                        <button class="pro-edit-btn">
                          Paid      
                        </button>
                    </td>
                    <td>$1200</td>
                    <td>0.00</td>
                    <td>Alor Pothe</td>
                    <td>
                        <div class="dots-menu">
                          <div class="dots-btn">
                              <i class="fa-solid fa-ellipsis"></i>
                          </div>

                          <ul class="t-options">
                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Delete</p>
                              </li>
                          </ul>
                          </div> 
                    </td>
                </tr>
                <tr>
                    <td>17/04/22</td>
                    <td>P022541</td>
                    <td>Office Clean</td>
                    <td>Original Gadget</td>
                    <td>
                        <button class="pro-edit-btn">
                          Paid      
                        </button>
                    </td>
                    <td>$1200</td>
                    <td>0.00</td>
                    <td>Alor Pothe</td>
                    <td>
                        <div class="dots-menu">
                          <div class="dots-btn">
                              <i class="fa-solid fa-ellipsis"></i>
                          </div>

                          <ul class="t-options">
                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                              <span class="t-option-circle"></span>
                              <p class="t-option-text mb-0">Delete</p>
                              </li>
                          </ul>
                          </div> 
                    </td>
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
export default {

}
</script>

<style>

</style>