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
            <v-btn color="red" text @click="recycleNote">Delete</v-btn>
            <v-btn color="green" text @click="saveNote">Save</v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Editor from "@/components/CurNoteEditor.vue";
import Topbar from "@/components/topbar.vue";
import Menu from "@/components/Menu.vue";
import {computed, onMounted, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";
import NoteInfo from "@/components/NoteInfo.vue";
import router from "@/router";

export default {
  components: {computed, NoteInfo, Menu, Topbar, Editor},
  name: "Note",
  setup() {
    const store = useStore();
    const note = ref({
      title: "",
      content: "",
      tag: "",
      date: "",
      stared: false,
      password: store.getters.getCurrentNotePwd,
      hint:""
    });
    const computedNotes = computed(() => note.value);

    onMounted(() => {
      axios.post(store.state.host + 'viewNote/', {
        note_id: store.getters.getCurrentNote,
        password: store.getters.getCurrentNotePwd,
      }).then((res) => {
        if (res.data.msg === 'success') {
          note.value = res.data.data
          note.value.password = store.getters.getCurrentNotePwd
          note.value.content = note.value.content || '';
        }
        else if (res.data.msg === 'Wrong password'){
          alert('Wrong password')
        }
      }).catch((err) => {
        console.log(err);
      });

      axios.get(store.state.host + 'showHint?note_id=' + store.getters.getCurrentNote)
          .then(response => {
            note.value.hint = response.data.data;
          })
          .catch(error => {
            console.log(error);
          });
    });

    function onNoteUpdate(updatedNote) {
      note.value = updatedNote;
    }
    function onContentUpdate(updatedContent) {
      note.value.content = updatedContent;
    }

    const saveNote = async () => {
      try {
        const response = await axios.post(store.state.host + 'editNote/',
            {
              "note_id": store.getters.getCurrentNote,
              "password":note.value.password,
              "title":note.value.title,
              "content":note.value.content,
              "hint":note.value.hint,
              "tag":note.value.tag,
            }
        );
        alert('Successfully edit the note')
        router.go(0);
      } catch (error) {
        console.error(error);
      }
    };

    function recycleNote(){
        const response = axios.post(store.state.host + 'recycle/',
            {
              "note_id": parseInt(store.getters.getCurrentNote)
            }
        ).then(response => {
          if(response.data.msg==='success'){
            alert('Successfully put the note in the trash')
            setTimeout(() => {
              store.commit('del_currentnotepwd')
              store.commit('del_currentnote')
              router.push('/newnote');
            }, 500);
          }
        }).catch(error => {
          console.log(error);
        });
      }

    return {
      note: computedNotes,
      onNoteUpdate,
      saveNote,
      onContentUpdate,
      recycleNote,
    }
  }
}
</script>

<style scoped>
.v-btn{
  margin:10px;
}
</style>
