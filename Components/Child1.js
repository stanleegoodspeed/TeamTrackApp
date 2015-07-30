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

var Child = React.createClass({

  getInitialState: function() {
    return {
      raceName: '',
    };

  },

  render: function() {
    return (
      
          <View>
            <TextInput
              style={styles.textBox}
              placeholder={this.props.name}
              onChangeText={(text) => this.setState({raceName: text})}
              value={this.state.text} />
          </View>
    );
  }
});

var CreateRaceComponent = React.createClass({

  render: function() {
    return (

          <View style={styles.container}>
            <View style={{paddingTop:200}} >
              <Child name={"Child1"} style={styles.child} />
              <Child name={"Child2"} style={styles.child} />
            </View>
          </View>
    );
  }
});

var styles = StyleSheet.create({

  container: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  child: {
    alignSelf: 'auto'
  },
  
  textBox: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 100,
    height:40,
    marginBottom: 20,
    textAlign: 'center',
  },

});


module.exports = CreateRaceComponent;

