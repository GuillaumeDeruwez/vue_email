<template>
  <div>
      <h1>{{messageTitle}}</h1>
      <p>{{messageSender}}</p>
      <span v-for="(recipient, index) in messageRecipient" :key="`recipient-${index}`">{{recipient}}, </span>
      <p>{{messageBody}}</p>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    messageId: String
  },
  data: function () {
    return {
      messageTitle: 'test',
      messageSender: 'email@email.com',
      messageRecipient: ['email@email.com', 'email@email.com'],
      messageBody: 'test again'
    }
  },
  created: function () {
    // write function to fetch message here using axios by using props id to call specific message and pass this to data function for display.
  }
}
</script>
