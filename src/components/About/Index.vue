<script setup>
import { oss_list } from "./copyright.json";
</script>

<template>
  <span
    class="position-fixed bottom-0 end-0 p-2 text-warning"
    data-bs-toggle="modal"
    data-bs-target="#about-menu"
    type="button"
    style="z-index: 1031"
    >About</span
  >
  <!--END button-->

  <!--BEGIN page-->
  <div
    class="modal"
    id="about-menu"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" style="height: 350px">
        <div class="modal-header">
          <h1 class="modal-title fs-5">More about this software</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Developed by
            <a href="https://github.com/lamersc" target="_blank">lamersc</a>,
            but only made possible by the amazing open source software below:
          </p>
          <div class="accordion accordion-flush" id="about-menu-oss">
            <template v-for="software in oss_list.mit">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    v-bind:data-bs-target="`#about-menu-oss-${software.name}`"
                  >
                    {{ software.name }}
                  </button>
                </h2>
                <div
                  v-bind:id="`about-menu-oss-${software.name}`"
                  class="accordion-collapse collapse"
                  data-bs-parent="#about-menu-oss"
                >
                  <div class="accordion-body">
                    <pre class="mb-0" style="white-space: pre-line">
                            <code>
                            The MIT License

                            Copyright (c) {{ software.copyright }}
                            
                            Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the "Software"), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:
                            
                            The above copyright notice and this permission notice shall be included in
                            all copies or substantial portions of the Software.
                            
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                            THE SOFTWARE.
                            </code>
                      </pre>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
