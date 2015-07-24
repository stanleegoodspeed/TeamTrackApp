/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} = React;

var cssVar = require('cssVar');
var CreateRaceComponent = require('./CreateRace');

var MySceneComponent = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>My Test Text</Text>
        <TouchableOpacity
          onPress={() => this.props.myNavigator.push(newRandomRoute())}>
          <View>
            <Text>
              Next
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => save(this.props.myNavigator)}>
          <View>
            <Text>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

function save(navigator) {
  // push text input to server
  // return new raceID
  // go to next screen
  console.log('saved to server!');
  navigator.push(newRandomRoute());
};



var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <View style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            {previousRoute.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}>
        <View style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            Next
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        Team Track
      </Text>
    );
  },

};


function newRandomRoute() {
  return {
    title: '#' + Math.ceil(Math.random() * 1000),
  };
}


var TeamTrackApp = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <CreateRaceComponent myNavigator={navigator}/>    
        }
        navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
              style={styles.navBar} />
        } />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: 'grey',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  },
});

AppRegistry.registerComponent('TeamTrackApp', () => TeamTrackApp);

// <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
