<template>
        <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
          >
            <h4 class="mb-0">Sell Return</h4>

            <div
                class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
                <a  class="add-role-link btns">
                  <button class="btn green"><span class="me-1">+</span>Add</button>
                </a>
           </div>

          </div>
        </div>
      </section>
    <section class="pro-users__section">
      <div class="section__container">

        <div class="dropdown-btn"  style="display:inline-block">
                <div class="select d-flex alig-items-center gap-4" >
                    <span class="selected">Filter by date</span>
                    <img src="../../../assets/img/drop.svg" alt="">
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
    </section>

    <section class="pro-search__section">
          <div class="section__container">
              <div
              class="pro__search"
              >
              <div class="pro-select-box">
                <div class="dropdown-btn" >
                        <div class="select d-flex alig-items-center gap-4" >
                            <span class="selected">Export</span>
                            <img src="../../../assets/img/drop.svg" alt="">
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
                          <th>Date</th>
                          <th>Invoice No</th>
                          <th>Parent Sale</th>
                          <th>Customer Name</th>
                          <th>Location</th>
                          <th>Payment Status</th>
                          <th>Total Amount</th>
                          <th>Payment Due</th>
                          <th>Action</th>
                        </tr>
                      </thead>


                      <tbody>
                        <tr>
                              <td>17/04/22</td>
                              <td>E54814</td>
                              <td>Kamrul Islam</td>
                              <td>Dhaka</td>
                              <td>                        
                                <button class="pro-add-btn">
                                    Success
                                  </button>
                              </td>
                              <td>$120</td>
                              <td>
                                $140
                              </td>
                              <td>$1200</td>
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
                              <td>E54814</td>
                              <td>Kamrul Islam</td>
                              <td>Dhaka</td>
                              <td>                        
                                <button class="pro-add-btn">
                                    Success
                                  </button>
                              </td>
                              <td>$120</td>
                              <td>
                                $140
                              </td>
                              <td>$1200</td>
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
                              <td>E54814</td>
                              <td>Kamrul Islam</td>
                              <td>Dhaka</td>
                              <td>                        
                                <button class="pro-add-btn">
                                    Success
                                  </button>
                              </td>
                              <td>$120</td>
                              <td>
                                $140
                              </td>
                              <td>$1200</td>
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
    </section>

</template>

<script>
export default {

}
</script>

<style>

</style>