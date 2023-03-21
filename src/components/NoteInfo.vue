<template>
  <div class="bar">
    <v-row class="ma-0">
      <v-col cols="6">
        <v-text-field
            hide-details="auto"
            solo
            v-model="note.title"
            placeholder="title"
        />
      </v-col>

      <v-col cols="2">
        <VueDatePicker v-model="note.date"></VueDatePicker>
      </v-col>

      <v-col cols="2">
        <v-text-field
            hide-details="auto"
            solo
            v-model="note.tag"
            placeholder="tag"
        />
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="1">
        <v-btn icon @click="star">
          <v-icon style="font-size: 24px;"
                  :color="note.stared ? 'yellow' : 'gray'">mdi-star</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import {useStore} from "vuex";

export default {
  name: "NoteInfo",
  components: {
    VueDatePicker
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    async function star() {
      try {
        const response = await axios.post(store.state.host + 'starNote/', {
          note_id: store.getters.getCurrentNote,
        });

        if (response.data.msg === 'success') {
          props.note.stared = !props.note.stared
        } else {
          console.error('Failed to star the note');
        }
      } catch (error) {
        console.error('Error occurred while starring the note:', error);
      }
    }

    return {
      star,
    };
  },
};

</script>

<style scoped>
.bar {
  width: 100%;
  height: 100px;
  background-color: #66CCFF;
}
</style>
