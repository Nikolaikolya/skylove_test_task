<template>
  <div class="modal__wrapper" @click="$emit('close')">
    <div class="modal-content" @click.stop="">
      <div class="modal-header">
        <span class="modal-title">Новый тикет</span>
      </div>
      <div class="modal-body">
        <modal-form @close="$emit('close')"></modal-form>
      </div>
    </div>
  </div>
</template>

<script>
import ModalForm from "./ModalForm";
export default {
  components: {
    ModalForm,
  },
};
</script>

<style lang="scss" scoped>
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.5s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.48);
}

.modal-content {
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.5s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;

  color: #a5a9ac;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}

.modal-header {
  padding: 0;
  padding-bottom: 20px;
  margin-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  padding: 0;
  text-align: left;
}
</style>
