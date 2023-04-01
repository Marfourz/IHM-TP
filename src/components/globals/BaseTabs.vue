<!-- tiny and simple tabs made with tailwindcss -->
<!--
tabs property is required

inactiveTab & activeTab are optional, set to change appearance

just all;

-->

<template>
  <div class="tld-tabs">
    <div class="w-full">
      <!-- tabs button -->
      <ul
        class="tld-tabs-buttons m-0 list-none select-none flex flex-wrap bg-white flex-row border-b border-[rgba(0,0,0,0.15)]"
      >
        <li
          v-for="tab in tabs"
          :key="tab.name"
          class="tld-tab-button cursor-pointer py-4 px-6 text-center hover:bg-fadeSecondary"
          :class="dynamicClass(tab.name)"
          @click="toggleTabs(tab.name)"
        >
          <span class="text-sm leading-[1.063rem] font-semibold">
            {{ tab.libelle }}
          </span>
        </li>
      </ul>
      <!-- tabs area -->
      <div
        class="relative tld-tabs-tab-content tld-tabs-tab-space w-full"
        :class="`tld-active-tab-${openTab}`"
      >
        <slot :name="openTab" :item="openTab"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRef } from 'vue';

export default {
  name: 'tailwind-tabs',
  props: {
    tabs: {
      type: [Array, Object],
      default: () => [],
      required: true,
    },

    inactiveTab: {
      type: String,
      default: 'text-09101D bg-white',
    },

    activeTab: {
      type: String,
      default: 'text-005743 bg-D9F2EC border-b-4 border-primary',
    },
  },

  setup(props, { emit }) {
    const Tabs = toRef(props, 'tabs');
    const openTab = ref(Tabs.value[0].name);
    const activeTab = toRef(props, 'activeTab');
    const inactiveTab = toRef(props, 'inactiveTab');

    const dynamicClass = (tabname) => {
      if (tabname === openTab.value) return activeTab.value;
      return inactiveTab.value;
    };

    const toggleTabs = (tab) => {
      openTab.value = tab;
      emit('change', openTab.value);
    };

    return {
      openTab,
      dynamicClass,
      toggleTabs,
      Tabs
    };
  },
};
</script>
