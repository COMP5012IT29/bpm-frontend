<template>
  <div>
  <div class="search-container">
    <span class="left-text">begonia_personal_notes</span>
    <div class="btn-container">

      <button class="left-btn">
        <i class="icon fa fa-bars fa-fw " aria-hidden="true"></i>
        Menu
      </button>

      <button class="left-btn">
        <i class="icon fa fa-plus fa-fw portfolio-add-icon smallicon" title="Export to portfolio" role="img" aria-label="Export to portfolio"></i>
        New
      </button>
    </div>

    <input type="text" class="search-box" placeholder="Search BPN">

    <button class="search-btn">
      <i class="fa fa-search"></i>
      Search
    </button>
    <!-- <button class="star-btn"><i class="fa fa-star"></i></button> -->
  </div>
  </div>
</template>

<script>
export default {
  name: "topbar"
}
</script>

<style scoped>
/* 设置搜索框容器样式 */
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #2377b3;
  color: #fff;
  z-index: 9999;
}
/* 设置搜索框样式 */
.search-box {
  width: 500px;
  padding: 10px;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
/* 设置搜索按钮样式 */
.search-btn {
  margin-left: 10px;
  padding: 10px;
  background-color: #fff;
  color: #0072C6;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
/* 设置搜索按钮悬停状态样式 */
.search-btn:hover {
  background-color: #6eb3e4;
  color: #fff;
}
/* 设置按钮容器样式 */
.btn-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
  justify-content: flex-start;
}
/* 设置左侧按钮样式 */
.left-btn {
  margin-right: 10px;
  padding: 10px;
  background-color: #fff;
  color: #0072C6;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
/* 设置左侧按钮悬停状态样式 */
.left-btn:hover {
  background-color: #6eb3e4;
  color: #fff;
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

.left-text {
  margin-right: 10px;
  font-size: 1.2em;
  font-weight: bold;
}
</style>