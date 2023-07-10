<template>
  <div class="modal fade" ref="editModal" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel">
    <div class="modal-dialog">
      <div class="modal-content modal-lg">
        <div class="d-flex align-items-center justify-content-center">
          <div class="add-user__box">
            <div class="d-flex align-items-center justify-content-between popup-header">
              <h4 class="mb-0">Edit User</h4>
              <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
              <router-link :to="{ name: 'user' }">
                <span class="popup-close-btn" id="popup-close" @click="popup">Close</span>
              </router-link>
            </div>
            <div class="popup-form">
              <form @submit.prevent="handleSubmit">
                <div class="row">
                  <div class="col-lg-6 mt-4">
                    <label for="first_name">First Name: *</label>
                    <input class="form-control" id="first_name" type="text" placeholder="First Name" v-model="user.first_name" />
                  </div>
                  <div class="col-lg-6 mt-4">
                    <label for="last_name">Last Name: *</label>
                    <input class="form-control" id="last_name" type="text" placeholder="Last Name" v-model="user.last_name" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-6 mt-4">
                    <label for="email">Email:</label>
                    <input class="form-control" id="email" type="text" placeholder="Email" v-model="user.email" />
                  </div>
                  <div class="col-lg-6 mt-4">
                    <label for="role">Role:</label>
                    <select class="form-control" id="role" v-model="user.role">
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
                    <input class="form-control" id="user" type="text" placeholder="User Name" v-model="user.username" />
                  </div>
                  <div class="col-lg-6 mt-4">
                    <label for="salary">Salary:</label>
                    <input class="form-control" id="salary" type="text" placeholder="Salary" v-model="user.salary" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-6 mt-4">
                    <label for="password">Password:</label>
                    <input class="form-control" id="password" type="password" placeholder="Password" v-model="user.password" />
                  </div>

                  <div class="col-lg-6 mt-4">
                    <label for="sales">Sales Commission Percentage (%):</label>
                    <input class="form-control" id="sales" type="text" placeholder="Sales Commission Percentage (%)" v-model="user.salesCommission" />
                  </div>
                </div>

                <div class="d-flex align-items-center justify-content-end pro-form-btn">
                  <div class="d-flex gap-3 align-items-center">
                    <router-link :to="{ name: 'user' }">
                      <span class="popup-close-btn" id="popup-close" @click="popup">Close</span>
                    </router-link>
                    <button class="popup-save-btn" type="submit" @click="updateUser">Save</button>
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
import { Modal } from 'bootstrap';
import axios from 'axios';

export default {
  props: ['userId'],
  data() {
    return {
      user: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        role: null,
        username: null,
        salary: null,
        salesCommission: null,
      },
    };
  },

  mounted() {
    if (this.$route.name === 'edit') {
      const modalElement = this.$refs.editModal;
      const modal = new Modal(modalElement);
      modal.show();
      this.getUser();
    }
  },

  methods: {
    async getUser() {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/user-manage/user/${this.userId}`;
        const response = await axios.get(apiUrl);
        const userData = response.data.data; // Assuming the user data is wrapped in a "data" field
        this.user = { ...userData }; // Copy the user data properties to the "user" object
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },

    async updateUser() {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/user-manage/user/${this.userId}`;
        const response = await axios.put(apiUrl, this.user);
        console.log('response', response);
        const updatedUser = response.data;
        console.log('updatedUser', updatedUser);
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    },

    resetModal() {
      const modalElement = this.$refs.editModal;
      const modal = Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      } else {
        document.body.style.overflowY = 'scroll';
      }
    },
  },
};
</script>
