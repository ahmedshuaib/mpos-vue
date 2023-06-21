<template>
    <div class="modal fade" ref="addgroups" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog" >
        <div class="modal-content modal-lg" >

          <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
            <div class="add-user__box">
              <div
              class="d-flex align-items-center justify-content-between popup-header"
              >
              <h4 class="mb-0">Add Unit</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              </div>
              <div class="popup-form">

                <form class="needs-validation" novalidate @submit.prevent="submited">
                    <div class="row">
                        <div class="col-lg-12 mt-4">
                            <label for="fname">Name: * </label>
                            <input type="text" class="form-control" id="customergroup" aria-describedby="customergroup" placeholder="Name" required/>
                            <div class="invalid-feedback">
                            This field is required
                            </div>
                        </div>
                        <div class="col-lg-12 mt-4">
                            <label for="fname">User Name: * </label>
                            <input type="text" class="form-control" id="customergroup" aria-describedby="customergroup" placeholder="User Name" required/>
                            <div class="invalid-feedback">
                            This field is required
                            </div>
                        </div>
                        <div class="col-lg-12 mt-4">
                            <label for="fname">Allow Decimal: * </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Please Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                      </div>
                      <div class="col-lg-12 mt-4">
                        <label for="fname">Parent Unit: * </label>
                        <input type="text" class="form-control" id="customergroup" aria-describedby="customergroup" placeholder="Parent Unit" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center btns">
                        <router-link :to="{name:'units'}" data-bs-dismiss="modal">
                            <span class="popup-close-btn " id="popup-close">Close</span>
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
    if(this.$route.name==='add-unit'){
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
