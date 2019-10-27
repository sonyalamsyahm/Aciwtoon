import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Container, Content, Item, Input, Label, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import {myBackgroundImage} from '../globalconstant';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputEmail: false,
      inputPassword: false,
      showPass: true,
      icon: 'eye-slash',
      email: false,
      password: false,
    };
  }

  handleBtnLogin = () => {};

  validationOfEmail = input => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({inputEmail: input});
    if (reg.test(input) === false) {
      this.setState({email: false});
    } else {
      this.setState({email: true});
    }
  };

  validationOfPassword = input => {
    let word = input.length;
    this.setState({inputPassword: input});
    if (word < 2) {
      this.setState({password: false});
    } else {
      this.setState({password: true});
    }
  };

  btnLogin = () => {
    let {email, password} = this.state;
    if (email === true && password === true) {
      return false;
    } else {
      return true;
    }
  };

  handleSecureText = () => {
    if (this.state.showPass) {
      this.setState({showPass: false, icon: 'eye'});
    } else {
      this.setState({showPass: true, icon: 'eye-slash'});
    }
  };

  render() {
    console.log(myBackgroundImage);
    const textEnableBtn = !this.btnLogin()
      ? styles.textEnable
      : styles.textDisable;
    const enableBtn = !this.btnLogin()
      ? styles.TouchableOpacityEnable
      : styles.TouchableOpacityDisble;
    return (
      <Container style={StyleSheet.Container}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={{
            uri: myBackgroundImage,
          }}>
          <View style={[styles.View]}>
            <Image
              source={{
                uri: 'https://i.ibb.co/5L7dCD8/output-onlinepngtools.png',
              }}
              style={{width: 380, height: 150, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={[
              styles.SecView,
              //   {backgroundColor: 'rgba(255,255,255,1)'},
            ]}>
            <Text style={{fontSize: 20, marginBottom: 30}}>
              Login with your account
            </Text>
            <Item regular style={styles.Form}>
              <Icon name="envelope" style={styles.Icon} />
              <Input
                placeholder="Email"
                onChangeText={input => this.validationOfEmail(input)}
              />
            </Item>
            <Item regular style={styles.Form}>
              <Icon name="key" style={styles.Icon} />
              <Input
                secureTextEntry={this.state.showPass}
                placeholder="Password"
                onChangeText={input => this.validationOfPassword(input)}
              />
              <Icon
                onPress={() => this.handleSecureText()}
                style={[styles.Icon, {marginRight: 20}]}
                name={this.state.icon}
              />
            </Item>
            <TouchableOpacity
              disabled={this.btnLogin()}
              style={[enableBtn, styles.TouchableOpacity]}>
              <Text style={[styles.font, textEnableBtn]}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  View: {
    flex: 1,
    alignItems: 'center',
  },
  SecView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Form: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: 5,
  },
  Label: {
    marginLeft: 30,
  },
  Icon: {
    fontSize: 20,
    marginLeft: 5,
  },
  TouchableOpacity: {
    width: Dimensions.get('window').width - 30,
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  TouchableOpacityEnable: {
    backgroundColor: 'rgb(187,222,251)',
  },
  TouchableOpacityDisble: {
    backgroundColor: 'rgba(187,222,251, 0.5)',
  },
  font: {
    fontSize: 20,
  },
  textEnable: {
    color: 'rgba(0,0,0,1)',
  },
  textDisable: {
    color: 'rgba(0,0,0,0.2)',
  },
});
