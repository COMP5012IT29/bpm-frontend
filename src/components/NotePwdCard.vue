<template>
  <v-container fluid class="password-container">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3>Password</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-text-field
            label="Enter your password"
            type="password"
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
        <v-btn color="primary">Confirm</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useStore } from 'vuex';
import {onMounted, ref} from "vue";
import axios from "axios";
export default {
  name: "NotePwdCard",
  setup() {
    const store = useStore();
    const currentNote = store.getters.getCurrentNote;
    const hint = ref();

    onMounted(() => {
      axios.get(store.state.host + 'showHint?note_id=' + currentNote)
          .then(response => {
            hint.value = response.data.data;
          })
          .catch(error => {
            console.log(error);
          });
    });

    return {
      hint,
    };
  }

}
</script>

<style scoped>
.password-container {
  background-color: #f8f8f8;
  padding: 16px;
  max-width: 50%;
  margin: 300px auto;
}
</style>