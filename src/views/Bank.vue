<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
            <h4 class="mb-0">Bank</h4>
            <h2 class="header-balance">Your Total Balance is: 0</h2>
        </div>
        <div class="col-lg-12 d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
               <div class="dropdown-btn" >
                      <div class="select d-flex alig-items-center gap-4" >
                          <span class="selected">Filter by date</span>
                          <img src="../assets/img/drop.svg" alt="">
                      </div>
                      <ul class="menu">
                          <li>Copy</li>
                          <li>Export to CSV</li>
                          <li class="active">Export to Excel</li>
                          <li>Export to PDF</li>
                          <li>Print</li>
                          <li>Column visibility</li>
                      </ul>
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
                <div class="dropdown-btn" >
                      <div class="select d-flex alig-items-center gap-4" >
                          <span class="selected">Export</span>
                          <img src="../assets/img/drop.svg" alt="">
                      </div>
                      <ul class="menu">
                          <li>Copy</li>
                          <li>Export to CSV</li>
                          <li class="active">Export to Excel</li>
                          <li>Export to PDF</li>
                          <li>Print</li>
                          <li>Column visibility</li>
                      </ul>
                  </div>
            </div>
          </div>
      </div>
    </section>




    <section class="stock__section mt-5">
      <div class="section__container">
          <div class="card border-0 bg-white p-4">
            <table ref="table5" style="width:100%">
              <thead>
                <tr>
                  <th>Transaction Date</th>
                  <th>Bank Name</th>
                  <th>Branch</th>
                  <th>Sender</th>
                  <th>Account No</th>
                  <th>Amount</th>
                  <th>Purpose</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>2022-04-04</td>
                      <td>Islami bank ltd</td>
                      <td>Mohadpur</td>
                      <td>Alor Pothe</td>
                      <td>1655786564</td>
                      <td>0</td>
                      <td>Taka</td>
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
                      <td>Islami bank ltd</td>
                      <td>Mohadpur</td>
                      <td>Alor Pothe</td>
                      <td>1655786564</td>
                      <td>0</td>
                      <td>Taka</td>
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
                      <td>Islami bank ltd</td>
                      <td>Mohadpur</td>
                      <td>Alor Pothe</td>
                      <td>1655786564</td>
                      <td>0</td>
                      <td>Taka</td>
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
                       class="total_stock_amount" colspan="6" >
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
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>