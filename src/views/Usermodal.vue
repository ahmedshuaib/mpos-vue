<template>
    <div class="modal fade" ref="userModdal" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog">
          <div class="modal-content modal-lg">
              <div class="d-flex align-items-center justify-content-center">
                  <div class="add-user__box">
                      <div class="d-flex align-items-center justify-content-between popup-header">
                          <h4 class="mb-0">Add User</h4>
                          <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
                      </div>
                      <div class="popup-form">
                        <form @submit.prevent="handleSubmit" >
                            <div class="row">
                                <div class="col-lg-6 mt-2">
                                    <label for="fname">First Name: *</label>
                                    <input class="form-control" id="fname" type="text" placeholder="First Name" />
                                </div>
                                <div class="col-lg-6 mt-2">
                                  <label for="lname">Last Name: *</label>
                                  <input class="form-control" id="lname" type="text" placeholder="Last Name"
                                  />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 mt-2">
                                  <label for="email">Email:</label>
                                    <input
                                    class="form-control"
                                    id="email"
                                    type="text"
                                    placeholder="Email"
                                    />
                                </div>
                                <div class="col-lg-6 mt-2">
                                  <label for="role">Role:</label>
                                  <input class="form-control" id="role" type="text" placeholder="Role"/>
                                </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-6 mt-2">
                              <label for="user">User Name:</label>
                              <input
                              class="form-control"
                              id="user"
                              type="text"
                              placeholder="@username"
                              />
                              </div>
                              <div class="col-lg-6 mt-2">
                              <label for="salary">Salary:</label>
                              <input
                              class="form-control"
                              id="salary"
                              type="text"
                              placeholder="Role"
                              />
                              </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 mt-2">
                                <label for="password">Password:</label>
                                <input
                                class="form-control"
                                id="password"
                                type="text"
                                placeholder="Password"
                                />
                                </div>
                                <div class="col-lg-6 mt-2">
                                  <label for="cpassword">Confirm Password:</label>
                                    <input
                                    class="form-control"
                                    id="cpassword"
                                    type="text"
                                    placeholder="Password"
                                    />
                                </div>

                              <div class="col-lg-6 mt-2">
                                  <label for="sales">Sales Commission Percentage (%):</label>
                                  <input
                                  class="form-control"
                                  id="sales"
                                  type="text"
                                  placeholder="Sales Commission Percentage (%)"
                                  />
                                </div>
                            </div>

                            <div class="d-flex align-items-center justify-content-end pro-form-btn">
                                <div class="d-flex gap-3 align-items-center">
                                  <router-link :to="{name:'user'}"><span class="popup-close-btn" id="popup-close">Close</span></router-link>  
                                  <button class="popup-save-btn" type="submit">Save</button>
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
      if(this.$route.name==='usermodal'){
          const modalElement = this.$refs.userModdal;
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
      }
    },
    methods: {
      resetModal() {
        const modalElement = this.$refs.userModdal;
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
    },
    },
  };
</script>
