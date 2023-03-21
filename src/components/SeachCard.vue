<template>
  <div>
    <v-list>
<!--      <v-list-item v-for="note in searchResults" :key="note.id" >-->
        <v-list-item v-for="note in searchResults" :key="note.id" @click="set_currentnote(note.id)">
        <v-list-item-title>{{ note.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ note.date }} - {{ note.tag }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';
import {ref, onMounted, onActivated, watch, watchEffect, computed} from 'vue';
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
        const response = await axios.post('http://note.chnnhc.com/api/search/', {
          'type':parseInt(type, 10),
          'keyword':keyword,
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

</style>