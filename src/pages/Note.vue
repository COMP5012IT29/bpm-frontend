<template>
  <div>
    <topbar></topbar>
    <Menu></Menu>

    <div>
      <!--      <b style="font-size: 36;">Title:</b>-->
      <div class="editable-title" contenteditable="true">NOTE1</div>
    </div>

    <div>
      <b>Date:</b>
      <div class="editable-date" contenteditable="true">24/2/2023</div>
    </div>

    <div>
      <b>Tag:</b>
      <div class="editable-Tag" contenteditable="true">Tag1; Tag2; Tag3; Tag4</div>
    </div>

    <div>
      <editor></editor>
    </div>

    <div>
      <button class="star-btn"><i class="fa fa-star"></i></button>
    </div>
    <!--    <script src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"></script>-->
    <div>
      <button class="rightbottom-deletebtn">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        Delete
      </button>

      <button class="rightbottom-savebtn">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
        Save
      </button>
    </div>
  </div>
</template>

<script>
import Editor from "@/components/editorDemo.vue";
import Topbar from "@/components/topbar.vue";
import Menu from "@/components/Menu.vue";
export default {
  components: {Menu, Topbar, Editor},
  name: "Note"
}
</script>

<style scoped>
topbar{
  width:200px;
  height:50px
}
/* 设置星形按钮样式 */
.star-btn {
  margin-left: 10px;
  padding: 12px;
  background-color: #ffffff;
  color: gold;
  border: none;
  border-radius: 90%;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
/* 设置星形按钮悬停状态样式 */
.star-btn:hover {
  background-color: #6eb3e4;
  color: #fff;
}
/* 设置右下角底部delete按钮样式 */
.rightbottom-deletebtn {
  flex: 1;
  background-color: #c71010;
  color: #ffffff;
  border: none;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.rightbottom-deletebtn:hover {
  background-color: #de1313;
  color: #fff;
}
/* 设置右下角delete按钮中的垃圾桶图标 */
.icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  /*background: url('path/to/trash-icon.png') no-repeat center center;*/
  margin-right: 5px;
}
/* 设置右下角底部save按钮样式 */
.rightbottom-savebtn {
  flex: 1;
  background-color: #05aa1b;
  color: #ffffff;
  border: none;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.rightbottom-savebtn:hover {
  background-color: #06ba1d;
  color: #fff;
}
/* 设置Title框样式 */
.editable-title {
  display: inline-block;
  padding: 10px;
  border: 1px solid #808080;
  border-radius: 10px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  width: 500px;
}
.editable-title:focus {
  border-color: #0066cc;
  box-shadow: 0 0 5px #0066cc;
}
/* 设置Date框样式 */
.editable-date {
  display: inline-block;
  padding: 10px;
  border: 1px solid #808080;
  border-radius: 10px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  width: 120px;
}
.editable-date:focus {
  border-color: #0066cc;
  box-shadow: 0 0 5px #0066cc;
}
/* 设置Note text框样式 */
.editable-note {
  display: inline-block;
  padding: 10px;
  border: 1px solid #808080;
  border-radius: 16px;
  background-color: #fff;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  width: 1250px;
  height: 630px;
}
.editable-note:focus {
  border-color: #0066cc;
  box-shadow: 0 0 5px #0066cc;
}
</style>