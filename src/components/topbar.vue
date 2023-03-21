<template>
  <v-app-bar app class="top-bar">
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn icon @click="newNote">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-row>
      <v-col cols="2">
        <v-select
            style="background-color: white"
            label="type"
            v-model="searchType"
            :items="[
              'Title',
              'Tag',
              'Date'
            ]"

            outlined
        ></v-select>
      </v-col>
      <v-col cols="10">
        <v-text-field
            class="search-bar"
            solo
            hide-details
            flat
            placeholder="Search"
            v-model="keyword"
        >
          <template #append-inner>
            <v-btn icon @click="commitSearchInfo">
              <v-icon style="color: #1E415F">mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>

      </v-col>
    </v-row>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import {ref} from 'vue';
import {useStore} from 'vuex';
import axios from "axios";
import router from "@/router";

export default {
  name: 'topbar',
  setup() {
    const store = useStore();
    const searchType = ref(store.getters.getType);
    const keyword = ref(store.getters.getKeyword);
    const searchResults = ref([]);

    function newNote() {
      store.commit('del_currentnotepwd');
      store.commit('del_currentnote');
      router.push('/newnote');
    }

    function logout() {
      store.commit('del_username');
      store.commit('del_token');
      store.commit('del_currentnote');
      store.commit('del_currentnotepwd');

      router.push('/login');
    }

    function commitSearchInfo() {
      store.commit('set_type', searchType.value);
      store.commit('set_keyword', keyword.value);
      router.push('/search');
      // router.push({name: 'search', params: { type: searchType.value, keywords:keyword.value }})
    }

    return {
      newNote,
      logout,
      searchType,
      keyword,
      searchResults,
      commitSearchInfo,
    }
  },
}

</script>

<style scoped>
.v-app-bar {
  background-color: #1E415F !important;
}

v-text-field {
  background-color: #FFFFFF !important;
}

.search-bar {
  background-color: #ffffff;
  margin-right: 20px;
  /*z-index: 1;*/
}

.v-icon {
  color: white;
  font-size: 24px;
}

.v-btn {
  margin: 0 10px 0 0;
}
</style>