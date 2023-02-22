<template>
  <div>
    <div ref="editor" :class="'editor' + mode" :contenteditable="!readonly"></div>
    <button @click="submitContent">提交</button>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'readonly'
    },
    readonly: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.quill = new Quill(this.$refs.editor, {
      modules: {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['link', 'image'], [{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'align': [] }], [{ 'color': [] }, { 'background': [] }]]
      },
      theme: 'snow'
    })

    if (this.content) {
      this.quill.root.innerHTML = this.content
    }

    if (!this.readonly) {
      this.quill.on('text-change', () => {
        this.$emit('update:content', this.quill.root.innerHTML)
      })
    }
  },
  methods: {
    submitContent() {
      const content = this.quill.root.innerHTML
      this.$axios({
        method: "post",
        url: "upload/",
        data: {
          username: 'test',
          password: 'a',
          title: 'title3',
          hint: 'hint',
          tag: 'default',
          content: content
        },
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.editor {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 300px;
  overflow-y: auto;
}
</style>
