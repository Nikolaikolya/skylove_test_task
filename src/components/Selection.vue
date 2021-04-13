<template>
  <label :for="name">{{ title }}</label>
  <select
    :class="className"
    :name="name"
    v-model="data"
    @change="$emit('changeselect', data)"
    :id="name"
  >
    <option :value="0"></option>
    <option
      v-for="(item, index) in options"
      :value="!item.value && item.value !== 0 ? item.title : index"
      :key="index"
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Selection",
  props: {
    className: {
      type: String,
      default: "selection",
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },

    isSend: {
      type: Boolean,
    },
  },
  emits: ["changeselect"],

  data() {
    return {
      data: "",
    };
  },

  watch: {
    isSend() {
      if (this.isSend) this.data = "";
    },
  },

  methods: {},

  computed: {},
};
</script>

<style scoped>
label {
  color: #a4a4b0;
}
</style>
