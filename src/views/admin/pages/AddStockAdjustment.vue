<template>
    <section class="pro-users__section">
      <div class="section__container">
          <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
              <h4 class="mb-0">Add Stock Adjustment</h4>
          </div>
          <div class="col-lg-12 product-image pt-3">
              <div class="row">
                  <div class="col-lg-4 mb-4">
                      <label for="product">Business Location:*</label>
                          <select class="form-select" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                  </div>
                  <div class="col-lg-4 mb-4">
                      <label for="product">Reference No:*</label>
                      <input type="text" class="form-control" id="product" placeholder="Product Name">
                  </div>
                  <div class="col-lg-4 mb-4">
                        <label for="date"> Date:*</label>
                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/plus.svg" alt="">
                            </button>
                            <input type="date" class="form-control" id="date" placeholder="17/04/2022">                
                        </div>
                  </div>

                  <div class="col-lg-4 mb-4">
                      <label for="product">Adjustment Type:*</label>
                      <div class="select-group">
                          <select class="form-select" aria-label="Default select example">
                              <option selected>Please Select</option>
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
                    <span class="input-group-text" id="basic-addon1"><img src="../../../assets/img/search2.svg" alt=""></span>
                    <input type="text" class="form-control" placeholder="Search Product for stock adjustment" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="col-lg-12 empty">
                <div class="row">
                    <div class="col-lg-2">
                        <span class="span">Product</span>
                    </div>
                    <div class="col-lg-2">
                        <span class="span">Stock</span>
                    </div>
                    <div class="col-lg-2">
                        <span class="span">Quantity</span>
                    </div>
                    <div class="col-lg-2">
                        <span class="span">Unit Price</span>
                    </div>
                    <div class="col-lg-2">
                        <span class="span">Subtotal</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 total mt-4">
                <span>Total Amount:0</span>
            </div>
        </div>


        
        <div class="col-lg-12 product-image mt-5">
            <div class="row">
                <div class="col-lg-4">
                    <label for="amount">Total amount recovered:*</label>
                    <input type="number" class="form-control" placeholder="0.00">
                </div>
                <div class="col-lg-8">
                    <label for="amount">Reason</label>
                    <input type="text" class="form-control" placeholder="Reason">
                </div>
            </div>
        </div>

        <div class="btns mt-4 text-end">
            <div class="btn green">Save</div>
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