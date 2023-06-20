<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">List Purchase Return</h4>
          <router-link :to="{name:'add-purchase'}" class="add-role-link btns">
            <button class="btn green"><span class="me-1">+</span>Add</button>
          </router-link>
        </div>

        <div class="col-lg-1">
          <div class="input-group mb-3" style="width:150px">
          <select class="form-select" id="inputGroupSelect01" >
          <option selected>Filter by Date</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>
          </div>
        </div>

      </div>
    </section>

    <section class="pro-search__section">
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
    <section class="pro-table__section">
      <div class="section__container">
        <div class="table__wrapper">
          <div class="table-scrollable">
            
            <table ref="table5" style="width:100%">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reference No</th>
                  <th>Parent Purchase</th>
                  <th>Location</th>
                  <th>Supplier</th>
                  <th>Payment Status</th>
                  <th>Grand Total</th>
                  <th>Payment due</th>
                  <th>Action</th>
                </tr>
              </thead>


              <tbody>
                <tr>
                    <td>17/04/22</td>
                    <td>P022541</td>
                    <td>Mobile</td>
                    <td>Dhaka</td>
                    <td>Kamrul Islam</td>
                    <td>
                        <button class="pro-delete-btn">
                          <img src="../assets/img/delete.svg" alt="">
                          Due      
                        </button>
                    </td>
                    <td>$1200</td>
                    <td>p:$1200</td>
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