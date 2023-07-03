<template>
    <section class="pro-users__section">
      <div class="section__container">
          <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
              <h4 class="mb-0">Add Purchase</h4>
          </div>
          <div class="col-lg-12 product-image pt-3">
              <div class="row">
                  <div class="col-lg-4 mb-4">
                      <label for="product">Suppliser:*</label>
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
                  <div class="col-lg-4 mb-4">
                      <label for="product">Reference No:*</label>
                      <input type="text" class="form-control" id="product" placeholder="Product Name">
                  </div>
                  <div class="col-lg-4 mb-4">
                        <label for="date">Purchase Date:*</label>
                        <div class="select-group">
                            <button class="btn">
                            <img src="../../../assets/img/plus.svg" alt="">
                            </button>
                            <input type="date" class="form-control" id="date" placeholder="17/04/2022">                
                        </div>
                  </div>

                  <div class="col-lg-4 mb-4">
                      <label for="product">Purchase Status:* <img src="../../../assets/img/greeni.svg" alt=""></label>
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

                  <div class="col-lg-4 mb-4">
                      <label for="product">Business Location:*</label>
                      <div class="select-group">
                          <select class="form-select" aria-label="Default select example">
                              <option selected>Original Gadget</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                  </div>

                  <div class="col-lg-4 mb-4">
                      <label for="browse">Attach Document:</label>
                      <div class="input-group mb-3">
                          <input type="file" class="form-control" placeholder="Recipient's username" id="browse" aria-label="Recipient's username" aria-describedby="basic-addon2">
                          <span class="input-group-text align-items-center gap-1" id="basic-addon2"> <img src="../../../assets/img/folder.svg" alt="">Browse</span>
                      </div>
                      <span class="span">
                          Max File size 1MD
                      </span>
                  </div>
              </div>
          </div>

          <div class="col-lg-12 product-image pt-4 mt-5 pb-5">
              <div class="row btns justify-content-between">
                <div class="col-lg-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text bg-white justify-content-center" style="width:10%;" id="basic-addon1"><img src="../../../assets/img/search2.svg" alt="" class="text-center"></span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col-lg-4 text-end">
                    <button class="btn green">+ Add New Product</button>
                </div>
              </div>
              <div class="col-lg-10 m-auto">
              <div class="default-price">
                  <div class="row">
                      <div class="col-lg-6 p-3">
                          <span class="span2">

                          </span>
                      </div>
                      <div class="col-lg-3">
                          <span class="span2">

                          </span>
                      </div>
                      <div class="col-lg-3">
                          <span class="span2">

                          </span>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <div class="col-lg-12 text-end mt-4">
              <div class="btns">
                  <button class="btn blue">Sace & Add opening Stock</button>
                  <button class="btn leaf">+ Save and Add Another</button>
                  <button class="btn green">Save</button>
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