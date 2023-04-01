<template>
  <div
    class="rounded-2xl  flex space-x-1 justify-center px-2 items-center text-sm align-center"
    style="font-size:12px;width:fit-content"
    :class="{
      'bg-fadeWarning': type == 'warning',
      'bg-fadeDanger': type == 'danger',
      'bg-fadeBlue': type == 'primary',
      'bg-fadeGreen': type == 'success',
      'text-warning': type == 'warning',
      'text-danger': type == 'danger',
      'text-primary': type == 'primary',
      'text-success': type == 'success',
    }"
  >
    <div
      class="w-2 h-2 rounded-full py-1"
      :class="{
        'bg-warning': type == 'warning',
        'bg-danger': type == 'danger',
        'bg-success': type == 'success',
        'bg-primary': type == 'primary',
      }"
    ></div>
    <div> <slot ></slot></div>
   
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          ["warning", "danger", "success", "primary"].indexOf(value) !== -1
        );
      },
    }
  },
};
</script>

<style lang="scss" scoped>
</style>