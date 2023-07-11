<template>

      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
          >
            <h4 class="mb-0">Roles</h4>
            <router-link :to="{name:'addRole'}">
              <button class="user-add-btn" id="add-role-link">
                <span class="me-1">+</span>Add
              </button>
            </router-link>

          </div>
        </div>
      </section>

      <section class="pro-table__section">
        <div class="section__container">
          <div class="table__wrapper">
            <div class="table-scrollable">
              
              <table ref="table5" style="width:100%">
                <thead>
                  <tr>
                    <th>Roles</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="role in roles" :key="role.id">
                    <td>{{ role.name }}</td>
                    <td style="width: 50%">
                      <div class="d-flex align-items-center gap-2">
                        <button class="pro-view-btn">
                          <img src="../../../assets/img/view.svg" alt="">
                          View Role</button>
                        <button class="pro-add-btn" @click="addRole">
                          <img src="../../../assets/img/grenplus.svg" alt="">
                          Add Role</button>
                        <button class="pro-edit-btn" @click="updateRole(role.id)">
                          <img src="../../../assets/img/edit.svg" alt="">
                          Edit Role</button>
                        <button class="pro-delete-btn" @click="confirmDelete(role.id)">
                          <img src="../../../assets/img/delete.svg" alt="">
                          Delete Role</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
      roles: [],
    };
  },

  methods:{
    async fetchRoles() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user-manage/roles');
        this.roles = response.data.roles;
      } catch (error) {
        console.error('Failed to fetch roles:', error);
      }
    },
    addRole() {
      this.$router.push({
        name: 'addRole'
      })
    },
    updateRole(roleId) {
      this.$router.push({
        name: 'updateRole',
        params: {
          roleId: roleId,
        },
      })
    },
    confirmDelete(roleId) {
      if (confirm("Are you sure you want to delete this role?")) {
        this.deleteRole(roleId);
      }
    },
    deleteRole(roleId) {
      const apiUrl = `http://127.0.0.1:8000/api/user-manage/roles/${roleId}`;
      axios
          .delete(apiUrl)
          .then((response) => {
            console.log("Role deleted successfully");
            // Remove the deleted user from the role list
            this.roles = this.roles.filter((role) => role.id !== roleId);
          })
          .catch((error) => {
            console.log("Error deleting role", error);
          });
    },
  },
  mounted() {
    this.fetchRoles();
  },

}
</script>

<style scoped>

button#add-role-link {
  cursor: pointer;
  line-height: 20px;
  padding: 12px 12px;
  border: 1px solid var(--gray-text-background, #E1E5E6);
  background: var(--primary-1, #229269);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
}
</style>