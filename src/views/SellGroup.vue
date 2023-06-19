<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Selling Price Group</h4>
          <router-link :to="{name:'add-selling'}" class="add-role-link btns">
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
                  <div class="select-btn green-export" @click="selectBtn">
                      <span class="sBtn-text">Export</span>
                      <i class="uil uil-angle-down"></i>
                  </div>

                  <ul class="options">
                      <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Copy</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Export to CSV</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Export to Excel</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Export to PDF</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Print</p>
                      </li>

                      <li class="option">
                      <span class="option-circle"></span>
                      <p class="option-text mb-0">Column Visibility</p>
                      </li>
                  </ul>
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
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apple</td>
                  <td>Mac Mini Pro M1</td>
                  <td style="width: 50%">
                    <div class="d-flex align-items-center gap-2">
                        <a>
                            <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt=""> Edit
                        </button>
                        </a>
                        <button class="pro-delete-btn">
                            <img src="../assets/img/delete.svg" alt=""> Delete
                        </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Samsung</td>
                  <td>Galaxy S22 Ultra</td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                    <a>
                        <button class="pro-edit-btn">
                        <img src="../assets/img/edit.svg" alt=""> Edit
                    </button>
                    </a>
                    <button class="pro-delete-btn">
                        <img src="../assets/img/delete.svg" alt=""> Delete
                    </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>One Plus</td>
                  <td>One Plus 9R Pro</td>
                  <td style="width: 50%">
                    <div class="d-flex align-items-center gap-2">
                        <a>
                            <button class="pro-edit-btn">
                            <img src="../assets/img/edit.svg" alt=""> Edit
                        </button>
                        </a>
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