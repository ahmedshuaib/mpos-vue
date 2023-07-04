<template>
    <section class="pro-users__section">
      <div class="section__container">
          <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
              <h4 class="mb-0">Business Settings</h4>
          </div>
          <div class="row">
                <div class="col-lg-2">
                    <section class="pro-search__section">
                        <div class="section__container p-0">
                            <div
                            class="pro__search"
                            >
                            <div class="pro-select-box">
                                <!-- dropdown menu -->

                                <!-- select menu -->
                                <div class="dropdown-btn" >
                                    <div class="select d-flex alig-items-center gap-4" >
                                        <span class="selected">Business</span>
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
                </div>
                <div class="col-lg-10 product-image pt-3">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <label for="product">Product Name:*</label>
                        <input type="text" class="form-control" id="product" placeholder="Product Name">
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Start Date:*</label>
                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/plus.svg" alt="">
                            </button>
                            <input type="date" class="form-control" id="product">
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Default Profit percent:*</label>

                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/plus.svg" alt="">
                            </button>
                            <input type="number" class="form-control" id="product" placeholder="10">
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Currency::*</label>
                            <div class="select-group">
                            <button class="btn">
                                <img src="../../../assets/img/payment.svg" alt="">
                            </button>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Bangladesh - Taka(BTD)</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                         </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Currency Symbol Placement:</label>
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Before amount</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Time zone:</label>
                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/time.svg" alt="">
                            </button>
                            <input type="text" class="form-control" id="product" placeholder="Asia/Dhaka">
                        </div>
                    </div>  
                    <div class="col-lg-4 mb-4">
                        <label for="product">Time zone:</label>
                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/time.svg" alt="">
                            </button>
                            <input type="text" class="form-control" id="product" placeholder="Asia/Dhaka">
                        </div>
                    </div>  
                    <div class="col-lg-4 mb-4">
                        <label for="browse">Browse:*</label>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" placeholder="Recipient's username" id="browse" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <span class="input-group-text align-items-center gap-1" id="basic-addon2"> <img src="../../../assets/img/folder.svg" alt="">Browse</span>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Stock Accounting Method:*</label>
                            <div class="select-group">
                            <button class="btn">
                                <img src="../../../assets/img/calculatorgreen.svg" alt="">
                            </button>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>FIFO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                         </div>
                    </div>

                    <div class="col-lg-4 mb-4">
                        <label for="product">Transaction Edit Days:*</label>

                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/greenedit.svg" alt="">
                            </button>
                            <input type="number" class="form-control" id="product" placeholder="30">
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Date Format:*</label>
                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/plus.svg" alt="">
                            </button>
                            <input type="date" class="form-control" id="product">
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Time Format:</label>

                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/time.svg" alt="">
                            </button>
                            <input type="number" class="form-control" id="product" placeholder="12 Hrs">
                        </div>
                    </div>
                </div>

            </div>
          </div>


          <div class="col-lg-12 text-end mt-4">
              <div class="btns">
                  <button class="btn leaf">Update Setting</button>
              </div>
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