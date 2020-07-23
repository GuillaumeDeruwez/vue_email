<template>
    <div>
        <md-list>
            <md-list-item v-for="message in messages" :key="`${message.id}`" v-on:click="assignId(message.id)">
                <div>
                    <span>{{message.messageTitle}}</span>
                    <br>
                    <span>{{message.messageBody}}</span>
                </div>
            </md-list-item>
        </md-list>
        <Message message-id="assignedId" v-if="assignedId"/>
    </div>
</template>

<script>
import Message from '../components/Message'

export default {
  name: 'Inbox',
  components: {
    Message
  },
  data: function () {
    return {
      messages: [{ messageTitle: 'title of message', messageBody: 'truncated body', id: 'id of message' }], // array of object containing simplified message, assuming no full data sent back
      assignedId: ''
    }
  },
  created: function () {
    // write function to fetch list of all messages and assign them to data, possibly via websocket
    // this.connection = new websocket
    // this.connection.onconnect function
    // this.connection.onmessage function
  },
  methods: {
    assignId (id) {
      this.assignedId = id
    }
  }
}
</script>
