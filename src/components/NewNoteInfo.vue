<template>
  <div class="bar">
    <v-row class="ma-0">
      <v-col cols="6">
        <v-text-field
            hide-details="auto"
            solo
            v-model="note.title"
            @input="emitUpdateNote"
        />
      </v-col>

      <v-col cols="2">
        <VueDatePicker v-model="note.date" @input="emitUpdateNote"></VueDatePicker>
      </v-col>

      <v-col cols="2">
        <v-text-field
            hide-details="auto"
            solo
            v-model="note.tag"
            @input="emitUpdateNote"
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
import { ref, defineEmits } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import { useStore } from "vuex";

export default {
  name: "NewNoteInfo",
  components: {
    VueDatePicker
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    defineEmits(['updateNote']);

    function emitUpdateNote() {
      emit('updateNote', props.note);
    }

    return {
      emitUpdateNote,
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
