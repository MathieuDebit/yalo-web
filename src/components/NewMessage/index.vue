<template>
  <form class="yalo-new-message" @submit="onFormSubmit">
    <div class="yalo-new-message-wrapper">
      <button class="yalo-new-message-attachment" />

      <input
        type="text"
        class="yalo-new-message-input"
        v-model="message"
        placeholder="Your message..."
        autofocus
      >
    </div>

    <button class="yalo-new-message-send" type="submit" />
  </form>
</template>

<script src="./script.js" />
<style src="./style.css" scoped />
