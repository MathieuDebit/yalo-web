<template>
  <div class="yalo-feed">
    <ul class="yalo-feed-messages-list">
      <Message
        v-for="message in messages"
        :message="message"
      />
    </ul>
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" scoped />
