<template>

      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
          >
            <h4 class="mb-0">Roles</h4>
            <router-link :to="{name:'addrole'}" class="add-role-link">
              <span class="user-add-btn"><span class="me-1">+</span>Add</span>
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
                  <tr>
                    <td>Admin</td>

                    <td style="width: 50%">
                      <div class="d-flex align-items-center gap-2">
                        <button class="pro-view-btn">
                          <img src="../assets/img/view.svg" alt="">
                          View Role</button>
                        <button class="pro-add-btn">
                          <img src="../assets/img/grenplus.svg" alt="">
                          Add Role</button>
                        <button class="pro-edit-btn">
                          <img src="../assets/img/edit.svg" alt="">
                          Edit Role</button>
                        <button class="pro-delete-btn">
                          <img src="../assets/img/delete.svg" alt="">
                          Delete Role</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Admin</td>

                    <td style="width: 50%">
                      <div class="d-flex align-items-center gap-2">
                        <button class="pro-view-btn">
                          <img src="../assets/img/view.svg" alt="">
                          View Role</button>
                        <button class="pro-add-btn">
                          <img src="../assets/img/grenplus.svg" alt="">
                          Add Role</button>
                        <button class="pro-edit-btn">
                          <img src="../assets/img/edit.svg" alt="">
                          Edit Role</button>
                        <button class="pro-delete-btn">
                          <img src="../assets/img/delete.svg" alt="">
                          Delete Role</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Admin</td>

                    <td style="width: 50%">
                      <div class="d-flex align-items-center gap-2">
                        <button class="pro-view-btn">
                          <img src="../assets/img/view.svg" alt="">
                          View Role</button>
                        <button class="pro-add-btn">
                          <img src="../assets/img/grenplus.svg" alt="">
                          Add Role</button>
                        <button class="pro-edit-btn">
                          <img src="../assets/img/edit.svg" alt="">
                          Edit Role</button>
                        <button class="pro-delete-btn">
                          <img src="../assets/img/delete.svg" alt="">
                          Delete Role</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Admin</td>

                    <td style="width: 50%">
                      <div class="d-flex align-items-center gap-2">
                        <button class="pro-view-btn">
                          <img src="../assets/img/view.svg" alt="">
                          View Role</button>
                        <button class="pro-add-btn">
                          <img src="../assets/img/grenplus.svg" alt="">
                          Add Role</button>
                        <button class="pro-edit-btn">
                          <img src="../assets/img/edit.svg" alt="">
                          Edit Role</button>
                        <button class="pro-delete-btn">
                          <img src="../assets/img/delete.svg" alt="">
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
export default {

}
</script>

<style>

</style>