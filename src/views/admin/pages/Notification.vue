<template>
    <div class="notification-section">
        <div class="modal fade"   ref="addgroups" tabindex="-1" aria-hidden="true" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog">
          <div class="modal-content modal-lg" >

            <div class="add-user__wrapper d-flex align-items-center justify-content-center" >
              <div class="add-user__box">
                  <div class="d-flex align-items-center justify-content-between popup-header">
                  <h4 class="mb-0">Notifications</h4>
                    <img src="../../../assets/img/x.svg" alt="" @click="goBack" data-bs-dismiss="modal">
                  </div>
                <div class="notification-body">
                  <ul>
                    <li>
                      <img src="../../../assets/img/active-profile.svg" alt="">
                      <div class="notification-text">
                          <span class="span-text1">New order #F52414</span>
                          <span class="time d-flex align-items-center gap-1"><img src="../../../assets/img/glasstime.svg" alt="">Today</span>
                      </div>
                    </li>
                    <li>
                      <img src="../../../assets/img/active-profile.svg" alt="">
                      <div class="notification-text">
                          <span class="span-text1">New order #F52414</span>
                          <span class="time d-flex align-items-center gap-1"><img src="../../../assets/img/glasstime.svg" alt="">Today</span>
                      </div>
                    </li>
                    <li>
                      <img src="../../../assets/img/active-profile.svg" alt="">
                      <div class="notification-text">
                          <span class="span-text1">New order #F52414</span>
                          <span class="time d-flex align-items-center gap-1"><img src="../../../assets/img/glasstime.svg" alt="">Today</span>
                      </div>
                    </li>
                    <li>
                      <img src="../../../assets/img/active-profile.svg" alt="">
                      <div class="notification-text">
                          <span class="span-text1">New order #F52414</span>
                          <span class="time d-flex align-items-center gap-1"><img src="../../../assets/img/glasstime.svg" alt="">Today</span>
                      </div>
                    </li>
                    <li>
                      <img src="../../../assets/img/active-profile.svg" alt="">
                      <div class="notification-text">
                          <span class="span-text1">New order #F52414</span>
                          <span class="time d-flex align-items-center gap-1"><img src="../../../assets/img/glasstime.svg" alt="">Today</span>
                      </div>
                    </li>
                    <li>
                      <img src="../../../assets/img/active-profile.svg" alt="">
                      <div class="notification-text">
                          <span class="span-text1">New order #F52414</span>
                          <span class="time d-flex align-items-center gap-1"><img src="../../../assets/img/glasstime.svg" alt="">Today</span>
                      </div>
                    </li>
                    <li>
                      <img src="../../../assets/img/active-profile.svg" alt="">
                      <div class="notification-text">
                          <span class="span-text1">New order #F52414</span>
                          <span class="time d-flex align-items-center gap-1"><img src="../../../assets/img/glasstime.svg" alt="">Today</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
import * as bootstrap from 'bootstrap';

export default {
  mounted(){
    if(this.$route.name==='notification'){
      const modalElement = this.$refs.addgroups;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
      }

  },
  beforeUnmount() {
    const modalElement = this.$refs.addgroups;
    modalElement.removeEventListener('hidden.bs.modal', this.goBack);
  },


  methods:{
    resetModal() {
      const modalElement = this.$refs.addgroups;
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
  },
  goBack() {
      window.history.back();
    },
  },
};
</script>
