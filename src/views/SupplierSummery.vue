<template>
    <section class="pro-users__section">
      <div class="section__container">
        <div  
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2 btns"
        >
          <h4 class="mb-0">Supplier Wise Stock Summery</h4>
          <a>
            <button class="btn green" id="user-add-btn" @click="openModal">
                  <span class="me-1">+</span>Add
            </button>
          </a>
        </div>

        <div class="col-lg-12 mt-5 mb-4">
            <div class="row">
                <div class="col-lg-3 ">
                    <label for="supplier">Supplier:</label>
                    <select class="form-select" aria-label="Default select example" id="supplier">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>


                <div class="col-lg-3 mt-4 btns d-flex align-items-center gap-3">
                    <button class="btn  m-0 green"><img src="../assets/img/print.svg" alt="print"></button>
                    <button class="btn  m-0 green"><img src="../assets/img/Download.svg" alt="print"></button>
                </div>
            </div>
        </div>
      </div>
    </section>


    
    <section class="pro-table__section">
      <div class="section__container">
        <div class="table__wrapper">
          <div class="table-scrollable">
            <table ref="table6" width="100%">
              <thead>
                <tr>
                  <th style="border-top-left-radius: 10px">Supplier Name</th>
                  <th>Received</th>
                  <th>Stock Return</th>
                  <th>Sold</th>
                  <th>Exchange/void</th>
                  <th>Balance</th>
                </tr>
              </thead>

            </table>
          </div>
        </div>
      </div>
    </section>

    <router-view></router-view>
</template>

<script>
export default{
}
</script>

<style>

</style>