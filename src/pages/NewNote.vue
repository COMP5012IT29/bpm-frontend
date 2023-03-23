<template>
  <div style="height:100%">
    <Topbar></Topbar>
    <v-row class="ma-0" style="height:100%">
      <v-col cols="2" class="pa-0">
        <Menu></Menu>
      </v-col>
      <v-col cols="10" class="pa-0">
        <note-info :note="note" @updateNote="onNoteUpdate">></note-info>
        <Editor :note="note" @updateContent="onContentUpdate"></Editor>
        <div style="position: absolute; bottom: 20px; right: 20px;">
          <v-row style="width: 1000px">
            <v-text-field class="ma-2" v-model="note.hint" label="Password Hint" dense></v-text-field>
            <v-text-field class="ma-2" v-model="note.password" label="Password" dense></v-text-field>
            <v-btn color="red" text @click="deleteNote()">Delete</v-btn>
            <v-btn color="green" text @click="saveNote">Save</v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Editor from "@/components/NewNoteEditor.vue";
import Topbar from "@/components/topbar.vue";
import Menu from "@/components/Menu.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import NoteInfo from "@/components/NewNoteInfo.vue";
import router from "@/router";

export default {
  components: { NoteInfo, Menu, Topbar, Editor },
  name: "NewNote",
  setup() {
    const store = useStore();
    const note = ref({
      title: "",
      content: "",
      tag: "",
      date: "",
      stared: false,
      password: "",
      hint:""
    });
    function onNoteUpdate(updatedNote) {
      note.value = updatedNote;
    }
    function onContentUpdate(updatedContent) {
      note.value.content = updatedContent;
    }

    const saveNote = async () => {
      try {
        const response = await axios.post(store.state.host + 'upload/',
            {
              "username": store.getters.getUsername,
              "password":note.value.password,
              "title":note.value.title,
              "content":note.value.content,
              "hint":note.value.hint,
              "tag":note.value.tag,
            }, {
              headers: {
                Authorization: 'Bearer ' + store.getters.getToken
              }
            }
        );
        alert('Successfully add new note')
        router.go(0);
      } catch (error) {
        console.error(error);
      }
    };

    return {
      note,
      onNoteUpdate,
      onContentUpdate,
      saveNote,
    };
  },
};
</script>

<style scoped>
.v-btn{
  margin:10px;
}
</style>
