<template>
    <div class="modal fade" ref="customaermodal" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog" >
        <div class="modal-content modal-lg" >

          <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
            <div class="add-user__box">
              <div
              class="d-flex align-items-center justify-content-between popup-header"
              >
              <h4 class="mb-0">Add New Customer</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              </div>
              <div class="popup-form">

                <form class="needs-validation" novalidate @submit.prevent="submited">
                    <div class="row">
                      <div class="col-lg-6 mt-4">
                        <label for="fname">Contact type: * </label>
                        <input type="text" class="form-control" id="validationFname" aria-describedby="FnameHelp" placeholder="Customers" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-6 mt-4">
                      <label for="lname">Name: *</label>
                        <input class="form-control" id="name" type="text" placeholder="Name" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 mt-4">
                        <label for="email">Customer Type:</label>
                        <input class="form-control" id="business" type="text" placeholder="Business Name" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-6 mt-4">
                        <label for="contact">Contact ID:</label>
                        <input class="form-control" id="contact" type="number" placeholder="Contact ID" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mt-4">
                          <label for="contact">Customer Group:</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>General</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="col-lg-6 mt-4">
                          <label for="contact">Tax Number</label>
                          <input class="form-control" id="tax" type="text" placeholder="Tax Number"/>
                        </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 mt-4">
                        <label for="email">Opening Balance:</label>
                        <input class="form-control" id="balance" type="number" placeholder="$0" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-6 mt-4">
                        <label for="contact" style="vertical-align: middle;">Pay Term: <img src="../../../../assets/img/pay.svg" alt="logo"></label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Pay term | Please Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-lg-6 mt-4">
                        <label for="email">Credit Limit:</label>
                        <input class="form-control" id="balance" type="number" placeholder="0" required/>
                        <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-6 mt-4">
                        <label for="contact" style="vertical-align: middle;">Selling Price Group:<img src="../../../../assets/img/pay.svg" alt="logo"></label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Default Selling Price</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Email:</label>
                          <input
                          class="form-control"
                          id="email"
                          type="email"
                          placeholder="Email"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Mobile:*</label>
                          <input
                          class="form-control"
                          id="mobile"
                          type="number"
                          placeholder="Mobile"
                          required
                          />
                          <div class="invalid-feedback">
                           This field is required
                          </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Alternate Number:</label>
                          <input
                          class="form-control"
                          id="number"
                          type="number"
                          placeholder="Alternate Number"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Landline:</label>
                          <input
                          class="form-control"
                          id="landline"
                          type="text"
                          placeholder="General"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 mt-4">
                            <label for="sales">City:</label>
                            <input
                            class="form-control"
                            id="city"
                            type="text"
                            placeholder="City"
                            required
                            />
                            <div class="invalid-feedback">
                            This field is required
                            </div>
                        </div>
                        <div class="col-lg-3 mt-4">
                            <label for="sales">State:</label>
                            <input
                            class="form-control"
                            id="State"
                            type="text"
                            placeholder="State"
                            required
                            />
                            <div class="invalid-feedback">
                                 This field is required
                            </div>
                        </div>
                        <div class="col-lg-3 mt-4">
                            <label for="sales">Country:</label>
                            <input
                            class="form-control"
                            id="country"
                            type="text"
                            placeholder="Country"
                            required
                            />
                            <div class="invalid-feedback">
                            This field is required
                            </div>
                        </div>
                        <div class="col-lg-3 mt-4">
                            <label for="sales">Lankmark:</label>
                            <input
                            class="form-control"
                            id="landmark"
                            type="text"
                            placeholder="landmark"
                            required
                            />
                            <div class="invalid-feedback">
                            This field is required
                            </div>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-3 mt-4">
                        <p>Reference Section:</p>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Reference Name:</label>
                          <input
                          class="form-control"
                          id="name"
                          type="text"
                          placeholder="Reference Name"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Reference Number:</label>
                          <input
                          class="form-control"
                          id="number"
                          type="number"
                          placeholder="Reference Number"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Reference Address:</label>
                          <input
                          class="form-control"
                          id="address"
                          type="text"
                          placeholder="Reference Address"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Custom Field 1:</label>
                          <input
                          class="form-control"
                          id="custom"
                          type="text"
                          placeholder="Custom Field 1"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Custom Field 2:</label>
                          <input
                          class="form-control"
                          id="custom"
                          type="text"
                          placeholder="Custom Field 2"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Custom Field 3:</label>
                          <input
                          class="form-control"
                          id="custom"
                          type="text"
                          placeholder="Custom Field 3"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4">
                          <label for="sales">Custom Field 4:</label>
                          <input
                          class="form-control"
                          id="custom"
                          type="text"
                          placeholder="Custom Field 4"
                          required
                          />
                          <div class="invalid-feedback">
                          This field is required
                        </div>
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-end pro-form-btn"
                      >
                      <div class="d-flex gap-3 align-items-center">
                        <router-link :to="{name:'customers'}" @click="popup">
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
    if(this.$route.name==='new-customers'){
      const modalElement = this.$refs.customaermodal;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
      }

  },
  
  methods:{
    resetModal() {
      const modalElement = this.$refs.customaermodal;
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
  },
  }
};
</script>


