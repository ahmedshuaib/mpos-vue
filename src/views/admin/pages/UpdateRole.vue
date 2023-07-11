<template>
      <!-- start design here... -->
      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box"
          >
            <h4 class="mb-0">Update Role</h4>
          </div>
        </div>
      </section>

      <section class="add-role__section">
        <div class="section__container">
          <form>
            <div class="role-box">
              <div class="role-box-input">
                <label for="roleName">Role Name:*</label>
                <input
                  class="form-control mt-2"
                  type="text"
                  name="role"
                  placeholder="Role Name" v-model="role.name"
                />
              </div>
              <h6 class="mt-4">Permission</h6>
              <div class="permission-box">
                <div class="permission__item">
                  <div class="left">
                    <p class="mb-0">User</p>
                  </div>
                  <div class="middle">
                    <input type="checkbox" id="select-users" />
                    <label for="select-users">Select All</label>
                  </div>
                  <div class="right">
                    <input type="checkbox" id="view-user" />
                    <label for="view-user">View User</label><br />

                    <input class="mt-3" type="checkbox" id="add-user" />
                    <label for="add-user">Add User</label><br />

                    <input class="mt-3" type="checkbox" id="edit-user" />
                    <label for="edit-user">Edit User</label><br />

                    <input class="mt-3" type="checkbox" id="delete-user" />
                    <label for="delete-user">Delete User</label>
                  </div>
                </div>

                <div class="permission__item">
                  <div class="left">
                    <p class="mb-0">Role</p>
                  </div>
                  <div class="middle">
                    <input type="checkbox" id="select-roles" />
                    <label for="select-roles">Select All</label>
                  </div>
                  <div class="right">
                    <input type="checkbox" id="role-view-user" />
                    <label for="role-view-user">View User</label><br />

                    <input class="mt-3" type="checkbox" id="role-add-user" />
                    <label for="role-add-user">Add User</label><br />

                    <input class="mt-3" type="checkbox" id="role-edit-user" />
                    <label for="role-edit-user">Edit User</label><br />

                    <input class="mt-3" type="checkbox" id="role-delete-user" />
                    <label for="role-delete-user">Delete User</label>
                  </div>
                </div>

                <div class="permission__item">
                  <div class="left">
                    <p class="mb-0">Customer</p>
                  </div>
                  <div class="middle">
                    <input type="checkbox" id="select-customers" />
                    <label for="select-customers">Select All</label>
                  </div>
                  <div class="right">
                    <input type="checkbox" id="customer-view-user" />
                    <label for="customer-view-user">View User</label><br />

                    <input
                      class="mt-3"
                      type="checkbox"
                      id="customer-add-user"
                    />
                    <label for="customer-add-user">Add User</label><br />

                    <input
                      class="mt-3"
                      type="checkbox"
                      id="customer-edit-user"
                    />
                    <label for="customer-edit-user">Edit User</label><br />

                    <input
                      class="mt-3"
                      type="checkbox"
                      id="customer-delete-user"
                    />
                    <label for="customer-delete-user">Delete User</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button class="permission-save-btn" type="submit" @click="updateRole">Save</button>
              <button class="permission-clear-btn" type="submit" @click="">Clear</button>

            </div>
          </form>
        </div>
      </section>
</template>

<script>
import axios from "axios";

export default {
  name:'updateRole',
  props: ['roleId'],
  data() {
    return {
      role:{
        name: null,
      }
    };
  },
  methods: {

    async getRole() {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/user-manage/roles/${this.roleId}`;
        const response = await axios.get(apiUrl);
        const roleData = response.data.role; // Assuming the role data is wrapped in a "data" field
        this.role = { ...roleData };
        console.log('role',roleData)// Copy the user data properties to the "user" object
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },

    async updateRole(e) {
      e.preventDefault()
      try {
        const apiUrl = `http://127.0.0.1:8000/api/user-manage/roles/${this.roleId}`;
        const response = await axios.put(apiUrl, this.role);
        console.log('response', response);
        const updateRole = response.data.role;
        console.log('updatedUser', updateRole);
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    },

  },
  mounted() {
    this.getRole(); // Call the getRole method when the component is mounted
  },
}
</script>

<style>
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

.permission-clear-btn {
  border: none;
  outline: none;
  padding: 5px 12px;
  background: #595e69;
  border-radius: 6px;
  color: var(--light-color);
  margin-top: 30px;
}
</style>