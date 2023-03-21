<!-- editorDemo.vue -->
<template>
  <div style="height: 700px">
    <MdEditor style="height: 100%;" v-model="content" :locale="'en'" />
    <div style="position: absolute; bottom: 20px; right: 20px;">
      <v-btn color="red" text @click="deleteNote()">Delete</v-btn>
      <v-btn color="green" text @click="saveNote()">Save</v-btn>
    </div>
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref, watchEffect } from 'vue';

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
    const content = ref(props.note.content);

    watchEffect(() => {
      content.value = props.note.content;
    });

    return {
      content,
    };
  },
};
</script>

<style scoped>
.v-btn{
  margin:10px;
}
</style>
