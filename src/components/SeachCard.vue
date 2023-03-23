<template>
  <div>
    <v-list v-if="searchResults.length">
        <v-list-item v-for="note in searchResults" :key="note.id" @click="set_currentnote(note.id)">
        <v-list-item-title>{{ note.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ note.date }} - {{ note.tag }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <div v-else class="empty-result">
      <h3>Search result is empty</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref, onMounted, onActivated, watch, watchEffect, computed, reactive} from 'vue';
import { useStore } from 'vuex';
import router from "@/router";
export default {
  name: "SeachCard",
  setup() {
    const store = useStore();
    const searchType = ref(store.getters.getType);
    const keyword = ref(store.getters.getKeyword);
    const searchResults = ref([]);
    const computedSearchResults = computed(() => searchResults.value);


    onMounted(() => {
      performSearch();
    });
    const performSearch = async () => {
      let type = -1
      if(searchType.value==='Title')
        type = 1
      if(searchType.value==='Tag')
        type = 2
      if(searchType.value==='Date')
        type = 3
      searchResults.value = await searchNotes(type, keyword.value);
    };
    const searchNotes = async (type, keyword) => {
      try {
        const response = await axios.post(store.state.host + 'search/', {
          'type':parseInt(type, 10),
          'keyword':keyword,
        }, {
          headers: {
            Authorization: 'Bearer ' + store.getters.getToken
          }
        });
        if (response.data.msg === 'Success') {
          return response.data.data;
        } else {
          throw new Error(response.data.msg);
        }
      } catch (error) {
        console.error(error);
      }
    };

    function set_currentnote(noteid) {
      store.commit('set_currentnote', noteid);
      router.push('/pwd');
    }

    return {
      searchNotes,
      searchType,
      keyword,
      searchResults: computedSearchResults,
      performSearch,
      set_currentnote,
    };
  },
};
</script>

<style scoped>
.empty-result {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
}
</style>