<!-- CurNoteEditor.vue -->
<template>
  <div style="height: 700px">
    <MdEditor style="height: 100%;" v-model="content" :locale="'en'" />
    <div style="position: absolute; bottom: 20px; right: 20px;">
      <v-row style="width: 600px">
        <v-text-field v-model="password" label="Password" dense></v-text-field>
        <v-btn color="red" text @click="deleteNote()">Delete</v-btn>
        <v-btn color="green" text @click="saveNote()">Save</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref, watchEffect } from 'vue';
import {useStore} from "vuex";

export default {
  components: {
    MdEditor,
  },
  props: {
    note: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const store = useStore();
    const content = ref(props.note.content);
    const password = store.getters.getCurrentNotePwd;

    watchEffect(() => {
      content.value = props.note.content;
    });

    return {
      content,
      password,
    };
  },
};
</script>

<style scoped>
.v-btn{
  margin:10px;
}
</style>
