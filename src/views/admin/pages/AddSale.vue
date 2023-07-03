<template>
    <section class="pro-users__section">
      <div class="section__container">
          <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
              <h4 class="mb-0">Add Sale</h4>
          </div>
          <div class="col-lg-12 product-image pt-3">
              <div class="row">
                  <div class="col-lg-4 mb-4">
                      <label for="product">Customer:*</label>
                      <div class="select-group">
                          <button class="btn">
                          <img src="../../../assets/img/plus.svg" alt="">
                          </button>
                          <select class="form-select" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                  </div>

                  <div class="col-lg-4 mg-4">
                    <label for="product">Customer:*</label>
                        <div class="input-group mb-3">
                            <label class="input-group-text bg-white" for="inputGroupSelect01">Pay term:*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </label>
                            <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                  </div>

                  <div class="col-lg-4 mb-4">
                      <label for="product">Purchase Date:*</label>

                      <div class="select-group btns ">
                          <button class="btn green m-0">
                          <img src="../../../assets/img/calendar.svg" alt="">
                          </button>
                          <input type="date" class="form-control">
                      </div>
                  </div>

                  <div class="col-lg-4 mb-4">
                      <label for="product">Sub Category:*</label>
                      <div class="select-group">
                          <select class="form-select" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                  </div>
              </div>
        </div>

        <div class="col-lg-12 product-image pt-3 mt-5">
            <div class="row">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><img src="../../../assets/img/bcode.svg" alt=""></span>
                    <input type="text" class="form-control" placeholder="Enter Pruduct naem / SKU / Scan bar code" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="col-lg-12 empty">
                <div class="row">
                    <div class="col-lg-3">
                        <span class="span">Product</span>
                    </div>
                    <div class="col-lg-3">
                        <span class="span">Price inc.tax</span>
                    </div>
                    <div class="col-lg-3">
                        <span class="span">Price inc.tax</span>
                    </div>
                    <div class="col-lg-3">
                        <span class="span">Subotal</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 total mt-4">
                <span>Total:0</span>
            </div>
        </div>

        <div class="col-lg-12 product-image mt-5">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <label for="product">Discont Type:*</label>
                    <div class="select-group">
                        <button class="btn">
                        <img src="../../../assets/img/greeni.svg" alt="">
                        </button>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Percentenge</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-4">
                    <label for="amount">Discount Amount:*</label>
                    <input type="number" class="form-control" placeholder="0.00">
                </div>
                <div class="col-lg-4 d-flex align-items-center">
                    <div class="calculate">
                        <span class="span">Discount Amount: (-) 0.00</span><br>
                         <span class="span">Order Tax : (+) 0.00</span>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <label for="product">Order Tax:*</label>
                    <div class="select-group">
                        <button class="btn">
                        <img src="../../../assets/img/greeni.svg" alt="">
                        </button>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>None</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <label for="product">Shipping Details:*</label>
                    <div class="select-group">
                        <button class="btn">
                        <img src="../../../assets/img/greeni.svg" alt="">
                        </button>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Shipping Details:*</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-4">
                    <label for="amount">Shipping Charge:*</label>
                    <div class="select-group">
                        <button class="btn">
                        <img src="../../../assets/img/greeni.svg" alt="">
                        </button>
                         <input type="number" class="form-control" placeholder="0.00">
                    </div>
                </div>
                <div class="col-lg-4 d-flex align-items-center">
                    <div class="calculate">
                         <span class="span">Total Payable : 0</span>
                    </div>
                </div>    
            </div>
            <div class="mb-3">
                <label for="sell" class="form-label">Sell Note:</label>
                <textarea class="form-control" id="sell" rows="4"></textarea>
            </div>
        </div>

        <div class="col-lg-12 product-image">
            <div class="row">
                <div class="col-lg-4">
                    <label for="amount">Ammount:*</label>
                    <div class="select-group">
                        <button class="btn">
                        <img src="../../../assets/img/payment.svg" alt="">
                        </button>
                        <input type="number" class="form-control" placeholder="0.00">
                    </div>
                </div>
                <div class="col-lg-4">
                    <label for="amount">Payment Method:*</label>
                    <div class="select-group">
                        <button class="btn">
                        <img src="../../../assets/img/payment.svg" alt="">
                        </button>
                        <input type="number" class="form-control" placeholder="Cash">
                    </div>
                </div>
            </div>
            <div class="mb-3 mt-5">
                <label for="sell" class="form-label">Payment Note:</label>
                <textarea class="form-control" id="sell" rows="5"></textarea>
            </div>
        </div>
        <div class="balance text-end">
            <span class="span text-end">Balance : 0.00</span>
        </div>
          <div class="col-lg-12 text-end mt-4">
              <div class="btns">
                  <button class="btn green">Submit</button>
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