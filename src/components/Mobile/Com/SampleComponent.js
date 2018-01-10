import React, { Component } from 'react';
import { View, Text, Image, Animated, Easing, StyleSheet, Platform } from 'react-native';

import stylesJson from './../{Site}/styles';
import logo from './logo.png';

const styles = StyleSheet.create(stylesJson);
const AnimatedImage = Animated.createAnimatedComponent(Image);

class SampleComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.spinValue = new Animated.Value(0);
    this.messages = {
      title: 'Welcome to global app(.com) for Mobile Device',
      text: '',
    };
    this.instructions = Platform.select({
      ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
      android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
      web: 'Note: reload will happen whenever there is a change on your files / directory',
    });
  }

  componentDidMount() {
    this.spin();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
      },
    ).start(() => this.spin());
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AnimatedImage
            source={logo}
            style={[styles.headerLogo, { transform: [{ rotate: spin }] }]}
          />
          <Text style={styles.headerText}>{this.messages.title}</Text>
        </View>
        <View>
          <Text style={styles.messageText}>{this.messages.text}</Text>
        </View>
        <View>
          <Text style={styles.instructions}>{this.instructions}</Text>
        </View>
      </View>
    );
  }
}

export default SampleComponent;
