<template>
    <section class="pro-users__section">
      <div class="section__container">
          <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
              <h4 class="mb-0">Print Label</h4>
          </div>
      </div>
  </section>
  <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <span class="span">Add Product to generate Labels</span>
                <div class="col-lg-10 m-auto">
                    <div class="input-group flex-nowrap mt-4">
                        <span class="input-group-text bg-white" id="addon-wrapping"><img src="../../../assets/img/search2.svg" alt=""></span>
                        <input type="text" class="form-control" placeholder="Enter products name to print labels" aria-label="Username" aria-describedby="addon-wrapping">
                    </div>
                    <div class="input-group mt-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text bg-white" id="basic-addon1" >No. of labels</span>
                    </div>
              </div>
            </div>
        </div>
    </section>



    <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <span class="span mb-4">
                    Information to show in Labels
                </span>
                <div class="row border-bottom">
                    <div class="col-lg-3">
                        <div class="form-check green-check">
                            <input class="form-check-input" type="checkbox" value="" id="leaf-check">
                            <label class="form-check-label" for="flexCheckDefault">
                                Pruduct Name
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-check green-check">
                            <input class="form-check-input" type="checkbox" value="" id="leaf-check">
                            <label class="form-check-label" for="flexCheckDefault">
                                Pruduct Variation <br>
                                <span class="span">(recommended)</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-check green-check">
                            <input class="form-check-input" type="checkbox" value="" id="leaf-check">
                            <label class="form-check-label" for="flexCheckDefault">
                                Pruduct Name
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <label  for="inputGroupSelect01">Options :</label>
                        <div class="input-group mb-3">
                            <label class="input-group-text m-0" for="inputGroupSelect01"><img src="../../../assets/img/greeni.svg" alt=""></label>
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-5">
                        <div class="form-check green-check">
                            <input class="form-check-input" type="checkbox" value="" id="leaf-check">
                            <label class="form-check-label" for="flexCheckDefault">
                                Business Name
                            </label>
                        </div>
                    </div>
                </div>
                <div class="settings-label mt-5">
                    <div class="col-lg-4">
                        <label  for="inputGroupSelect01">Show Price :</label>
                        <div class="input-group mb-3">
                            <label class="input-group-text m-0" for="inputGroupSelect01"><img src="../../../assets/img/settings.svg" alt=""></label>
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>20 Labels per sheet - (8.5” x 11” )</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <div class="btns text-end mt-4">
                <button class="btn green"> 
                Preview
                </button>
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