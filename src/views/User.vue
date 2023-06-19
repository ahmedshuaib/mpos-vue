<template>
    <!-- start design here... -->
    <section class="pro-users__section">
        <div class="section__container">
            <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
                <h4 class="mb-0">User</h4>
                <router-link :to="{name:'usermodal'}">
                    <button class="user-add-btn" id="user-add-btn">
                        <span class="me-1">+</span>Add
                    </button>
                </router-link>

            </div>
        </div>
    </section>

    <section class="pro-search__section">
        <div class="section__container">
            <div
            class="pro__search"
            >
            <div class="pro-select-box">
                <!-- dropdown menu -->

                <!-- select menu -->
                <div class="select-menu">
                <div class="select-btn" @click="selectBtn">
                    <span class="sBtn-text">Export</span>
                    <i class="uil uil-angle-down"></i>
                </div>

                <ul class="options">
                    <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Copy</p>
                    </li>

                    <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Export to CSV</p>
                    </li>

                    <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Export to Excel</p>
                    </li>

                    <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Export to PDF</p>
                    </li>

                    <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Print</p>
                    </li>

                    <li class="option">
                        <span class="option-circle"></span>
                        <p class="option-text mb-0">Column Visibility</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </section>


    <section class="pro-table__section">
        <div class="section__container">
            <div class="table__wrapper">
                <div class="table-scrollable">

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
        </div>
    </section>
    <router-view name="usermodal"></router-view>
    <router-view name="edited"></router-view>

</template>

<script>

export default {
    name:'User',

}
</script>

<style>

</style>