import React, { useEffect, useRef } from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({index, value, handleIncrement, handleDecrement}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false
      }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: false
    }).start();
  };

  useEffect(()=>{
    fadeIn();
    return ()=>{fadeOut()};
  },[]);

    return (
      <Animated.View 
              style={{opacity: fadeAnim}}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterInfo}>
            Count: {value.counterNum}
          </Text>
          <View style={styles.counterBtnContainer}>
            <TouchableOpacity
                style={styles.counterButton}
                onPress={() => {handleIncrement(index);fadeIn();}}>
              <Text>INCREMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.counterButton}
                onPress={() => handleDecrement(index)}>
              <Text>DECREMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
};

Counter.propTypes = {
  index : PropTypes.number,
  value : PropTypes.object,
  handleIncrement : PropTypes.func,
  handleDecrement : PropTypes.func,
};

Counter.defaultProps = {
  index : 0,
  value : { counterNum : 0 },
  handleIncrement : () => console.warn('handleIncrement not defined'),
  handleDecrement : () => console.warn('handleDecrement not defined'),
};



const styles = StyleSheet.create({
  counterContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 10,
  },
  counterInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  counterBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  counterButton: {
    backgroundColor: '#D1B2FF',
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;