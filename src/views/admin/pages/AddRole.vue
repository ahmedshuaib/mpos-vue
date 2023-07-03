<template>
      <!-- start design here... -->
      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box"
          >
            <h4 class="mb-0">Add role</h4>
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
                  placeholder="Role Name"
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
              <button class="permission-save-btn" type="submit">Save</button>
            </div>
          </form>
        </div>
      </section>
</template>

<script>
export default {
  name:'Addrole'
}
</script>

<style>

</style>