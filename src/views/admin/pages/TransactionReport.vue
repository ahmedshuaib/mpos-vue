<template>
    <section class="pro-users__section">
      <div class="section__container">
        <div  
          class="d-flex align-items-strech justify-content-between heading-box flex-wrap gap-2 btns"
        >
          <h4 class="mb-0">Location Wise Transaction Reports</h4>
          <a>
            
            <button class="btn green" id="user-add-btn" @click="openModal">
                  <span class="me-1">+</span>Add
            </button>
            
          </a>
        </div>


        <div class="col-lg-12 mb-4 mt-4">
            <div class="row  justify-content-end">
                <div class="col-lg-3 mt-4">
                    <div class="mb-3">
                        <label for="date" class="form-label m-0">Date From:</label>
                        <input type="text" class="form-control" id="date" placeholder="Date From">
                    </div>
                </div>
                <div class="col-lg-3 mt-4">
                    <div class="mb-3">
                        <label for="date" class="form-label m-0">Date To:</label>
                        <input type="text" class="form-control" id="date" placeholder="Date To">
                    </div>
                </div>
                <div class="col-lg-2 mt-4 btns d-flex align-items-center gap-3">
                    <button class="btn  m-0 green"><img src="../../../assets/img/print.svg" alt="print"></button>
                    <button class="btn  m-0 green"><img src="../../../assets/img/Download.svg" alt="print"></button>
                </div>
            </div>
        </div>
      </div>
    </section>


    <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
              <table ref="table6" width="100%">
                  <thead>
                    <tr>
                      <th style="border-top-left-radius: 10px">Location Name</th>
                      <th>Total sell</th>
                      <th>Total sell Paid</th>
                      <th>Total Purchase</th>
                      <th>Total Purchase Paid</th>
                      <th>Total Purchase Due</th>
                      <th>Total Transfer Product</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr>
                            <td>Orginal Gadget</td>
                            <td>$1200</td>
                            <td>$1200</td>
                            <td>0.00</td>
                            <td>$1300</td>
                            <td>$1310</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Orginal Gadget</td>
                            <td>$1200</td>
                            <td>$1200</td>
                            <td>0.00</td>
                            <td>$1300</td>
                            <td>$1310</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Orginal Gadget</td>
                            <td>$1200</td>
                            <td>$1200</td>
                            <td>0.00</td>
                            <td>$1300</td>
                            <td>$1310</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Orginal Gadget</td>
                            <td>$1200</td>
                            <td>$1200</td>
                            <td>0.00</td>
                            <td>$1300</td>
                            <td>$1310</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Orginal Gadget</td>
                            <td>$1200</td>
                            <td>$1200</td>
                            <td>0.00</td>
                            <td>$1300</td>
                            <td>$1310</td>
                            <td>0.00</td>
                        </tr>
                      <!-- calc row -->
                        <tr>
                            <td
                            style="
                                background-color: #e1e5e6 !important;
                                border-right: 1px solid #fff !important;
                                border-bottom-left-radius: 10px;
                            "
                          class="total_stock_amount" colspan="5" >
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


                        </tr>
                  </tbody>
              </table>
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