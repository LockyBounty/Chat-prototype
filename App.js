
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Pusher from 'pusher-js/react-native';

let p1 = "73c4e59563"
let p2 = "70c5c31b20"

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher(p1+p2, {
  cluster: 'eu',
  forceTLS: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(JSON.stringify(data));
});





export default class App extends Component {
  render() {
    return (
      <View>
        <Text> keketteInComponent </Text>
      </View>
    )
  }
}
