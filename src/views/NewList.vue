<template>
    <section class="pro-users__section">
      <div class="section__container">
          <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
              <h4 class="mb-0">Products</h4>
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

    <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <table ref="table3" style="width:100%">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Product Type</th>
                            <th>Category</th>
                            <th>Sub Category</th>
                            <th>Unit</th>
                            <th>SKU</th>
                            <th>Purchase Price</th>
                            <th>Sell Price</th>
                            <th>Stock</th>
                            <th style="border-top-right-radius: 10px">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <span className="stock-img d-flex align-items-center gap-1">
                                    <input class="form-check-input green-check" type="checkbox" value="" id="flexCheckDefault">
                                    <img class="me-2" src="../assets/img/iphone.svg" alt="img" />
                                    <span className=" d-inline-block"
                                    >I Phone</span
                                    >
                                </span>
                            </td>
                            <td>Single</td>
                            <td>Mobile</td>
                            <td>asdf</td>
                            <td>Pices</td>
                            <td>06</td>
                            <td>1,50000</td>
                            <td>123666</td>
                            <td>146</td>
                            <td>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <span className="stock-img d-flex align-items-center gap-1">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <img class="me-2" src="../assets/img/iphone.svg" alt="img" />
                                <span className=" d-inline-block"
                                >I Phone</span
                                >
                            </span>
                        </td>
                        <td>Single</td>
                        <td>Mobile</td>
                        <td>asdf</td>
                        <td>Pic</td>
                        <td>06</td>
                        <td>1,50000</td>
                        <td>123666</td>
                        <td>146</td>
                        <td>
                        <div class="dots-menu">
                        <div class="dots-btn">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>

                        <ul class="t-options">


                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Labels</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                            </li>
                        </ul>
                        </div>
                    </td>
                        </tr>
                        <tr>
                        <td>
                            <span className="stock-img d-flex align-items-center gap-1">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <img class="me-2" src="../assets/img/iphone.svg" alt="img" />
                                <span className=" d-inline-block"
                                >I Phone</span
                                >
                            </span>
                        </td>
                        <td>Single</td>
                        <td>Mobile</td>
                        <td>asdf</td>
                        <td>Pic</td>
                        <td>06</td>
                        <td>1,50000</td>
                        <td>123666</td>
                        <td>146</td>
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
                            <td>
                                <span className="stock-img d-flex align-items-center gap-1">
                                    <input class="form-check-input green-check" type="checkbox" value="" id="flexCheckDefault">
                                    <img class="me-2" src="../assets/img/iphone.svg" alt="img" />
                                    <span className=" d-inline-block"
                                    >I Phone</span
                                    >
                                </span>
                            </td>
                            <td>Single</td>
                            <td>Mobile</td>
                            <td>asdf</td>
                            <td>Pices</td>
                            <td>06</td>
                            <td>1,50000</td>
                            <td>123666</td>
                            <td>146</td>
                            <td>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="stock-img d-flex align-items-center gap-1">
                                    <input class="form-check-input green-check" type="checkbox" value="" id="flexCheckDefault">
                                    <img class="me-2" src="../assets/img/iphone.svg" alt="img" />
                                    <span className=" d-inline-block"
                                    >I Phone</span
                                    >
                                </span>
                            </td>
                            <td>Single</td>
                            <td>Mobile</td>
                            <td>asdf</td>
                            <td>Pices</td>
                            <td>06</td>
                            <td>1,50000</td>
                            <td>123666</td>
                            <td>146</td>
                            <td>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
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