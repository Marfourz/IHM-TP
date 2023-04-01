<template>
  <Transition name="modal">
    <div v-if="visible" class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div
          class="modal-container"
          :style="'width:' + width + ';height:' + height"
        >
          <slot name="modal">
            <div class="modal-header relative">
              <div class="flex justify-between" v-if="header">
                <slot name="header">
                  <div
                    class="text-white select-none bg-primary flex justify-between items-center w-full py-4 px-6 rounded-t-lg"
                  >
                    <div>{{ title }}</div>
                    <BaseIcon
                      class="cursor-pointer"
                      icon="close"
                      @click="$emit('close')"
                    ></BaseIcon>
                  </div>
                </slot>
              </div>
            </div>

            <div class="modal-body h-full">
              <slot>default body</slot>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "Modal title",
    },
    width: {
      type: String,
      default: "650px",
    },
    height: {
      type: String,
    },
  },
});
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: block;
  /* vertical-align: middle; */
  height: 100%;
  overflow-y: scroll;
}

.modal-container {
  margin: 0px auto;
  margin-top: 5%;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
