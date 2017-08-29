export default {
  mounted() {
    let { description } = this.$options
    var meta = document.getElementsByTagName("meta")

    for (var i=0; i<meta.length; i++) {
        if (meta[i].name.toLowerCase()=="description") {
            meta[i].content = description
        }
    }
    if (description) {
      description = typeof description === 'function' ? description.call(this) : description
      document.title = `${title} - becolomochi's portfolio`
    }
  }
}
