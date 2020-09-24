import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Image,
  Button,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const back = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.toolbar}>
      <Icon
       name="arrow-left"
        style={{fontSize: 24, color: 'white', marginLeft: 10}}
        onPress={() => props.navigation.goBack(null)}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2c3b4c',
    padding: 15,
    width: '100%',

    flexDirection: 'row',
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});

export default withNavigation(back);