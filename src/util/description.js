export default {
  mounted() {
    let { description } = this.$options
    let meta = document.getElementsByTagName('meta')

    if (description) {
      for (var i = 0; i < meta.length; i++) {
        if (meta[i].name.toLowerCase() == 'description') {
          meta[i].content = description
        }
      }
    }
  }
}
