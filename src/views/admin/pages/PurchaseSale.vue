<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Purchase & Sale Report</h4>
          <a class="add-role-link">
            <span class="user-add-btn"><span class="me-1">+</span>Add</span>
          </a>
        </div>
        <div class="pro__search">
            <div class="pro-select-box d-flex align-items-strech gap-5">
                  <!-- dropdown menu -->
                <div class="col-lg-3">
                    <div class="input-group mb-3 location-search">
                        <span class="input-group-text rounded-0" id="basic-addon1"><img src="../../../assets/img/Location.svg" alt=""></span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
                  <!-- select menu -->
                  <div class="dropdown-btn" >
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
        </div>
        <div class="col-lg-12 mt-4">
            <div class="row m-0">
                <div class="col-lg-6 ">
                    <section class="pro-table__section">
                        <div class="table__wrapper">
                            <div class="table-scrollable">
                                <table style="width:100%" class="table table-striped rounded">
                                    <tbody>
                                        <tr>
                                            <td>Purchase</td>
                                        </tr>
                                        <tr>
                                            <td>Total Purchase</td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Parchase including Tax:</td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Total Purchase Return including Tax:</td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Purchase Due: </td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Opening Stock:: </td>
                                            <td>$1200.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div> 
                <div class="col-lg-6 ">
                    <section class="pro-table__section">
                        <div class="table__wrapper">
                            <div class="table-scrollable">
                                <table style="width:100%" class="table table-striped rounded">
                                    <tbody>
                                        <tr>
                                            <td>Sale</td>
                                        </tr>
                                        <tr>
                                            <td>Total Sale:</td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Sale Including Tax:</td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Total Sell Return Including Tax:</td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Sale Due::</td>
                                            <td>$1200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Opening Stock:</td>
                                            <td>$1200.00</td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </section>
                </div> 
            </div>
        </div>
            <div class="prodied">
                <div class="col-lg-12 product-image ">
                <span class="span">
                    Net Profied
                </span>
            </div>
            <div class="btns mt-4 text-end">
                <button class="btn green"><img src="../../../assets/img/print.svg" alt="">Print</button>
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