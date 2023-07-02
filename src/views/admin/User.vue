<template>
    <!-- start design here... -->
    <section class="pro-users__section">
        <div class="section__container">
            <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
                <h4 class="mb-0">User</h4>
                <router-link :to="{name:'userModal'}">
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
                            <img src="../assets/img/drop.svg" alt="">
                        </div>
                        <ul class="menu">
                            <li>Copy</li>
                            <li>Export to CSV</li>
                            <li class="active">Export to Excel</li>
                            <li>Export to PDF</li>
                            <li>Print</li>
                            <li>Column visibility</li>
                        </ul>
                         </div> 
                    </keep-alive>
                </div>
            </div>
        </div>
    </section>

    <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
                <table ref="table4" style="width:100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kamrul Islam</td>
                            <td>@kamrul</td>
                            <td>Admin</td>
                            <td>No Parent Unit</td>
                            <td>$1000</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                <router-link :to="{name:'edit',params:{id:'1'}}">
                                    <button class="pro-edit-btn">
                                    <img src="../assets/img/edit.svg" alt=""> Edit
                                </button>
                                </router-link>
                                <button class="pro-delete-btn">
                                    <img src="../assets/img/delete.svg" alt=""> Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Kamrul Islam</td>
                            <td>@kamrul</td>
                            <td>Admin</td>
                            <td>No Parent Unit</td>
                            <td>$1000</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                <router-link :to="{name:'edit',params:{id:'1'}}">
                                    <button class="pro-edit-btn">
                                    <img src="../assets/img/edit.svg" alt=""> Edit
                                </button>
                                </router-link>
                                <button class="pro-delete-btn">
                                    <img src="../assets/img/delete.svg" alt=""> Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Kamrul Islam</td>
                            <td>@kamrul</td>
                            <td>Admin</td>
                            <td>No Parent Unit</td>
                            <td>$1000</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                <router-link :to="{name:'edit',params:{id:'1'}}">
                                    <button class="pro-edit-btn">
                                    <img src="../assets/img/edit.svg" alt=""> Edit
                                </button>
                                </router-link>
                                <button class="pro-delete-btn">
                                    <img src="../assets/img/delete.svg" alt=""> Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Kamrul Islam</td>
                            <td>@kamrul</td>
                            <td>Admin</td>
                            <td>No Parent Unit</td>
                            <td>$1000</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                <router-link :to="{name:'edit',params:{id:'1'}}">
                                    <button class="pro-edit-btn">
                                    <img src="../assets/img/edit.svg" alt=""> Edit
                                </button>
                                </router-link>
                                <button class="pro-delete-btn">
                                    <img src="../assets/img/delete.svg" alt=""> Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Kamrul Islam</td>
                            <td>@kamrul</td>
                            <td>Admin</td>
                            <td>No Parent Unit</td>
                            <td>$1000</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                <router-link :to="{name:'edit',params:{id:'1'}}">
                                    <button class="pro-edit-btn">
                                    <img src="../assets/img/edit.svg" alt=""> Edit
                                </button>
                                </router-link>
                                <button class="pro-delete-btn">
                                    <img src="../assets/img/delete.svg" alt=""> Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Kamrul Islam</td>
                            <td>@kamrul</td>
                            <td>Admin</td>
                            <td>No Parent Unit</td>
                            <td>$1000</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                <router-link :to="{name:'edit',params:{id:'1'}}">
                                    <button class="pro-edit-btn">
                                    <img src="../assets/img/edit.svg" alt=""> Edit
                                </button>
                                </router-link>
                                <button class="pro-delete-btn">
                                    <img src="../assets/img/delete.svg" alt=""> Delete
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

export default {
    name:'User',

}
</script>

<style>

</style>