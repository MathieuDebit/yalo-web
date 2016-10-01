<template>
  <div class="yalo-menu">
    <h1 class="yalo-menu-title">
      yal<span class="yalo-menu-title-o">o</span>
    </h1>

    <div class="yalo-menu-participants">
      <div class="yalo-menu-participants-count">{{ usersCount }}</div>

      {{ participantDisplay }}
    </div>

    <ul class="yalo-menu-userlist">
      <li class="yalo-menu-user" v-for="user in state.users">
        <div class="yalo-menu-user-avatar"></div>

        <div class="yalo-menu-user-name">{{ user.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" scoped />
