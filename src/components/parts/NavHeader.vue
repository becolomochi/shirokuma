<template lang="pug">
  nav.nav
    ul.nav_list
      li.nav_item
        router-link(to="/").nav_link Home
      li.nav_item
        router-link(to="/about").nav_link About
      li.nav_item
        router-link(to="/works").nav_link Works
      li.nav_item
        router-link(to="/contact").nav_link Contact
</template>
