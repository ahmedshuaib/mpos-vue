<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
            <h4 class="mb-0">Receive Personal</h4>
            <h2 class="header-balance">Your Total Balance is: 0</h2>
        </div>
        <div class="col-lg-12 d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
            <div class="input-group mb-3" style="width:150px">
              <select class="form-select" id="inputGroupSelect01" >
                <option selected>Filter by Date</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <a class="add-role-link btns">
                <button class="btn green"><span class="me-1">+</span>Add</button>
            </a>
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
                  <th>Transaction Date</th>
                  <th>Receiver From</th>
                  <th>Phone</th>
                  <th>Reason</th>
                  <th>Received By</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>2022-04-04</td>
                      <td>Nirjon Roy</td>
                      <td>01765468</td>
                      <td>Tee Bill</td>
                      <td>Alor Pothe</td>
                      <td>0.00</td>
                      <td>
                          <div class="d-flex align-items-center gap-2">
                          <a>
                              <button class="pro-edit-btn">
                              <img src="../assets/img/edit.svg" alt=""> Edit
                          </button>
                          </a>
                          <button class="pro-delete-btn">
                              <img src="../assets/img/delete.svg" alt=""> Delete
                          </button>
                          </div>
                        </td>
                  </tr>
                  <tr>
                      <td>2022-04-04</td>
                      <td>Nirjon Roy</td>
                      <td>01765468</td>
                      <td>Tee Bill</td>
                      <td>Alor Pothe</td>
                      <td>0.00</td>
                      <td>
                          <div class="d-flex align-items-center gap-2">
                          <a>
                              <button class="pro-edit-btn">
                              <img src="../assets/img/edit.svg" alt=""> Edit
                          </button>
                          </a>
                          <button class="pro-delete-btn">
                              <img src="../assets/img/delete.svg" alt=""> Delete
                          </button>
                          </div>
                        </td>
                  </tr>
                  <tr>
                      <td>2022-04-04</td>
                      <td>Nirjon Roy</td>
                      <td>01765468</td>
                      <td>Tee Bill</td>
                      <td>Alor Pothe</td>
                      <td>0.00</td>
                      <td>
                          <div class="d-flex align-items-center gap-2">
                          <a>
                              <button class="pro-edit-btn">
                              <img src="../assets/img/edit.svg" alt=""> Edit
                          </button>
                          </a>
                          <button class="pro-delete-btn">
                              <img src="../assets/img/delete.svg" alt=""> Delete
                          </button>
                          </div>
                        </td>
                  </tr>
                  <tr>
                        <td
                        style="
                            background-color: #e1e5e6 !important;
                            border-right: 1px solid #fff !important;
                            border-bottom-left-radius: 10px;
                        "
                       class="total_stock_amount" colspan="5" >
                        Total:
                        </td>
                        <td
                        style="
                            background-color: #e1e5e6 !important;
                            border-right: 1px solid #fff !important;
                            border-bottom-right-radius: 10px;

                        "
                          class="total_stock_amount" colspan="2">
                        $23,000
                        </td>
                        <td style="display:none !important"></td>
                        <td style="display:none !important"></td>
                        <td style="display:none !important"></td>
                        <td style="display:none !important"></td>
                        <td style="display:none !important"></td>
                        <td style="display:none !important"></td>
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