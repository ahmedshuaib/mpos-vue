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
                        <input type="text" class="form-control" id="Fname" aria-describedby="FnameHelp">
                      </div>
                      <div class="col-lg-6 mt-4">
                      <label for="lname">Last Name: *</label>
                        <input
                        class="form-control"
                        id="lname"
                        type="text"
                        placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 mt-4">
                        <label for="email">Email:</label>
                        <input class="form-control" id="email" type="text" placeholder="Email"/>
                      </div>
                      <div class="col-lg-6 mt-4">
                        <label for="contact">Contact No:</label>
                        <input class="form-control" id="contact" type="text" placeholder="Role"/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12 mt-4">
                        <label for="address">Address:</label>
                        <textarea class="form-control" name="address" id="address" rows="4" placeholder="Address"></textarea>
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
                      />
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center">
                        <router-link :to="{name:'sales'}" data-bs-dismiss="modal">
                            <span class="popup-close-btn" id="popup-close">Close</span>
                        </router-link>
                        <button class="popup-save-btn">Save</button>
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

export default {
  mounted(){
    if(this.$route.name==='salesmodal'){
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
  }
};
</script>
