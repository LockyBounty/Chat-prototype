import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import DisplayContainer from './components/DisplayContainer';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  state = {
    currentPage: 'home'
  }
  setPage = (page) => {
    this.setState({
      currentPage: page
    })
  }
  render() {
    return (
     
        <View style={styles.container}>
          
          <DisplayContainer
          display={this.state.currentPage}/>
          
          <Navbar
          changePage = {this.setPage}
          currentPage= {this.state.currentPage}
          />
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});
