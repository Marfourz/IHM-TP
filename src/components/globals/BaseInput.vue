<template>
  <Field :name="name" :rules="rules" v-slot="{ field, errorMessage, errors }">
    <div class="text-left flex flex-col w-full">
      <label for="" v-if="label" class="mb-1" style="font-weigth: semibold"
        >{{ label }}<span class="text-danger" v-if="isRequired"> *</span>
        <span class="text-grey text-xs">{{ optionalText }}</span></label
      >
      <div
        class="border rounded-lg w-full"
        :class="{
          'border-borderColor': errors.length == 0,
          'border-danger bg-fadeDanger': errors.length != 0,
        }"
        v-if="type == 'textarea'"
      >
        <textarea
          name=""
          id=""
          rows="4"
          v-bind="{ ...$attrs, ...field }"
          class="w-full outiline-none focus:shadow-outline rounded-lg focus:outline-none p-4"
        >
        </textarea>
      </div>

      <div v-else-if="type == 'textbeauty'">
          <QuillEditor theme="snow" v-bind="{ ...$attrs, ...field }"
            contentType="html"
           
            @update:content="inputChange"
          class="w-full outiline-none focus:shadow-outline rounded-lg focus:outline-none p-4"/>
      </div>
      <div
        v-else-if="type == 'date'"
        class="border rounded-lg w-full flex items-center justify-between"
        :class="{
          'border-borderColor': errors.length == 0,
          'border-danger bg-fadeDanger': errors.length != 0,
        }"
      >
        <BaseIcon :icon="icon" v-if="icon"></BaseIcon>
        <v-date-picker v-bind="{ ...$attrs, ...field }">
          <template v-slot="{ inputValue, inputEvents }">
            <input
              :value="inputValue"
              v-on="inputEvents"
              class="outiline-0 py-2 rounded-lg px-4 text-gray-700 bg-transparent focus:shadow-outline focus:outline-none w-full"
            />
          </template>
        </v-date-picker>
        <BaseIcon :icon="iconRigth" v-if="iconRigth"></BaseIcon>
      </div>
      <div
        v-else
        class="flex items-center outiline-0 focus:shadow-outline rounded-lg border focus:outline-none space-x-2"
        :class="{
          'border-borderColor': errors.length == 0,
          'border-danger bg-fadeDanger': errors.length != 0,
        }"
      >
        <BaseIcon :icon="icon" v-if="icon"></BaseIcon>
        <input
          ref="input"
          v-bind="{ ...$attrs, ...field }"
          :type="inputType"
          class="outiline-0 py-2 px-3 rounded-lg text-gray-700 bg-transparent focus:shadow-outline focus:outline-none w-full"
        />
        <BaseIcon :icon="iconRigth" v-if="iconRigth"></BaseIcon>
        <div @click="show = !show" v-if="type == 'password'" class="flex">
          <BaseIcon icon="password" v-if="show"></BaseIcon>
          <BaseIcon icon="password-hide" class="w-6 h-6" v-else></BaseIcon>
        </div>
      </div>

      <div
        v-if="errors.length != 0"
        class="flex space-x-2 items-center bg-fadeDanger py-1 px-4 rounded-lg mt-2 text-sm"
      >
        <BaseIcon icon="error" />
        <div class="text-danger">{{ errorMessage }}</div>
      </div>
    </div>
  </Field>
</template>

<script>
import { Field } from "vee-validate";
export default {
  data() {
    return {
      show: this.type != "password",
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    rules: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconRigth: {
      type: String,
    },
    optionalText: {
      type: String,
    },
  },
  computed: {
    isRequired() {
      if (this.rules && this.rules.split("|").includes("required")) return true;
      return false;
    },
    isPassword() {
      console.log("this is rules", this.rules);
      if (this.rules && this.rules.split("|").includes("password")) return true;
      return false;
    },
    inputType() {
      if (this.type != "password") return this.type;
      else {
        if (!this.show) return "password";
        else return "text";
      }
    },
  },
  methods: {
    inputChange(value) {
      this.$emit("change", value);
    },

    onBeautyBodyChange(value) {
      this.$emit("update:modelValue", value);
      console.log(value);
    }
  },
  components: {
    Field,
  },
  mounted(){
    if(this.type == 'number'){
      this.$refs.input
          .addEventListener("keydown", function (event) {
            console.log('event',event)
            if (! String(event.code).startsWith("Digit") && !["Backspace", "Control", "Enter", "Alt", "Meta", "Tab"].includes(event.key)  && !isNaN(parseInt(event.key)))  {
              event.preventDefault();
            }
            // if (/[^0-9]/.exec(letter) && letter !== "Backspace")
            //   event.preventDefault();
          });

       
    }
  }
};
</script>

<style scoped></style>
