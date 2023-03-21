<template>
  <div class="menu">
    <v-btn color="transparent" @click="sortList" style="margin-bottom: 10px">
      <v-icon>mdi-sort</v-icon>
    </v-btn>
    <v-list class="menu-list">
      <v-list-item
          v-for="(note, index) in notes"
          style="margin-bottom: 8px;
          background-color: #66CCFF;"
          :key="index"
          @click="set_currentnote(note.id)"
      >
        <v-list-item-title style="text-align: center;">{{ note.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="menu-buttons" @click="gotoDeletePage">
      <v-btn class="menu-button" color="secondary">
        <v-icon left>
          mdi-delete-forever
        </v-icon>
        Recycle
      </v-btn>
      <v-btn class="menu-button" v-show="starKindNote" @click="switchStarList" color="primary">
        <v-icon left>mdi-book</v-icon>
        Note
      </v-btn>
      <v-btn class="menu-button" v-show="!starKindNote" @click="switchStarList" color="yellow">
        <v-icon left>mdi-star</v-icon>
        Star
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from "@/router";
export default {
  setup() {
    const notes = ref([]);
    const store = useStore();
    const username = store.getters.getUsername;
    const starKindNote = ref(false);
    const isStarKindNote = computed(() => starKindNote.value);
    const computedNotes = computed(() => notes.value);
    const ascendingOrder = ref(true);

    onMounted(() => {
      getNoteList(1)
    });

    function getNoteList(type){
      axios.get(store.state.host + 'showNoteList?username=' + username + '&type=' + type)
          .then(response => {
            notes.value = response.data.data;

          })
          .catch(error => {
            console.log(error);
          });
    }

    function set_currentnote(noteid) {
      store.commit('set_currentnote', noteid);
      router.push('/pwd');
    }

    function switchStarList(){
      starKindNote.value = !starKindNote.value

      if(starKindNote.value===false) {
        getNoteList(1)
      }
      if(starKindNote.value===true){
        getNoteList(2)
      }
    }

    function sortList(){
      ascendingOrder.value = !ascendingOrder.value;

      if (ascendingOrder.value) {
        notes.value.sort((a, b) => a.id - b.id);
      } else {
        notes.value.sort((a, b) => b.id - a.id);
      }
    }

    function gotoDeletePage(){
      router.push('/delete')
    }
    return {
      notes: computedNotes,
      set_currentnote,
      starKindNote: isStarKindNote,
      switchStarList,
      sortList,
      gotoDeletePage,
    };
  },
};
</script>

<style scoped>
.menu {
  background-color: #3377aa;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
}

.menu-list {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  background-color: #3377aa;
}

.menu-buttons {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 16px;
}
.v-icon {
  color: white;
  font-size: 24px;
}

.menu-button {
  flex: 1;
  text-align: center;
  margin:10px;
}
</style>
