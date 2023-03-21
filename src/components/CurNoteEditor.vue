<template>
  <div style="height: 700px">
    <MdEditor style="height: 100%;" v-model="content" :locale="'en'" />
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {ref, watchEffect, defineEmits, watch} from 'vue';
import {useStore} from "vuex";

export default {
  components: {
    MdEditor,
  },
  props: {
    note: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const content = ref(props.note.content);
    defineEmits(['updateContent']);

    watch(() => props.note.content, (newContent) => {
      content.value = newContent;
    });

    watch(content, () => {
      emitUpdateContent();
    });

    function emitUpdateContent() {
      emit('updateContent', content.value);
    }
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
