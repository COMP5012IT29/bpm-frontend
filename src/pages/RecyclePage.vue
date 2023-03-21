<template>
  <div style="height:100%">
    <Topbar></Topbar>
    <v-row class="ma-0" style="height:100%">
      <v-col cols="2" class="pa-0">
        <Menu></Menu>
      </v-col>
      <v-col cols="10" class="pa-0">
        <RecycleBinCard />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Editor from "@/components/CurNoteEditor.vue";
import Topbar from "@/components/topbar.vue";
import Menu from "@/components/Menu.vue";
import RecycleBinCard from "@/components/RecycleBinCard.vue";
export default {
  components: { RecycleBinCard, Menu, Topbar, Editor},
  name: "RecyclePage"
}
</script>

<style scoped>

</style>