<template>
    <div class="modal fade" ref="addgroups" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog" >
        <div class="modal-content modal-lg" >

          <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
            <div class="add-user__box">
              <div
              class="d-flex align-items-center justify-content-between popup-header"
              >
              <h4 class="mb-0">Add Category</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              </div>
              <div class="popup-form">

                <form class="needs-validation" novalidate @submit.prevent="submited">
                    <div class="row">
                      <div class="col-lg-12 mt-4">
                        <label for="fname">Category Name: * </label>
                        <input type="text" class="form-control" id="customergroup" aria-describedby="customergroup" placeholder="Category Name" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>

                      <div class="col-lg-12 mt-4">
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Category Code:</label>
                          <input type="number" class="form-control" id="exampleFormControlTextarea1" aria-describedby="customergroup" placeholder="Category Code" required/>
                        </div>
                      </div>
                    </div>
                        <span class="span">Category Code is same as <span class="text-bold">HSN code</span></span>
                        <div class="form-check mt-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label span" for="flexCheckDefault">
                                Add as sub-category
                            </label>
                        </div>
                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center btns">
                        <router-link :to="{name:'categories'}" >
                            <span class="popup-close-btn"  id="popup-close" data-bs-dismiss="modal">Close</span>
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
    if(this.$route.name==='add-category'){
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
