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
                <img
                    class="logo"
                    src="../../../assets/img/wafah-pos.svg"
                    alt="logo"
                />
            </div>
        </div>
        <div class="nav__items-wrapper d-flex justify-content-between">
            <div class="items__left">
                <ul class="list-unstyled">
                    <li
                        class="active d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            active-class="active"
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="index.html"
                        >
                            <img
                                src="../../../assets/img/Home.svg"
                                alt=""
                                class="active"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            active-class="active"
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="product.html"
                        >
                            <img
                                src="../../../assets/img/Discovery.svg"
                                alt="logo"
                            />
                        </a>
                    </li>

                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/profile-circle.svg"
                                alt="logo"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="product.html"
                        >
                            <img src="../../../assets/img/Bag.svg" alt="logo" />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/receipt-minus.svg"
                                alt="logo"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/Activity.svg"
                                alt="logo"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img src="../../../assets/img/Chart.svg" alt="logo" />
                        </a>
                    </li>

                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/money-send.svg"
                                alt="logo"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/user-remove.svg"
                                alt="logo"
                            />
                        </a>
                    </li>

                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/empty-wallet-change.svg"
                                alt="logo"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/wallet-add.svg"
                                alt="logo"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/Setting.svg"
                                alt="logo"
                            />
                        </a>
                    </li>

                    <hr
                        style="
                            border-top: 1px solid #3eac85;
                            opacity: 1;
                            margin: 0;
                        "
                    />

                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img
                                src="../../../assets/img/message-text.svg"
                                alt="logo"
                            />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img src="../../../assets/img/notify.svg" alt="logo" />
                        </a>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-center side-List"
                    >
                        <a
                            class="text-decoration-none d-flex align-items-center justify-content-center"
                            href="#"
                        >
                            <img src="../../../assets/img/Chat.svg" alt="logo" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="items__right">
                <ul class="list-unstyled">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2
                                class="accordion-header mb-0 mb-0"
                                id="headingOne"
                                @click="acheader"
                            >
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
                                    <router-link
                                        :to="{ name: 'home' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        href="#"
                                        >Home</router-link
                                    >
                                    <a
                                        class="text-decoration-none d-block py-2 mb-0"
                                        href="#"
                                        >Sub item two</a
                                    >
                                </div>
                            </div>
                        </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header mb-0" id="headingTwo">
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
                            <router-link
                                :to="{ name: 'user' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >User
                            </router-link>
                            <router-link
                                :to="{ name: 'role' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >Role
                            </router-link>
                            <router-link
                                :to="{ name: 'sales' }"
                                class="text-decoration-none d-block py-2 mb-0"
                                href="sales.html"
                            >Sales</router-link
                            >
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
                            <router-link
                                :to="{ name: 'suppliers' }"
                                class="text-decoration-none d-block py-2 mb-0"
                                href="#"
                                exact
                            >Suppliers
                            </router-link>
                            <router-link
                                :to="{ name: 'customers' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >Customers
                            </router-link>
                            <router-link
                                :to="{ name: 'customer-pay' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >Customer Payable
                            </router-link>
                            <router-link
                                :to="{ name: 'customer-group' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >Customer Group
                            </router-link>
                            <router-link
                                :to="{ name: 'customer-sms' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Customer SMS
                            </router-link>
                            <router-link
                                :to="{ name: 'customer-contact' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Import Contact
                            </router-link>
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
                            <router-link
                                :to="{ name: 'list-product' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              List Product
                            </router-link>
                            <router-link
                                :to="{ name: 'new-product' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              New Product List
                            </router-link>
                            <router-link
                                :to="{ name: 'print-label' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Print Label
                            </router-link>
                            <router-link
                                :to="{ name: 'variations' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Variations
                            </router-link>
                            <router-link
                                :to="{ name: 'import-product' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Import Product
                            </router-link>
                            <router-link
                                :to="{ name: 'sell-group' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Selling Price Group
                            </router-link>
                            <router-link
                                :to="{ name: 'units' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Units
                            </router-link>
                            <router-link
                                :to="{ name: 'categories' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Categories
                            </router-link>
                            <router-link
                                :to="{ name: 'brands' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Brands
                            </router-link>
                            <router-link
                                :to="{ name: 'list-purchase' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              List Purchase
                            </router-link>
                            <router-link
                                :to="{ name: 'purchase-return' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Purchase Return
                            </router-link>
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
                            <router-link
                                :to="{ name: 'all-sales' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              All Sales
                            </router-link>
                            <router-link
                                :to="{ name: 'discount-sales' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Discount Sale
                            </router-link>
                            <router-link
                                :to="{ name: 'add-sales' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Add Sale
                            </router-link>
                            <router-link
                                :to="{ name: 'list-pose' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              List Pos
                            </router-link>
                            <router-link
                                :to="{ name: 'list-draft' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              List Draft
                            </router-link>
                            <router-link
                                :to="{ name: 'list-quotations' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              List quotations
                            </router-link>
                            <router-link
                                :to="{ name: 'sell-return' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Sell Return
                            </router-link>
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
                            <router-link
                                :to="{ name: 'reports' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Profit/Loss Report
                            </router-link>
                            <router-link
                                :to="{ name: 'net-balance' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Net Balance
                            </router-link>
                            <router-link
                                :to="{ name: 'supplier-position' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Supplier Wise Sales Position
                            </router-link>
                            <router-link
                                :to="{ name: 'supplier-summery' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Supplier Wise Stock Summery
                            </router-link>
                            <router-link
                                :to="{ name: 'supplier-report' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Supplier Wise Product Sell Report
                            </router-link>

                            <router-link
                                :to="{ name: 'stock-position' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Supplier Wise Detail Stock Position of
                              shop
                            </router-link>

                            <router-link
                                :to="{ name: 'stock-receipts' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Supplier Wise Stock Receipts Report
                            </router-link>
                            <router-link
                                :to="{ name: 'purchase-sale' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Purchase & Sale Report
                            </router-link>
                            <router-link
                                :to="{ name: 'transfer-report' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Transfer Report
                            </router-link>
                            <router-link
                                :to="{ name: 'transaction-report' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Transaction Report
                            </router-link>
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
                            Stock Adjustment
                          </button>
                        </h2>
                        <div
                            id="collapseSeven"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <router-link
                                :to="{ name: 'stock-adjust' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Stock Adjustment
                            </router-link>
                            <router-link
                                :to="{ name: 'add-stock' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Add Stock
                            </router-link>
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
                            <router-link
                                :to="{ name: 'expenses' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Expenses
                            </router-link>

                            <router-link
                                :to="{ name: 'expenses-category' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Expense Categories
                            </router-link>
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
                            <router-link
                                :to="{ name: 'bank-user' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Bank User
                            </router-link>
                            <a
                                class="text-decoration-none d-block py-2 mb-0"
                                href="#"
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
                            <router-link
                                :to="{ name: 'bank' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Bank
                            </router-link>
                            <router-link
                                :to="{ name: 'personal' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Personal
                            </router-link>
                            <router-link
                                :to="{ name: 'main-point' }"
                                class="text-decoration-none d-block py-2 mb-0"
                            >
                              Main Point
                            </router-link>
                          </div>
                        </div>
                      </div>

                        <!-- <div class="accordion-item">
                            <h2 class="accordion-header mb-0" id="headingTwo">
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
                                    <router-link
                                        :to="{ name: 'user' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        >Product
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'role' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        >Role
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'sales' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        href="sales.html"
                                        >Sales</router-link
                                    >
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
                                    <router-link
                                        :to="{ name: 'suppliers' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        href="#"
                                        exact
                                        >Suppliers
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'customers' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        >Customers
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'customer-pay' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        >Customer Payable
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'customer-group' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                        >Customer Group
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'customer-sms' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Customer SMS
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'customer-contact' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Import Contact
                                    </router-link>
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
                                    <router-link
                                        :to="{ name: 'list-product' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        List Product
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'new-product' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        New Product List
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'print-label' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Print Label
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'variations' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Variations
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'import-product' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Import Product
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'sell-group' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Selling Price Group
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'units' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Units
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'categories' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Categories
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'brands' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Brands
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'list-purchase' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        List Purchase
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'purchase-return' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Purchase Return
                                    </router-link>
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
                                    <router-link
                                        :to="{ name: 'receive-balance' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Bank
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'receive-personal' }"
                                        class="text-decoration-none d-block py-2 mb-0"
                                    >
                                        Personal
                                    </router-link>
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
                                    <router-link
                                        :to="{ name: 'business-setting' }"
                                        class="text-decoration-none"
                                        href="#"
                                        ><p class="mb-0">Business Settings</p>
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'business-location' }"
                                        class="text-decoration-none"
                                        href="#"
                                        ><p class="mb-0">Business Location</p>
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'invoice-setting' }"
                                        class="text-decoration-none"
                                        href="#"
                                        ><p class="mb-0">Invoice Setting</p>
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'barcode-setting' }"
                                        class="text-decoration-none"
                                        href="#"
                                        ><p class="mb-0">Barcode Settings</p>
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'receipt-printer' }"
                                        class="text-decoration-none"
                                        href="#"
                                        ><p class="mb-0">Receipt Printer</p>
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'tax-rate' }"
                                        class="text-decoration-none"
                                        href="#"
                                        ><p class="mb-0">Tax Rate</p>
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'subscription' }"
                                        class="text-decoration-none"
                                        href="#"
                                        ><p class="mb-0">Subscription</p>
                                    </router-link>
                                </div>
                            </div>
                        </div> -->
                    </div>

                    <!-- <hr
                        style="
                            border-top: 1px solid #ededed;
                            opacity: 1;
                            margin: 0;
                        "
                    />
                    <li
                        class="d-flex align-items-center justify-content-between"
                    >
                        <router-link
                            :to="{ name: 'inbox' }"
                            class="text-decoration-none"
                            href="#"
                            ><p class="mb-0">inbox</p>
                            <div class="count">19</div>
                        </router-link>
                    </li>
                    <li
                        class="d-flex align-items-center justify-content-between"
                    >
                        <router-link :to="{ name: 'notification' }">
                            <p class="mb-0">Notifications</p>
                            <div class="count">7</div>
                        </router-link>
                    </li>

                    <li
                        class="d-flex align-items-center justify-content-between"
                    >
                        <router-link
                            :to="{ name: 'comment' }"
                            class="text-decoration-none"
                            ><p class="mb-0">Comment</p>
                            <div class="count">9</div>
                        </router-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
    <!-- NAVBAR SECTION END -->
</template>

<script>
export default {};
</script>

<style></style>
