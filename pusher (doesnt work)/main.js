var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '738348',
  key: '73c4e5956370c5c31b20',
  secret: '675904d7e672cd0a06c0',
  cluster: 'eu',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});