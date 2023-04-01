<template>
  <div
    data-widget-item="switch-any"
    :data-animate="animate ? 'true' : 'false'"
    class="relative select-none rounded-lg p-2 flex flex-row flex-nowrap bg-[rgba(175,205,198,0.3)]"
    ref="switch_button"
    :data-active="actualState.label"
  >
    <!-- before -->
    <button
      v-if="animate"
      role="button"
      aria-label="switch"
      ref="slider_widget"
      class=" absolute slider-widget cursor-pointer rounded-lg outline-none appearance-none font-bold"
      :data-pos="swpos"
      v-html="actualState.label" />
    <!---->
    <button
      type="button"
      v-for="(el, index) in elements"
      :data-target="el.key"
      :key="index"
      class=" capitalize cursor-pointer rounded-lg outline-none appearance-none font-semibold"
      :class="{
        active: actualState.key === el.key,
        'z-[1]': animate === true,
      }"
      @click="change(el, index, $event.target)"
    >
      {{ el.label }}
    </button>
  </div>
</template>

<script>
import { onMounted, ref, toRef, watch } from 'vue';

export default {
  props: {
    elements: {
      type: [Array, Object],
      required: true,
    },
    default: {
      type: String,
    },
    animate: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, context) {
    const actualState = ref(props.elements[0]);
    const defaultState = toRef(props, 'default');
    const switch_button = ref(null);
    const swpos = ref(0);
    const slider_widget = ref(null);

    const computeCoods = (target) => {
      swpos.value = Math.abs(
        target.getBoundingClientRect().x - switch_button.value.getBoundingClientRect().x
      );
      if (slider_widget.value)
        slider_widget.value.setAttribute('style', `left: ${Math.round(swpos.value)}px;`);
    };

    const change = (el, index, target) => {
      actualState.value = el;
      context.emit('change', el);
      swpos.value = target.getBoundingClientRect().width;
      //
      computeCoods(target);
      //
    };

    const observer = () => {
      const resizeOb = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          void entry;
          if (!switch_button.value) return void 0;
          const active = switch_button.value.querySelector(`button.active`);
          if (slider_widget.value) {
            slider_widget.value.style.width = `${active.offsetWidth}px`;
            slider_widget.value.style.height = `${active.offsetHeight}px`;
          }
          // console.log(active.offsetWidth, active.offsetHeight);
        });
      });
      resizeOb.observe(switch_button.value);
    };

    const checkDefault = () => {
      const _s = props.elements.filter((it) => it.key === defaultState.value);
      const _idx = props.elements.findIndex((it) => it.key === defaultState.value);
      change(_s[0], _idx, switch_button.value.querySelector(`button[data-target=${_s[0].key}`));
    };

    watch(defaultState, () => {
      checkDefault();
    });

    onMounted(async () => {
      if (defaultState.value.length === 0) context.emit('change', actualState.value);
      else {
        checkDefault();
      }
      //
      observer();
    });

    return {
      change,
      actualState,
      switch_button,
      swpos,
      slider_widget,
    };
  },
};
</script>

<!-- <style lang="scss" scoped>
div[data-widget-item='switch-any'] {
  transform: translateZ(0);

  button.active {
    font-weight: bold;
    color: #ffffff;
  }

  &[data-animate='false'] {
    button.active {
      //color: transparent;
      transition: left 0.3s ease;
      background-color: #006a52;
    }
  }

  button,
  .slider-widget {
    padding: 12px 16px;
    font-size: 14px;
    line-height: 17px;
    color: #394452;
    text-align: center;
  }

  .slider-widget {
    color: transparent;
    transition: left 0.3s ease;
    background-color: #006a52;
    transform: translateZ(0);
  }
}
</style> -->
