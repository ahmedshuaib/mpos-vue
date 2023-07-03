<template>
    <section class="pro-users__section">
        <div class="section__container">
            <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
                <h4 class="mb-0">Import Contact</h4>
            </div>
            <div class="col-lg-12 product-image p-4">
                <div class="import-image">
                    <div class="drag-area" @dragover="handle">
                        <img src="../../../assets/img/importimage.svg" alt="" style="width:70px">
                        <span>Drop your image here or <span class="browse">Browse</span></span>
                        <span>(Only*.peg and *.png images will be accepted)</span>
                    </div>
                </div>
            </div>
            <div class="download-btn mt-3">
                <button class="btn">
                    <img src="../../../assets/img/Download.svg" alt=""> Download CSV file template
                </button>
            </div>
            <div class="instruction mt-4">
                <span>
                    Instruction
                </span>
                <h4>Follow the instructions carefully before importing the file.</h4>
                <span>
                    The Columns of the CSV file should be in the following order.
                </span>
            </div>
        </div>
  </section>

  <section class="pro-table__section mt-5">
        <div class="section__container">
            <div class="table__wrapper">
                <div class="table-scrollable">
                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Columan Number</th>
                                <th>Column Name</th>
                                <th>Instruction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Contact type (required)</td>
                                <td>Available options: customer, supplier & both</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Name (required)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Business Name (Optional)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Contact ID (Optional)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Tex Number (Optional)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Opening Balance (Optional)</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
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