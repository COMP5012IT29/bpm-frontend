<template>
  <div>
    <v-form @submit.prevent="performSearch">
      <v-select
          v-model="searchType"
          :items="[1, 2, 3]"
          label="Search Type"
          outlined
      ></v-select>
      <v-text-field
          v-model="keyword"
          label="Keyword"
          outlined
      ></v-text-field>
      <v-btn type="submit" color="primary">Search</v-btn>
    </v-form>
    <v-list>
      <v-list-item v-for="note in searchResults" :key="note.id">
        <v-list-item-title>{{ note.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ note.date }} - {{ note.tag }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from "@/router";
export default {
  name: "SeachCard",
  setup() {
    const searchType = ref(1);
    const keyword = ref('title2');
    const searchResults = ref([]);

    const performSearch = async () => {
      searchResults.value = await searchNotes(searchType.value, keyword.value);
    };
    const searchNotes = async (type, keyword) => {
      try {
        const response = await axios.post('http://note.chnnhc.com/api/search', {
          'type':searchType,
          'keyword':keyword,
        });
        if (response.data.status === 0) {
          return response.data.data;
        } else {
          throw new Error(response.data.msg);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return {
      searchNotes,
      searchType,
      keyword,
      searchResults,
      performSearch,
    };
  },
};
</script>

<style scoped>

</style>