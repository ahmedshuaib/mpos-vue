<template>
    <section class="pro-users__section">
        <div class="section__container">
            <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
                <h4 class="mb-0">Add New Product</h4>
            </div>
            <div class="col-lg-12 product-image pt-3">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <label for="product">Product Name:*</label>
                        <input type="text" class="form-control" id="product" placeholder="Product Name">
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Product Name:*</label>
                        <div class="select-group">
                            <button class="btn">
                            <img src="../assets/img/plus.svg" alt="">
                            </button>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Unit:*</label>

                        <div class="select-group">
                            <button class="btn">
                            <img src="../assets/img/plus.svg" alt="">
                            </button>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Category:*</label>
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Sub Category:*</label>
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">SKU <img src="../assets/img/greeni.svg" alt=""></label>
                        <input type="text" class="form-control" id="product" placeholder="Product Name">
                    </div>  
                    <div class="col-lg-4">
                    <div class="stock">
                        <div class="form-check green-check">
                            <input class="form-check-input" type="checkbox" value="" id="greencheck">
                            <label class="form-check-label" for="greencheck">
                                Manage Stock? <img src="../assets/img/greeni.svg" alt="">
                            </label>
                        </div>
                        <div class="span mt-3">
                            Enable stock management at product level
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Alert quantity:* <img src="../assets/img/greeni.svg" alt=""></label>
                        <input type="text" class="form-control" id="product" placeholder="Alart quantity">
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="browse">Browse:*</label>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" placeholder="Recipient's username" id="browse" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <span class="input-group-text align-items-center gap-1" id="basic-addon2"> <img src="../assets/img/folder.svg" alt="">Browse</span>
                        </div>
                        <span class="span">
                            Max File size 1MD <br>
                            Aspect ratio should be 1:1
                        </span>
                    </div>
                </div>

            </div>

            <div class="col-lg-12 product-image pt-3 mt-5">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <label for="product">Product Type:*</label>
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Applicable Tax:*</label>
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <label for="product">Selling Price Tax Type:*</label>
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-lg-10 m-auto">
                <div class="default-price">
                    <div class="row">
                        <div class="col-lg-6">
                            <span class="span2">
                                Defafult Purchase Price
                            </span>
                        </div>
                        <div class="col-lg-3">
                            <span class="span2">
                                x Margin(%) <img src="../assets/img/greeni.svg" alt="">
                            </span>
                        </div>
                        <div class="col-lg-3">
                            <span class="span2">
                                Excellent Price
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-10 m-auto">
                <div class="row">
                    <div class="col-lg-3 mb-4">
                        <label for="product">Exc. tax:*</label>
                        <input type="number" class="form-control" id="product" placeholder="Excluding Tax">
                    </div>
                    <div class="col-lg-3 mb-4">
                        <label for="product">Inc. tax:*</label>
                        <input type="number" class="form-control" id="product" placeholder="Including Tax">
                    </div>
                    <div class="col-lg-3 mb-4">
                        <label for="product">Inc. tax:*</label>
                        <input type="number" class="form-control" id="product" placeholder="10.00">
                    </div>
                    <div class="col-lg-3 mb-4">
                        <label for="product">Exc. tax:*</label>
                        <input type="number" class="form-control" id="product" placeholder="Excluding Tax">
                    </div>
                </div>
            </div>
            </div>
            <div class="col-lg-12 text-end mt-4">
                <div class="btns">
                    <button class="btn blue">Sace & Add opening Stock</button>
                    <button class="btn leaf">+ Save and Add Another</button>
                    <button class="btn green">Save</button>
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