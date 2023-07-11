<template>
    <div class="modal fade" ref="salesModal" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog" >
        <div class="modal-content modal-lg" >

          <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
            <div class="add-user__box">
              <div
              class="d-flex align-items-center justify-content-between popup-header"
              >
              <h4 class="mb-0">Add sales commission agent</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              </div>
              <div class="popup-form">
                <form>
                    <div class="row">
                      <div class="col-lg-6 mt-4">
                        <label for="fname">First Name: *</label>
                        <input type="text" class="form-control" id="Fname" aria-describedby="FnameHelp" placeholder="First Name"
                        v-model="sales.first_name"
                        >
                      </div>
                      <div class="col-lg-6 mt-4">
                      <label for="lname">Last Name: *</label>
                        <input
                        class="form-control"
                        id="lname"
                        type="text"
                        placeholder="Last Name"
                        v-model="sales.last_name"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 mt-4">
                        <label for="email">Email:</label>
                        <input class="form-control" id="email" type="text" placeholder="Email"
                         v-model="sales.email"
                        />
                      </div>
                      <div class="col-lg-6 mt-4">
                        <label for="contact">Contact No:</label>
                        <input class="form-control" id="contact" type="text" placeholder="Contact No"
                         v-model="sales.phone"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 mt-4">
                        <label for="address">Address:</label>
                        <textarea class="form-control" name="address" id="address" rows="4" placeholder="Address"
                         v-model="sales.address"></textarea>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 mt-4">
                      <label for="sales">Sales Commission Percentage (%):</label>
                      <input
                      class="form-control"
                      id="sales"
                      type="text"
                      placeholder="Sales Commission Percentage (%)"
                      v-model="sales.commission_percentage"
                      />
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center">
                        <router-link :to="{name:'sales'}"><span class="popup-close-btn" id="popup-close" data-bs-dismiss="modal">Close</span></router-link>
                        <button class="popup-save-btn" @click="saveSale">Save</button>
                      </div>
                    </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import axios from "axios";

export default {
  data() {
    return {
      sales:{
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        address: null,
        commission_percentage: null,
      }
    };
  },
  mounted(){
    if(this.$route.name==='salesModal'){
      const modalElement = this.$refs.salesModal;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
      }
  },
  methods:{
    resetModal() {
      const modalElement = this.$refs.salesModal;
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
  },
    saveSale(e) {
      e.preventDefault();
      const apiUrl = 'http://127.0.0.1:8000/api/user-manage/sale-commission-agents';

      axios.post(apiUrl, this.sales)
          .then(response => {
            console.log("Sales created successfully:", response);
            console.log('this.sales', this.sales)
            this.$router.push({
              name: 'sales'
            })
            // this.resetForm();
          })
          .catch(error => {
            console.error("Error creating sales:", error);
          });
    },
  }
};
</script>
