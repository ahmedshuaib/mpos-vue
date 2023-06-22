<template>
      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
          >
            <h4 class="mb-0">Sales Commission Agents</h4>

            <router-link :to="{name:'salesmodal'}">
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
                        <img src="../assets/img/drop.svg" alt="">
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

      <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <table ref="table6" width="100%">
                    <thead>
                      <tr>
                        <th style="border-top-left-radius: 10px">Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Address</th>
                        <th>Sales Commission Percentage(%)</th>
                        <th style="border-top-right-radius: 10px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                                <i class="fa-solid fa-ellipsis"></i>

                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                              <i class=" fa-solid fa-ellipsis"></i>
                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Kamrul Islam</td>
                        <td>example@gmail.com</td>
                        <td>01923872837</td>
                        <td>Chittagong</td>
                        <td>12%</td>
                        <td>
                          <div class="dots-menu">
                            <div class="dots-btn">
                                <i class=" fa-solid fa-ellipsis"></i>
                            </div>

                            <ul class="t-options">
                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Copy</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">View</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Edit</p>
                              </li>

                              <li class="t-option">
                                <span class="t-option-circle"></span>
                                <p class="t-option-text mb-0">Delete</p>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <!-- calc row -->
                      <tr>
                        <td
                          style="
                            background-color: #e1e5e6 !important;
                            border-right: 1px solid #fff !important;
                            border-bottom-left-radius: 10px;
                          "
                          colspan="3"
                        >
                          Total:
                        </td>
                        <td
                          style="
                            background-color: #e1e5e6 !important;
                            border-right: 1px solid #fff !important;
                          "
                        >
                          $23,000
                        </td>
                        <td
                          style="
                            background-color: #e1e5e6 !important;
                            border-bottom-right-radius: 10px !important;
                          "
                          colspan="2"
                        >
                          $3,000
                        </td>
                        <!-- just using for prevent jquery table error! -->
                        <td style="display: none !important"></td>
                        <td style="display: none !important"></td>
                        <td style="display: none !important"></td>
                      </tr>
                    </tbody>
                 </table>
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