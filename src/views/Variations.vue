<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Variations</h4>
          <router-link :to="{name:'add-variation'}" class="add-role-link btns">
            <button class="btn green"><span class="me-1">+</span>Add</button>
          </router-link>
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
                  <div class="select-menu">
                    <div class="dropdown-btn">
                        <div class="select d-flex alig-items-center gap-4">
                            <span class="selected">Export</span>
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
          </div>
    </section>
    <section class="pro-table__section">
      <div class="section__container">
        <div class="table__wrapper">
          <div class="table-scrollable">
            
            <table ref="table5" style="width:100%">
              <thead>
                <tr>
                  <th>Variations</th>
                  <th>Values</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admin</td>
                  <td>256GB, 126GB, 512GB, 64 GB, 32GB, 16GB</td>
                  <td style="width: 50%">
                    <router-link :to="{name:'edit-variation',params:{id:3}}">
                        <button class="pro-edit-btn">
                        <img src="../assets/img/edit.svg" alt=""> Edit
                       </button>
                    </router-link>
                  </td>
                </tr>

                <tr>
                  <td>color</td>
                  <td>Graphite, Black, White, Navy Blue, Sea Bluw, Blue</td>
                  <td style="width: 50%">
                    <router-link :to="{name:'edit-variation',params:{id:3}}">
                        <button class="pro-edit-btn">
                        <img src="../assets/img/edit.svg" alt=""> Edit
                       </button>
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>256GB, 126GB, 512GB, 64 GB, 32GB, 16GB</td>
                  <td style="width: 50%">
                    <router-link :to="{name:'edit-variation',params:{id:3}}">
                        <button class="pro-edit-btn">
                        <img src="../assets/img/edit.svg" alt=""> Edit
                       </button>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <router-view name="AddVariation"></router-view>
    <router-view name="EditVariation"></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>