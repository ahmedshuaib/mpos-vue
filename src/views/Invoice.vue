<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Invoice Setting</h4>
          <a>
            <span class="user-add-btn"><span class="me-1">+</span>Add</span>
          </a>
        </div>
      </div>
    </section>
    <section class="pro-search__section">
          <div class="section__container">
              <div
              class="pro__search"
              >
              <div class="pro-select-box">
                  <!-- dropdown menu -->

                  <!-- select menu -->
                  <div class="dropdown-btn" >
                        <div class="select d-flex alig-items-center gap-4" >
                            <span class="selected">Business</span>
                            <img src="../assets/img/drop.svg" alt="">
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
    


    <section class="stock__section mt-5">
      <div class="section__container">
          <div class="card border-0 bg-white p-4">
            <table ref="table5" style="width:100%">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Prefix</th>
                  <th>Start from</th>
                  <th>Invoice Count</th>
                  <th>Number of digits</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Kamrul</td>
                    <td>Alam</td>
                    <td>0</td>
                    <td>12345</td>
                    <td>6</td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                        <button class="pro-add-btn">
                            <img src="../assets/img/grenplus.svg" alt="">
                            Add </button>
                        <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt="">
                            Edit </button>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt="">
                            Delete </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Kamrul</td>
                    <td>Alam</td>
                    <td>0</td>
                    <td>12345</td>
                    <td>6</td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                        <button class="pro-add-btn">
                            <img src="../assets/img/grenplus.svg" alt="">
                            Add </button>
                        <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt="">
                            Edit </button>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt="">
                            Delete </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Kamrul</td>
                    <td>Alam</td>
                    <td>0</td>
                    <td>12345</td>
                    <td>6</td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                        <button class="pro-add-btn">
                            <img src="../assets/img/grenplus.svg" alt="">
                            Add </button>
                        <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt="">
                            Edit </button>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt="">
                            Delete </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Kamrul</td>
                    <td>Alam</td>
                    <td>0</td>
                    <td>12345</td>
                    <td>6</td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                        <button class="pro-add-btn">
                            <img src="../assets/img/grenplus.svg" alt="">
                            Add </button>
                        <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt="">
                            Edit </button>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt="">
                            Delete </button>
                        </div>
                    </td>
                </tr>
              </tbody>
            </table>
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