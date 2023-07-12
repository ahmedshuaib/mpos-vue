<template>
    <div class="modal fade"  ref="addgroups" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog" >
        <div class="modal-content modal-lg" >

          <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
            <div class="add-user__box">
              <div
              class="d-flex align-items-center justify-content-between popup-header"
              >
              <h4 class="mb-0">Customer Add Group</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              </div>
              <div class="popup-form">

                <form class="needs-validation" novalidate @submit.prevent="submited">
                    <div class="row">
                      <div class="col-lg-12 mt-4">
                        <label for="fname">Customer Group Name: * </label>
                        <input type="text" class="form-control" id="customergroup" aria-describedby="customergroup" placeholder="Customer Group Name" required v-model="customer.first_name"/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-12 mt-4">
                      <label for="lname">Calculation Percentage(%):</label>
                        <input class="form-control" id="number" type="number" placeholder="Calculation Percentage(%)" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center">
                        <router-link :to="{name:'customer-group'}" >
                            <span class="popup-close-btn" id="popup-close" data-bs-dismiss="modal">Close</span>
                        </router-link>
                        <button class="popup-save-btn" @click="createCustomer">Save</button>
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
  data(){
    return{
      customer:{
        user_id: 1,
        tenant_id: 1,
        shop_id: 1,
        first_name: null,
      }
    }
  },
  mounted(){
    if(this.$route.name==='add-group'){
      const modalElement = this.$refs.addgroups;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
      }

  },
  
  methods:{
    createCustomer() {
      const apiUrl = 'http://127.0.0.1:8000/api/contact-manage/customers';
      axios.post(apiUrl, this.customer)
          .then(response => {
            console.log("customer created successfully:", response.data);
          })
          this.$router.push({
            name: 'customer-group'
          })
          .catch(error => {
            // Handle the error response here
            console.error("Error creating customer:", error.response.data);
          });
    },
    resetModal() {
      const modalElement = this.$refs.addgroups;
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
  },
  }
};
</script>
