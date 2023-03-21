<template>
  <div style="height: 700px">
    <MdEditor style="height: 100%;" v-model="content" :locale="'en'" />
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {ref, watchEffect, defineEmits, watch} from 'vue';
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
    defineEmits(['updateContent']);

    watch(content, () => {
      emitUpdateContent();
    });
    function emitUpdateContent() {
      emit('updateContent', content.value);
    }
    function deleteNote() {
      console.log(`Deleting note with password ${password.value}`);
    }

    return {
      content,
    };
  },
};
</script>

<style scoped>
</style>
