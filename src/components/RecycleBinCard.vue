<template>
  <div>
    <v-list v-if="notes.length">
      <v-list-item v-for="note in notes" :key="note.id">
        <v-row>
          <v-col cols="8">
            <v-list-item-title>{{ note.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ note.date }} - {{ note.tag }}</v-list-item-subtitle>
          </v-col>
          <v-col cols="4" class="text-right">
            <v-btn color="green" @click="restoreNote(note.id)">Recovery</v-btn>
            <v-btn color="red" @click="deleteNotePermanently(note.id)">Destroy</v-btn>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
    <div v-else class="empty-result">
      <h3>Recycle Bin is empty</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref, onMounted, computed} from 'vue';
import {useStore} from 'vuex';
import router from "@/router";

export default {
  name: "RecycleCard",
  setup() {
    const store = useStore();
    const notes = ref('')
    const username = store.getters.getUsername
    const computedNotes = computed(() => notes.value);

    function getDeleteNoteList() {
      axios.get(store.state.host + 'showNoteList?username=' + username + '&type=' + 3, {
        headers: {
          Authorization: 'Bearer ' + store.getters.getToken
        }
      })
          .then(response => {
            notes.value = response.data.data;
          })
          .catch(error => {
            console.log(error);
          });
    }

    async function restoreNote(noteId) {
      try {
        const response = await axios.post(store.state.host + 'recoverNote/', {
          note_id: noteId,
        }, {
          headers: {
            Authorization: 'Bearer ' + store.getters.getToken
          }
        }
        );
        if (response.data.status === 0) {
          alert('Recover note successfully');
          await router.go(0);
        } else {
          console.error('Error recovering note:', response.data.msg);
        }
      } catch (error) {
        console.error('Error recovering note:', error);
      }
    }

    async function deleteNotePermanently(noteId) {
      try {
        const response = await axios.delete(store.state.host + 'deleteNote/', {
          data: {
            note_id: noteId
          },
          headers: {
            Authorization: 'Bearer ' + store.getters.getToken
          }
        });

        if (response.data.status === 0) {
          alert('Note deleted successfully');
          await router.go(0);
        } else {
          console.error('Error deleting note:', response.data.msg);
        }
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }


    onMounted(() => {
      getDeleteNoteList()
    });

    return {
      notes: computedNotes,
      restoreNote,
      deleteNotePermanently
    };
  },
};
</script>

<style scoped>
.v-btn {
  margin-right: 10px;
  font-size: 10px;
}

.empty-result {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
}
</style>
