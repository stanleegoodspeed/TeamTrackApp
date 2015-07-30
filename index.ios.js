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
var Child1 = require('./Components/Child1');
var Child2 = require('./Components/Child2');

function save(navigator) {
  console.log('saved to server!');
  navigator.push(newRandomRoute());
};

var FeedView = React.createClass({

    render: function() {
        return (
            <View style={styles.container}>
                <Text>
                    Feed View!
                </Text>
            </View>
        );
    }
});


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
                      {previousRoute.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
              );
  },


  RightButton: function(route, navigator, index, navState) {
        
        var myRoutes = navigator.getCurrentRoutes();
        console.log('index is: ' + index);

        var nextRoute = myRoutes[index-1];
        console.log('next route: ' + nextRoute);

        return (
            <TouchableOpacity
              onPress={() => navigator.push(nextRoute)}>
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
        initialRouteStack={[{name: 'My Second Scene', index: 1, component: Child2}, {name: 'My Third Scene', index: 2, component: FeedView},{name: 'My First Scene', index: 0, component: Child1}]}
            renderScene={(route, navigator) => {

              if (route.component) {
                  return React.createElement(route.component, { navigator });
              }

            }}
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
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop:300,
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

//initialRouteStack={[{name: 'My First Scene', index: 0, component: Child},{name: 'My Second Scene', index: 1, component: Child2}]}

AppRegistry.registerComponent('TeamTrackApp', () => TeamTrackApp);

