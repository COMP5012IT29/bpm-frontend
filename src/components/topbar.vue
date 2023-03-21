<template>
  <v-app-bar app class="top-bar">
    <v-btn icon >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn icon @click="newNote">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-text-field class="search-bar"
                  solo
                  hide-details
                  flat
                  placeholder="Search"
                  append-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from "axios";
import router from "@/router";
export default {
  name: 'topbar',
  setup() {
    const store = useStore();
    function newNote(){
      store.commit('del_currentnotepwd');
      store.commit('del_currentnote');
      router.push('/newnote');
    }
    return {
      newNote,
    }
  },
}

</script>

<style scoped>
.v-app-bar {
  background-color: #1E415F !important;
}
v-text-field{
  background-color: #FFFFFF !important;
}
.search-bar{
  background-color: #ffffff;
  margin-right: 20px;
  /*z-index: 1;*/
}
.v-icon {
  color: white;
  font-size: 24px;
}
.v-btn{
  margin:0 10px 0 0;
}
</style>