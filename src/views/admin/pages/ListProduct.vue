<template>
      <section class="pro-users__section">
        <div class="section__container">
            <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
                <h4 class="mb-0">Products</h4>
                <router-link :to="{name:'add-product'}">
                    <button class="user-add-btn" id="user-add-btn">
                        <span class="me-1">+</span>Add
                    </button>
                </router-link>
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
                  <div class="dropdown-btn">
                      <div class="select d-flex alig-items-center gap-4">
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
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <img class="me-2" src="../../../assets/img/iphone.svg" alt="img" />
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <img class="me-2" src="../../../assets/img/iphone.svg" alt="img" />
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
                    </tbody>
                </table>
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