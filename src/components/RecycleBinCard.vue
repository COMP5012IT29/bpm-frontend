<template>
  <div>
    <v-list>
      <v-list-item v-for="note in notes" :key="note.id">
        <v-list-item-title>{{ note.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ note.date }} - {{ note.tag }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';
import {ref, onMounted, computed} from 'vue';
import { useStore } from 'vuex';
import router from "@/router";
export default {
  name: "SeachCard",
  setup() {
    const store = useStore();
    const notes = ref('')
    const username = store.getters.getUsername
    const computedNotes = computed(() => notes.value);
    function getDeleteNoteList(){
      axios.get(store.state.host + 'showNoteList?username=' + username + '&type=' + 3)
          .then(response => {
            notes.value = response.data.data;
          })
          .catch(error => {
            console.log(error);
          });
    }

    onMounted(() => {
      getDeleteNoteList()
    });

    return {
      notes: computedNotes,
    };
  },
};
</script>

<style scoped>

</style>