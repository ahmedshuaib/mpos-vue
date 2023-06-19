<template>
    <div class="modal fade" ref="addgroups" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog" >
        <div class="modal-content modal-lg" >

          <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
            <div class="add-user__box">
              <div
              class="d-flex align-items-center justify-content-between popup-header"
              >
              <h4 class="mb-0">Add Selling Price Group</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              </div>
              <div class="popup-form">

                <form class="needs-validation" novalidate @submit.prevent="submited">
                    <div class="row">
                      <div class="col-lg-12 mt-4">
                        <label for="fname">Brand Name: * </label>
                        <input type="text" class="form-control" id="customergroup" aria-describedby="customergroup" placeholder="Customer Group Name" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>

                      <div class="col-lg-12 mt-4">
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Description:</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description"></textarea>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center btns">
                        <router-link :to="{name:'sell-group'}" @click="popup">
                            <span class="popup-close-btn" id="popup-close">Close</span>
                        </router-link>
                        <button class="popup-save-btn green">Save</button>
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
    if(this.$route.name==='add-selling'){
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
