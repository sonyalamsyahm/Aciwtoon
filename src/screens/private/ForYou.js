import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Image} from 'native-base';
import {backgroundImage} from '../globalconstant';

export default class ForYou extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={{uri: backgroundImage}}>
          <Text> textInComponent </Text>
        </ImageBackground>
      </View>
    );
  }
}
