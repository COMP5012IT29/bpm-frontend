<template>
  <div style="height:100%">
    <Topbar></Topbar>
    <v-row class="ma-0" style="height:100%">
      <v-col cols="2" class="pa-0">
        <Menu></Menu>
      </v-col>
      <v-col cols="10" class="pa-0">
        <note-info :note="note"></note-info>
        <Editor :note="note"></Editor>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Editor from "@/components/CurNoteEditor.vue";
import Topbar from "@/components/topbar.vue";
import Menu from "@/components/Menu.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";
import NoteInfo from "@/components/NoteInfo.vue";

export default {
  components: {NoteInfo, Menu, Topbar, Editor},
  name: "Note",
  setup() {
    const store = useStore();
    const note = ref({
      title: "",
      content: "",
      tag: "",
      date: "",
      stared: false
    });

    onMounted(() => {
      axios.post(store.state.host + 'viewNote/', {
        note_id: store.getters.getCurrentNote,
        password: store.getters.getCurrentNotePwd,
      }).then((res) => {
        if (res.data.msg === 'success') {
          note.value = res.data.data
        }
      }).catch((err) => {
        console.log(err);
      });
    });

    return {
      note,
    }
  }
}
</script>

<style scoped>
</style>
