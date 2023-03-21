<template>
  <div style="height: 700px">
    <MdEditor style="height: 100%;" v-model="content" :locale="'en'" />
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref, watchEffect, defineEmits } from 'vue';
import { useStore } from "vuex";

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
  setup(props, { emit }) {
    const store = useStore();
    const content = ref(props.note.content || '');
    const password = ref(props.note.password || '');
    const hint = ref(props.note.password || '');

    watchEffect(() => {
      content.value = props.note.content;
      password.value = props.note.password;
      hint.value = props.note.hint;
    });

    function deleteNote() {
      console.log(`Deleting note with password ${password.value}`);
    }

    function saveNote() {
      emit('updateNote2', { content: content.value, password: password.value, hint:hint.value});
    }

    defineEmits(['updateNote']);

    return {
      content,
      password,
      saveNote
    };
  },
};
</script>

<style scoped>
</style>
