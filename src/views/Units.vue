<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Units</h4>
          <router-link :to="{name:'add-unit'}" class="add-role-link btns">
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
          </div>
    </section>



    <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <table ref="table5" style="width:100%">
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Allow decimal</th>
                    <th>Parent Unit</th>
                    <th>? Child = 1 parent</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01711</td>
                  <td>Kamrul Islam</td>
                  <td>@kamrul</td>
                  <td>No</td>
                  <td>No Parent Unit</td>
                  <td>No Parent Unit</td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="{name:'EditUnit',params:{id:5}}">
                            <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt=""> Edit
                        </button>
                      </router-link>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt=""> Delete
                        </button>
                    </div>
                  </td>
                </tr> 
                <tr>
                  <td>01711</td>
                  <td>Kamrul Islam</td>
                  <td>@kamrul</td>
                  <td>No</td>
                  <td>No Parent Unit</td>
                  <td>No Parent Unit</td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="{name:'EditUnit',params:{id:5}}">
                            <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt=""> Edit
                        </button>
                      </router-link>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt=""> Delete
                        </button>
                    </div>
                  </td>
                </tr> 
                <tr>
                  <td>01711</td>
                  <td>Kamrul Islam</td>
                  <td>@kamrul</td>
                  <td>No</td>
                  <td>No Parent Unit</td>
                  <td>No Parent Unit</td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="{name:'EditUnit',params:{id:5}}">
                            <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt=""> Edit
                        </button>
                      </router-link>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt=""> Delete
                        </button>
                    </div>
                  </td>
                </tr> 
                <tr>
                  <td>01711</td>
                  <td>Kamrul Islam</td>
                  <td>@kamrul</td>
                  <td>No</td>
                  <td>No Parent Unit</td>
                  <td>No Parent Unit</td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="{name:'EditUnit',params:{id:5}}">
                            <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt=""> Edit
                        </button>
                      </router-link>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt=""> Delete
                        </button>
                    </div>
                  </td>
                </tr> 
                <tr>
                  <td>01711</td>
                  <td>Kamrul Islam</td>
                  <td>@kamrul</td>
                  <td>No</td>
                  <td>No Parent Unit</td>
                  <td>No Parent Unit</td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="{name:'EditUnit',params:{id:5}}">
                            <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt=""> Edit
                        </button>
                      </router-link>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt=""> Delete
                        </button>
                    </div>
                  </td>
                </tr> 
              </tbody>
            </table>
            </div>
        </div>
    </section>
    <router-view name="AddUnit"></router-view>
    <router-view name="EditUnit"></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>