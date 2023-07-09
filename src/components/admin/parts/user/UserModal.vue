<template>
    <div class="modal fade"  ref="userModdal" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog">
          <div class="modal-content modal-lg">
              <div class="d-flex align-items-center justify-content-center">
                  <div class="add-user__box">
                      <div class="d-flex align-items-center justify-content-between popup-header">
                          <h4 class="mb-0">Add User</h4>
                          <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
                        <router-link :to="{name:'user'}"><span class="popup-close-btn" data-bs-dismiss="modal" >Close</span></router-link>
                      </div>
                      <div class="popup-form">
                        <form @submit.prevent="handleSubmit" >
                            <div class="row">
                                <div class="col-lg-6 mt-4">
                                    <label for="first_name">First Name: *</label>
                                    <input class="form-control" id="first_name" type="text" placeholder="First Name" v-model="user.first_name"/>
                                </div>
                                <div class="col-lg-6 mt-4">
                                  <label for="last_name">Last Name: *</label>
                                  <input class="form-control" id="last_name" type="text" placeholder="Last Name" v-model="user.last_name"
                                  />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 mt-4">
                                  <label for="email">Email:</label>
                                    <input
                                    class="form-control"
                                    id="email"
                                    type="text"
                                    placeholder="Email"
                                    v-model="user.email"
                                    />
                                </div>
                                <div class="col-lg-6 mt-4">
                                  <label for="role">Role:</label>
                                  <select class="form-control" id="role" >
                                    <option>Select Role</option>
                                    <option>role1</option>
                                    <option>role2</option>
                                    <option>role3</option>
                                  </select>
                                </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-6 mt-4">
                              <label for="user">User Name:</label>
                              <input
                              class="form-control"
                              id="user"
                              type="text"
                              placeholder="User Name"
                              />
                              </div>
                              <div class="col-lg-6 mt-4">
                              <label for="salary">Salary:</label>
                              <input
                              class="form-control"
                              id="salary"
                              type="text"
                              placeholder="salary"
                              />
                              </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 mt-4">
                                <label for="password">Password:</label>
                                <input
                                class="form-control"
                                id="password"
                                type="text"
                                placeholder="Password"
                                v-model="user.password"
                                />
                                </div>

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

                            <div class="d-flex align-items-center justify-content-end pro-form-btn">
                                <div class="d-flex gap-3 align-items-center">
                                  <button class="popup-save-btn" type="submit" @click="createUser">Save</button>
                                  <button class="popup-clear-btn" type="submit" @click="resetForm">Clear</button>
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
        user:{
          first_name: null,
          last_name: null,
          email: null,
          password: null
        }
      }
    },

    mounted(){
      if(this.$route.name==='userModal'){
          const modalElement = this.$refs.userModdal;
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
      }
    },
    methods: {
      createUser() {
        const apiUrl = 'http://127.0.0.1:8000/api/user-manage/user';

        axios.post(apiUrl, this.user)
            .then(response => {
              // Handle the success response here
              console.log("User created successfully:", response.data);
              // Reset the form or perform any other necessary actions
              this.resetForm();
            })
            .catch(error => {
              // Handle the error response here
              console.error("Error creating user:", error.response.data);
            });
      },
      resetForm() {
        this.user.first_name = "";
        this.user.last_name = "";
        this.user.email = "";
        this.user.password = "";
      },
      onModalShown() {
        this.setBodyScroll(false);
      },
      onModalHidden() {
        this.setBodyScroll(true);
      },
      setBodyScroll(enableScroll) {
        const body = document.querySelector('body');
        body.classList.toggle('no-scroll', !enableScroll);
      },
    }
  };
</script>

<style scoped>

button.popup-clear-btn {
  padding: 14px 50px;
  background: #5f6269;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
}
</style>