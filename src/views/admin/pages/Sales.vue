<template>
      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
          >
            <h4 class="mb-0">Sales Commission Agents</h4>

            <router-link :to="{name:'salesModal'}">
              <button class="user-add-btn" id="add-sale-link" @click="openModal">
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
                      <!-- <div class="dropdown-btn">
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
                        </div>  -->
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
                      <tr v-for="sale in sales" :key="sale.id">
                        <td>{{ sale.first_name }} {{ sale.last_name }}</td>
                        <td>{{ sale.email }}</td>
                        <td>{{ sale.phone }}</td>
                        <td>{{ sale.address }}</td>
                        <td>{{ sale.commission_percentage }}%</td>
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
import axios from "axios";

export default{
  data() {
    return{
      sales: [],
    }
  },
  methods:{
    async fetchSales() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user-manage/sale-commission-agents');
        this.sales = response.data.sale_commission_agents;
      } catch (error) {
        console.error('Failed to fetch roles:', error);
      }
    },
  },
  mounted() {
    this.fetchSales();
  },
}
</script>

<style scoped>

button#add-sale-link {
  cursor: pointer;
  line-height: 20px;
  padding: 12px 12px;
  border: 1px solid var(--gray-text-background, #E1E5E6);
  background: var(--primary-1, #229269);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
}
</style>