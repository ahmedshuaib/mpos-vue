<template>
    <div class="modal fade"  ref="addgroups" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog" >
        <div class="modal-content modal-lg" >

          <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
            <div class="add-user__box">
              <div
              class="d-flex align-items-center justify-content-between popup-header"
              >
              <h4 class="mb-0">Add Bank User</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              </div>
              <div class="popup-form">

                <form class="needs-validation" novalidate @submit.prevent="submited">
                    <div class="row">
                      <div class="col-lg-12 mt-4">
                        <label for="Bank">Bank Name: * </label>
                        <input type="text" class="form-control" id="Bank" aria-describedby="Bank" placeholder="Name" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>

                      <div class="col-lg-12 mt-4">
                        <label for="Branch">Branch:* </label>
                        <input type="text" class="form-control" id="Branch" aria-describedby="Branch" placeholder="Branch" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>

                      <div class="col-lg-12 mt-4">
                        <label for="Bank">Bank Account NO: * </label>
                        <input type="number" class="form-control" id="Bank" aria-describedby="customergroup" placeholder="Account_no" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center">
                        <router-link :to="{name:'variations'}" data-bs-dismiss="modal">
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
    if(this.$route.name==='addbank-user'){
      const modalElement = this.$refs.addgroups;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
      }

  },
  
  methods:{
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
