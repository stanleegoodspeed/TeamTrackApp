'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} = React;

var CreateRaceComponent = React.createClass({

  getInitialState: function() {
    return {
      raceName: '',
    };
  },

  render: function() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.default}
          onChangeText={(text) => this.setState({raceName: text})}
          value={this.state.text} />

        <TouchableOpacity
          onPress={() => myLog(this.state.raceName)}>
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

function myLog(data) {
  console.log(data);
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 20,
  },
  inputBox: {
    height:40,
    width:300,
    borderColor: 'gray',
    borderWidth: 1
  },
});

module.exports = CreateRaceComponent;

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
