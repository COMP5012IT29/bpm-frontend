<template>
  <v-container fluid class="password-container">
    <v-row style="margin-bottom: 12px;margin-top:12px">
      <v-col cols="12" class="text-center">
        <h2>Password</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-text-field
            label="Enter your password"
            type="password"
            v-model="pwd"
        ></v-text-field>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="2" class="text-left">
        <p>Hint: {{hint}}</p>
      </v-col>
      <v-col cols="2" class="text-center">
        <v-btn text color="primary">Cancel</v-btn>
      </v-col>
      <v-col cols="2" class="text-center">
        <v-btn @click="confirm" color="primary">Confirm</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useStore } from 'vuex';
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "NotePwdCard",
  setup() {
    const store = useStore();
    const currentNote = store.getters.getCurrentNote;
    const hint = ref();
    const pwd = ref();

    onMounted(() => {
      axios.get(store.state.host + 'showHint?note_id=' + currentNote,{
        headers: {
          Authorization: 'Bearer ' + store.getters.getToken
        }
      })
          .then(response => {
            hint.value = response.data.data;
          })
          .catch(error => {
            console.log(error);
          });
    });

    function confirm(){
      store.commit('set_currentnotepwd',pwd.value);
      router.push('/note');
    }

    return {
      hint,
      confirm,
      pwd,
    };
  }

}
</script>

<style scoped>
.password-container {
  background-color: #f8f8f8;
  padding: 16px;
  max-width: 50%;
  min-height: 300px;
  margin: 300px auto;
}
</style>