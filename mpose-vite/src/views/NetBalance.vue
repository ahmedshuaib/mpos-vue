<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Net Balace</h4>
        </div>
        <div class="pro__search">

            <div class="pro-select-box d-flex align-items-center gap-1">
                <div class="select-menu">
                    <div class="select-btn green-export">
                        <span class="sBtn-text">Excel Download</span>
                    </div>
                </div>

                <div class="col-lg-1">
                    <div class="btns text-end">
                      <button class="btn green m-0"><img src="../assets/img/print.svg" alt="">Print</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12 mt-5">
            <section class="pro-table__section">
                <div class="table__wrapper">
                    <div class="table-scrollable">
                        <table style="width:100%" class="table table-striped rounded" ref="table15">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Opening Stock</td>
                                    <td>$1200.00</td>
                                </tr>
                                <tr>
                                    <td>Total Purchase</td>
                                    <td>$1200.00</td>
                                </tr>
                                <tr>
                                    <td>Total Stock Adjustment</td>
                                    <td>$1200.00</td>
                                </tr>
                                <tr>
                                    <td>Opening Stock</td>
                                    <td>$1200.00</td>
                                </tr>
                                <tr>
                                    <td style="
                                        background-color: #e1e5e6 !important;
                                        border-right: 1px solid #fff !important;
                                        border-bottom-left-radius: 10px;
                                    "
                                    colspan="1"
                                    class="total_stock_amount">
                                    Total Stock Amount
                                    </td>
                                    <td
                                    class="total_stock_amount"
                                    style="
                                        background-color: #e1e5e6 !important;
                                        border-right: 1px solid #fff !important;
                                    "
                                    >
                                    $1200
                                    </td>
                                </tr>
                                <tr>
                                    <td>Opening Stock</td>
                                    <td>$1200.00</td>
                                </tr>
                                <tr>
                                    <td>Opening Stock</td>
                                    <td>$1200.00</td>
                                </tr>
                                <tr>
                                    <td style="
                                        background-color: #e1e5e6 !important;
                                        border-right: 1px solid #fff !important;
                                        border-bottom-left-radius: 10px;
                                    "
                                    colspan="1"
                                    class="total_stock_amount">
                                    Total Expense
                                    </td>
                                    <td
                                    class="total_stock_amount"
                                    style="
                                        background-color: #e1e5e6 !important;
                                        border-right: 1px solid #fff !important;
                                    "
                                    >
                                    0.00
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </section>
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