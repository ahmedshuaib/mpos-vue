<template>
    <section class="pro-users__section">
      <div class="section__container">
        <div
          class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
        >
          <h4 class="mb-0">Customer Group</h4>

          <router-link :to="{name:'add-group'}">
            <button class="user-add-btn" id="user-add-btn" @click="openModal">
            <span class="me-1">+</span>Add
          </button>
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
                  <div class="select-btn" @click="selectBtn">
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

                    <table ref="table4" style="width:100%">
                        <thead>
                            <tr>
                                <th>Customer Group Name</th>
                                <th>Calcualtion Percentage(%)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Kamrul Islam</td>
                                <td>@kamrul</td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                    <button class="pro-edit-btn">
                                        <i class="uil uil-edit-alt"></i> Edit
                                    </button>
                                    <button class="pro-delete-btn">
                                        <i class="uil uil-trash-alt"></i> Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Kamrul Islam</td>
                                <td>@kamrul</td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                    <button class="pro-edit-btn">
                                        <i class="uil uil-edit-alt"></i> Edit
                                    </button>
                                    <button class="pro-delete-btn">
                                        <i class="uil uil-trash-alt"></i> Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Kamrul Islam</td>
                                <td>@kamrul</td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                    <button class="pro-edit-btn">
                                        <i class="uil uil-edit-alt"></i> Edit
                                    </button>
                                    <button class="pro-delete-btn">
                                        <i class="uil uil-trash-alt"></i> Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Kamrul Islam</td>
                                <td>@kamrul</td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                    <button class="pro-edit-btn">
                                        <i class="uil uil-edit-alt"></i> Edit
                                    </button>
                                    <button class="pro-delete-btn">
                                        <i class="uil uil-trash-alt"></i> Delete
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
export default{
}
</script>

<style>

</style>