<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
            <h4 class="mb-0">Business Locations</h4>
            <a class="add-role-link btns">
                <button class="btn green"><span class="me-1">+</span>Add</button>
            </a>
        </div>
      </div>
    </section>


    <section class="stock__section mt-5">
      <div class="section__container">
          <div class="card border-0 bg-white p-4">
            <table ref="table5" style="width:100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location ID</th>
                  <th>Landmark</th>
                  <th>City</th>
                  <th>Zip Code</th>
                  <th>Country</th>
                  <th>Invoice Scheme</th>
                  <th>Layout</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Original G.</td>
                      <td>BL0001</td>
                      <td>New Market</td>
                      <td>Sylhet</td>
                      <td>1215</td>
                      <td>Bangladesh</td>
                      <td>Alam</td>
                      <td>Alam</td>
                      <td>
                          <div class="d-flex align-items-center gap-2">
                          <a>
                              <button class="pro-edit-btn">
                              <img src="../assets/img/edit.svg" alt=""> Edit
                          </button>
                          </a>
                          <button class="pro-add-btn">
                              <img src="../assets/img/greensetting.svg" alt=""> Edit
                          </button>
                          </div>
                        </td>
                  </tr>
                  <tr>
                      <td>Original G.</td>
                      <td>BL0001</td>
                      <td>New Market</td>
                      <td>Sylhet</td>
                      <td>1215</td>
                      <td>Bangladesh</td>
                      <td>Alam</td>
                      <td>Alam</td>
                      <td>
                          <div class="d-flex align-items-center gap-2">
                          <a>
                              <button class="pro-edit-btn">
                              <img src="../assets/img/edit.svg" alt=""> Edit
                          </button>
                          </a>
                          <button class="pro-add-btn">
                              <img src="../assets/img/greensetting.svg" alt=""> Edit
                          </button>
                          </div>
                        </td>
                  </tr>
                  <tr>
                      <td>Original G.</td>
                      <td>BL0001</td>
                      <td>New Market</td>
                      <td>Sylhet</td>
                      <td>1215</td>
                      <td>Bangladesh</td>
                      <td>Alam</td>
                      <td>Alam</td>
                      <td>
                          <div class="d-flex align-items-center gap-2">
                          <a>
                              <button class="pro-edit-btn">
                              <img src="../assets/img/edit.svg" alt=""> Edit
                          </button>
                          </a>
                          <button class="pro-add-btn">
                              <img src="../assets/img/greensetting.svg" alt=""> Edit
                          </button>
                          </div>
                        </td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </section>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>