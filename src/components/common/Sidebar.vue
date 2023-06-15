<template>
    <!-- NAVBAR SECTION START -->
        <nav>
            <div class="logo__wrapper">
            <div class="left__side">
                <p
                class="small-logo mb-0 d-flex align-items-center justify-content-center"
                >
                W
                </p>
            </div>
            <div
                class="right__side d-flex align-items-center justify-content-center"
            >
                <img class="logo" src="../../assets/img/wafah-pos.svg" alt="logo" />
            </div>
            </div>
            <div class="nav__items-wrapper d-flex justify-content-between">
                <div class="items__left">
                <ul class="list-unstyled">
                    <li
                        class="active d-flex align-items-center justify-content-center side-List">
                        <a active-class="active"
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="index.html"
                            >
                            <img src="../../assets/img/Home.svg" alt="" class="active"/>
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a active-class="active"
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="product.html"
                            >
                            <img src="../../assets/img/Discovery.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                          class="text-decoration-none d-flex align-items-center justify-content-center"
                          href="#"
                          >
                            <img src="../../assets/img/profile-circle.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="product.html"
                        >
                        <img src="../../assets/img/Bag.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/receipt-minus.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/Activity.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/Chart.svg" alt="logo" />
                        </a>
                    </li>
        
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/money-send.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/user-remove.svg" alt="logo" />
                        </a>
                    </li>
        
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/empty-wallet-change.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/wallet-add.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/Setting.svg" alt="logo" />
                        </a>
                    </li>
        
                    <hr style="border-top: 1px solid #3eac85; opacity: 1; margin: 0" />
        
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/message-text.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/notify.svg" alt="logo" />
                        </a>
                    </li>
                    <li class="d-flex align-items-center justify-content-center side-List">
                        <a
                        class="text-decoration-none d-flex align-items-center justify-content-center"
                        href="#"
                        >
                        <img src="../../assets/img/Chat.svg" alt="logo" />
                        </a>
                    </li>
                </ul>
                </div>
                <div class="items__right">
                    <ul class="list-unstyled">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0 mb-0" id="headingOne" @click="acheader">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                                >
                                Home
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <router-link :to="{name:'home'}" class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Home</router-link>
                                <a class="text-decoration-none d-block py-2 mb-0" href="#">Sub item two</a>
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingTwo" >
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                >
                                User Management
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    <router-link :to="{name:'user'}"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        >Product
                                    </router-link>
                                <router-link :to="{name:'role'}"
                                    class="text-decoration-none d-block py-2 mb-0"
                                    >Role
                                </router-link>
                                <router-link :to="{name:'sales'}"
                                    class="text-decoration-none d-block py-2 mb-0"
                                    href="sales.html"
                                    >Sales</router-link>
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingThree">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                >
                                Contacts
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <router-link :to="{name:'suppliers'}" class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Suppliers</router-link
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingFour">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                                >
                                Product
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingFive">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                                >
                                Sales
                                </button>
                            </h2>
                            <div
                                id="collapseFive"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingFive"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingSix">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                                >
                                Report
                                </button>
                            </h2>
                            <div
                                id="collapseSix"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingSix"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingSeven">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                                >
                                Stoke Adjustment
                                </button>
                            </h2>
                            <div
                                id="collapseSeven"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingSeven"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingEigth">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEigth"
                                aria-expanded="false"
                                aria-controls="collapseEigth"
                                >
                                Expense
                                </button>
                            </h2>
                            <div
                                id="collapseEigth"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingEigth"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingNine">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseNine"
                                aria-expanded="false"
                                aria-controls="collapseNine"
                                >
                                Bank User
                                </button>
                            </h2>
                            <div
                                id="collapseNine"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingNine"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingTen">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTen"
                                aria-expanded="false"
                                aria-controls="collapseTen"
                                >
                                Transfer Balance
                                </button>
                            </h2>
                            <div
                                id="collapseTen"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingTen"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingElv">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseElv"
                                aria-expanded="false"
                                aria-controls="collapseElv"
                                >
                                Receive Balance
                                </button>
                            </h2>
                            <div
                                id="collapseElv"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingElv"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
            
                            <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingTwl">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwl"
                                aria-expanded="false"
                                aria-controls="collapseTwl"
                                >
                                Settings
                                </button>
                            </h2>
                            <div
                                id="collapseTwl"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingTwl"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item one</a
                                >
                                <a class="text-decoration-none d-block py-2 mb-0" href="#"
                                    >Sub item two</a
                                >
                                </div>
                            </div>
                            </div>
                        </div>
        
                      <hr style="border-top: 1px solid #ededed; opacity: 1; margin: 0" />
        
                        <li class="d-flex align-items-center justify-content-between">
                            <a class="text-decoration-none" href="#"
                            ><p class="mb-0">inbox</p>
                            <div class="count">19</div>
                            </a>
                        </li>
        
                        <li class="d-flex align-items-center justify-content-between">
                            <a class="text-decoration-none" href="#"
                            ><p class="mb-0">Notifications</p>
                            <div class="count">7</div>
                            </a>
                        </li>
            
                        <li class="d-flex align-items-center justify-content-between">
                            <a class="text-decoration-none" href="#"
                            ><p class="mb-0">Comment</p>
                            <div class="count">9</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <!-- NAVBAR SECTION END -->
</template>

<script>
export default {
    name:'tSidebar',
    mounted(){


    }
}
</script>

<style>

</style>