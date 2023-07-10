<template>
    <!-- start design here... -->
    <section class="pro-users__section">
        <div class="section__container">
            <div
                class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
            >
                <h4 class="mb-0">User</h4>
                <router-link :to="{ name: 'userModal' }">
                    <button class="user-add-btn" id="user-add-btn">
                        <span class="me-1">+</span>Add
                    </button>
                </router-link>
            </div>
        </div>
    </section>

    <section class="pro-search__section">
        <div class="section__container">
            <div class="pro__search">
                <div class="pro-select-box">
                    <!-- dropdown menu -->
                    <keep-alive>
                        <div class="dropdown-btn">
                          <div class="select d-flex alig-items-center gap-4">
                              <span class="selected">Export</span>
                              <img src="../../../assets/img/drop.svg" alt="">
                          </div>
                        </div>
                    </keep-alive>
                </div>
            </div>
        </div>
    </section>

    <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <table ref="table4" style="width: 100%">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in userList" :key="user.id">
                            <td>{{ user.first_name }}</td>
                            <td>{{ user.last_name }}</td>
                            <td>
                              <ul>
                                <li v-for="(role, index) in user.roles" :key="role.id">
                                  {{ role.name }}
                                  <span v-if="index < user.roles.length - 1">, </span>
                                </li>
                              </ul>
                            </td>
                            <td>{{ user.email }}</td>
                            <td>$1000</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                <router-link :to="{name:'edit',params:{userId: user.id}}">
                                    <button class="pro-edit-btn">
                                    <img src="../../../assets/img/edit.svg" alt=""> Edit
                                </button>
                                </router-link>
                                <button class="pro-delete-btn" @click="confirmDelete(user.id)">
                                    <img src="../../../assets/img/delete.svg" alt=""> Delete
                                </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <router-view name="userModal"></router-view>
    <router-view name="edited"></router-view>
</template>

<script>
import axios from "axios";

export default {
    name: "User",
  data() {
      return {
        userList: [],
      };
  },
  created() {
    this.getAllUsers();
  },
  methods: {
      getAllUsers() {
        const apiUrl = 'http://127.0.0.1:8000/api/user-manage/users'

        axios.get(apiUrl)
            .then(response => {
              this.userList = response.data.data
            })
            .catch(error =>{
              console.log('Error fetching user data', error)
            })
      },
    confirmDelete(userId) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.deleteUser(userId);
      }
    },
    deleteUser(userId) {
      const apiUrl = `http://127.0.0.1:8000/api/user-manage/user/${userId}`;
      axios
          .delete(apiUrl)
          .then((response) => {
            console.log("User deleted successfully");
            // Remove the deleted user from the user list
            this.userList = this.userList.filter((user) => user.id !== userId);
          })
          .catch((error) => {
            console.log("Error deleting user", error);
          });
    },
  }
};
</script>

<style scoped>

button#user-add-btn {
  cursor: pointer;
  line-height: 20px;
  padding: 12px 12px;
  border: 1px solid var(--gray-text-background, #E1E5E6);
  background: var(--primary-1, #229269);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
}
</style>
