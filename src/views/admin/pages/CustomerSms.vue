<template>
    <section class="pro-users__section">
        <div class="section__container">
            <div
                class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
            >
                <h4 class="mb-0">Customers Sms</h4>
            </div>
            <div class="col-lg-12 product-image p-4">
                <span class="send-sms">Send Customer SMS</span><br>
                <div class="form-check form-check-inline mt-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">Individual</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Send All Customer</label>
                </div>
                <div class="col-lg-4 mt-5">
                    <label for="select">Customer:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select A customer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-lg-4 mt-4">
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>
                <div class="save-btn">
                    <button class="btn">Save</button>
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