<template>
  <li class="yalo-feed-message-item" :class="myMessage">
    <div class="yalo-feed-message-item-avatar"></div>

    <div class="yalo-feed-message-item-wrapper">
      <p class="yalo-feed-message-item-time">
        {{ message.user.name }}, {{ getMessageDate }}
      </p>

      <div class="yalo-feed-message-item-content">
        {{ message.text }}
      </div>
    </div>
  </li>
</template>

<script src="./script.js" />
<style src="./style.css" scoped />
