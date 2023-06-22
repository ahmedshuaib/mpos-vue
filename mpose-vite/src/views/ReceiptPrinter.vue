<template>

    <section class="pro-users__section">
      <div class="section__container">
        <div class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2">
            <h4 class="mb-0">Receipt Printers</h4>
            <a class="add-role-link btns">
                <button class="btn green"><span class="me-1">+</span>Add</button>
            </a>
        </div>

      </div>
    </section>

    <section class="stock__section mt-5">
      <div class="section__container">
          <div class="card border-0 bg-white p-4">
            <table ref="table5" style="width:100%">
              <thead>
                <tr>
                  <th>Printer Name</th>
                  <th>Connection Type</th>
                  <th>Capability Profile</th>
                  <th>Characters per line</th>
                  <th>IP Adress</th>
                  <th>Port</th>
                  <th>Path</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>HP LaserJet</td>
                      <td>USB</td>
                      <td>100+</td>
                      <td>200</td>
                      <td>464684674</td>
                      <td>2.0</td>
                      <td>1</td>
                      <td>
                        <div class="dots-menu">
                        <div class="dots-btn">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>

                        <ul class="t-options">
                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                            </li>
                        </ul>
                        </div>
                      </td>
                  </tr>
                  <tr>
                      <td>HP LaserJet</td>
                      <td>USB</td>
                      <td>100+</td>
                      <td>200</td>
                      <td>464684674</td>
                      <td>2.0</td>
                      <td>1</td>
                      <td>
                        <div class="dots-menu">
                        <div class="dots-btn">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>

                        <ul class="t-options">
                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                            </li>
                        </ul>
                        </div>
                      </td>
                  </tr>
                  <tr>
                      <td>HP LaserJet</td>
                      <td>USB</td>
                      <td>100+</td>
                      <td>200</td>
                      <td>464684674</td>
                      <td>2.0</td>
                      <td>1</td>
                      <td>
                        <div class="dots-menu">
                        <div class="dots-btn">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>

                        <ul class="t-options">
                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                            </li>
                        </ul>
                        </div>
                      </td>
                  </tr>
                  <tr>
                      <td>HP LaserJet</td>
                      <td>USB</td>
                      <td>100+</td>
                      <td>200</td>
                      <td>464684674</td>
                      <td>2.0</td>
                      <td>1</td>
                      <td>
                        <div class="dots-menu">
                        <div class="dots-btn">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>

                        <ul class="t-options">
                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                            </li>

                            <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                            </li>
                        </ul>
                        </div>
                      </td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </section>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>