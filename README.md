# vue_email

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Question needed to answer to finalize design
**Sorting**: How abstracted to the webservices is this sort of logic? Is there a "filtering option" included in the webservice to make it return the data in a specific order (sort by in the backend) or should the sorting be done front end side ?

**Ongoing updates**: For the inbox, does the webservice takes the form of a websocket ? if so, does it initially send back the data (see first point) and then on further change simply send the new email received alone to be appended to array of data via the frontend or doesit send back a completely new array each time ?
Potentially using same websocket endpoint with argument to get new message for other categories as well (spam maybe?)

**Reminders**: purpose of this ? Simply a list of tags or does it require notification integrations ?

**Other categories**: Doubtful that draft and sent mail require websocket connection, but spam and others might. Ask for confirmation. Possible to use a single endpoint, same as message the one used to get all inbox messages but with arguments to specify message type. To check.

**Packages and libraries to be included in this project**: Vue, vue router, axios, lodash, moment. Other packages may be necessery. Probably going to use Vue material as framework for actual display styling. No great need to use Vuex, most data should be offloaded to backend, simple store pattern may be enough.

**List of endpoints being forseen**:
- getProfile (get data from profile)
- saveProfile (Post or put endpoint to modify profile data)
(Note: entire separate system required to change passwords, ask for more image to get an idea of how the profile and password reset need to look like, lacking info)

- getMessage (get array of incoming message. See note about filtering and sorting as well as data completeness, websocket?)
- getContact (array of contacts associated with account)
- addContact (Post to adding contact)
- deleteMessage
- replytoMessage (with option for reply to all as detailled above)
- newMessage

**In term of architecture**:
Two possible vue, home containing nested route for inbox and other categories of messages. And profile.
Sub routes as components, reusing message component to display all type of messages (inbound and outboun)
Possible to reuse sub route component named inbox for other categories if design is nearly identical.
Composing new message using a separate sub route and component.
