<template>
  <div style="height:100%">
    <Topbar></Topbar>
    <v-row class="ma-0" style="height:100%">
      <v-col cols="2" class="pa-0">
        <Menu></Menu>
      </v-col>
      <v-col cols="10" class="pa-0" style="background-color: #99CCFF ">
        <NotePwdCard/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Editor from "@/components/CurNoteEditor.vue";
import Topbar from "@/components/topbar.vue";
import Menu from "@/components/Menu.vue";
import NotePwdCard from "@/components/NotePwdCard.vue";
export default {
  components: {NotePwdCard, Menu, Topbar, Editor},
  name: "Note"
}
</script>

<style scoped>
</style>
