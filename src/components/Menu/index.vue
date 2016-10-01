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
      <MenuUser
        v-for="user in state.users"
        :user="user"
      />
    </ul>
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" scoped />
