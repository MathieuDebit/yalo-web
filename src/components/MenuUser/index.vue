<template>
  <li class="yalo-menu-user">
    <div
      class="yalo-menu-user-avatar"
      :style="{backgroundImage: 'url(' + getUserAvatar + ')'}"
    />

    <div class="yalo-menu-user-name">{{ user.name }}</div>
  </li>
</template>

<script src="./script.js" />
<style src="./style.css" scoped />
