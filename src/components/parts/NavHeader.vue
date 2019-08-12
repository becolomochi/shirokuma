<template lang="pug">
  nav.header_nav
    ul.header_nav-list
      li.header_nav-item
        router-link(to="/").header_nav-link Home
      li.header_nav-item
        router-link(to="/about").header_nav-link About
      li.header_nav-item
        router-link(to="/works").header_nav-link Works
      li.header_nav-item
        router-link(to="/contact").header_nav-link Contact
</template>
