import React from 'react';
import { View, Text ,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Opening');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
         <Animatable.Image
        animation="bounce"
            style={{height: '10%', width:'80%', margin: 8}}
            source={require('../assets/icons/VFast-white.png')}
          />

      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3b4c'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;