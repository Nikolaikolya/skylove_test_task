<template>
  <form @submit.prevent="sendNewPost" method="POST">
    <p>
      <label for="name">Имя:</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="state.sendData.user.name"
        @input="nameValidate"
      />
      <span v-if="v$.sendData.user.name.$error">Обязательное поле</span>
    </p>
    <p>
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="state.sendData.user.email"
      />
      <span v-if="v$.sendData.user.email.$error">Обязательное поле</span>
    </p>
    <p>
      <label for="message">Сообщение:</label>
      <textarea
        type="text"
        name="message"
        id="message"
        v-model="state.sendData.body_subject"
      >
      </textarea>
      <span v-if="v$.sendData.body_subject.$error">Обязательное поле</span>
    </p>

    <selection
      :title="subject.title"
      :name="subject.name"
      :options="subject.data"
      :isSend="isSend"
      @changeselect="onSelectedSubject"
    />
    <span v-if="v$.sendData.subject.$error">Обязательное поле</span> <br />

    <selection
      :title="status.title"
      :name="status.name"
      :options="status.data"
      :isSend="isSend"
      @changeselect="onSelectedStatus"
    />
    <span v-if="v$.sendData.status.$error">Обязательное поле</span> <br />

    <selection
      :title="priority.title"
      :name="priority.name"
      :options="priority.data"
      class-name="selection selection--last"
      @changeselect="onSelectedPriority"
      :isSend="isSend"
    />
    <span v-if="v$.sendData.priority.$error">Обязательное поле</span> <br />

    <button class="btn btn-create">Создать</button>
    <button class="btn btn-back" type="button" @click="$emit('close')">
      Отмена
    </button>
  </form>
</template>

<script>
import Selection from "./Selection";
import { setTicket } from "../api/tickers";
import { mapState, mapGetters } from "vuex";
import store from "../store";

import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "ModalForm",
  components: { Selection },
  setup() {
    const state = reactive({
      sendData: {
        id: null,
        user: {
          name: "",
          email: "",
          avatar: "",
        },
        body_subject: "",
        subject: "",
        status: null,
        priority: null,
        ticket_number: null,
      },
    });

    const rules = computed(() => {
      return {
        sendData: {
          user: {
            name: { required, minLength: minLength(3) },
            email: { required, email },
          },
          body_subject: { required },
          subject: { required },
          status: { required },
          priority: { required },
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  data() {
    return {
      isSend: false,
    };
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.$emit("close");
      }
    });
  },
  computed: {
    ...mapState("selection", ["subject", "status", "priority"]),
    ...mapGetters("tickers", ["getIdFromNewTicker"]),

    getIndex() {
      return this.getIdFromNewTicker;
    },

    bodySend() {
      return this.state.sendData;
    },
  },
  methods: {
    reset() {
      this.state.sendData.user.name = "";
      this.state.sendData.user.email = "";
      this.state.sendData.user.avatar = "";
      this.state.sendData.ticket_number = "";
      this.state.sendData.id = "";
      this.state.sendData.body_subject = "";
    },

    sendNewPost() {
      this.v$.$validate();

      if (!this.v$.$error) {
        this.state.sendData.id = this.state.sendData.ticket_number = this.getIndex;

        if (!this.state.sendData.user.avatar) {
          this.state.sendData.user.avatar = "https://via.placeholder.com/50";
        }

        setTicket(this.bodySend, "POST").then(() =>
          store.dispatch("tickers/loadTickers")
        );

        this.$emit("close");
        this.reset();
        this.isSend = true;
      } else console.error("Form no success!!!");
    },

    nameValidate(event) {
      if (!this.v$.$error) console.log(this.v$);
      else console.error("Error");
      event.target.value = event.target.value.replace(/[^a-zA-Zа-яА-Я]/g, "");
    },

    onSelectedStatus(data) {
      this.state.sendData.status = data;
    },

    onSelectedPriority(data) {
      this.state.sendData.priority = data;
    },

    onSelectedSubject(data) {
      this.state.sendData.subject = data;
    },
  },
};
</script>

<style scoped>
label {
  color: #a4a4b0;
}
input,
textarea,
select {
  width: 100%;
  height: 31px;
  padding-left: 5px;

  background-color: #e7e8ec;
  color: #6c6d71;

  border: none;
}
textarea {
  height: 68px;
}

.btn:not(:last-child) {
  margin-right: 15px;
}
.btn-create {
  background-color: #78cd51;
}

.btn-back {
  background-color: #f67a6e;
}

.btn-create:hover,
.btn-back:hover {
  opacity: 0.8;
}
</style>
