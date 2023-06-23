<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Categories</h4>
          <router-link :to="{name:'add-category'}" class="add-role-link btns">
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
              <div class="col-lg-12 text-center mt-4">
                <div class="btns">
                    <button class="btn blue">Sace & Add opening Stock</button>
                    <button class="btn leaf">+ Save and Add Another</button>
                    <button class="btn green">Save</button>
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
                        <th>Categories</th>
                        <th>Category Code</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Headphone</td>
                        <td>864M</td>
                        <td style="width: 50%">
                          <div class="d-flex align-items-center gap-2">
                              <button class="pro-view-btn">
                                <img src="../assets/img/view.svg" alt="">
                                Show Sub Category</button>
                              <button class="pro-add-btn">
                                <img src="../assets/img/grenplus.svg" alt="">
                                Edit Sub Category</button>
                                <router-link :to="{name:'editcategory',params:{id:6}}">
                                  <button class="pro-edit-btn">
                                        <img src="../assets/img/edit.svg" alt="">
                                      Edit 
                                 </button>
                                </router-link>
                              <button class="pro-delete-btn">
                                <img src="../assets/img/delete.svg" alt="">
                                Delete </button>
                            </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Charger</td>
                        <td>56T</td>
                        <td style="width: 50%">
                          <div class="d-flex align-items-center gap-2">
                              <button class="pro-view-btn">
                                <img src="../assets/img/view.svg" alt="">
                                Show Sub Category</button>
                              <button class="pro-add-btn">
                                <img src="../assets/img/grenplus.svg" alt="">
                                Edit Sub Category</button>
                                <router-link :to="{name:'editcategory',params:{id:6}}">
                                  <button class="pro-edit-btn">
                                        <img src="../assets/img/edit.svg" alt="">
                                      Edit 
                                 </button>
                                </router-link>
                              <button class="pro-delete-btn">
                                <img src="../assets/img/delete.svg" alt="">
                                Delete </button>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Cable</td>
                        <td>99P</td>
                        <td style="width: 50%">
                          <div class="d-flex align-items-center gap-2">
                              <button class="pro-view-btn">
                                <img src="../assets/img/view.svg" alt="">
                                Show Sub Category</button>
                              <button class="pro-add-btn">
                                <img src="../assets/img/grenplus.svg" alt="">
                                Edit Sub Category</button>
                                <router-link :to="{name:'editcategory',params:{id:6}}">
                                  <button class="pro-edit-btn">
                                        <img src="../assets/img/edit.svg" alt="">
                                      Edit 
                                 </button>
                                </router-link>
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
    <router-view name="AddCategory"></router-view>
    <router-view name="EditCategory"></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>