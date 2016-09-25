/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* eslint-disable*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  Dimensions,
  TouchableHighlight,
  Animated,
  TextInput,
  PanResponder
} from 'react-native';
var {height, width} = Dimensions.get('window');


var Parallax = require('./Parallax')
class ParallaxView extends Component {
   constructor(props) {
     super(props);
     this.state = {
       enter         :   new Animated.Value(0.5),
       scrollY       :   new Animated.Value(0),
       bounceValue   :   new Animated.Value(0),
       pullUp        :   new Animated.Value(800),
       pan           :   new Animated.ValueXY({x: 0, y: 500})
     };
     this.someValue = 10
     this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x, // x,y are Animated.Value
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: () => {
        Animated.spring(
          this.state.pan,         // Auto-multiplexed
          {toValue: {x: 0, y: this.someValue}} // Back to zero
        ).start();
      },
    });
  }

   componentDidMount(){

      // this._firstDevice(800)
                           // Start the animation
   }

   _renderScrollViewContent(num) {
     const data = Array.from({length: num});
     return (
      <View>
         {data.map((_, i) =>
            <View style={[styles.container,{backgroundColor:(i%2)?'coral':'tan'}]} key ={i}>
              <Text style={styles.welcome}>
                Device {i+1}
              </Text>
            </View>
         )}
      </View>
     );
   }

//    _animateEntrance() {
//      Animated.spring(
//       this.state.enter,
//       { toValue: 1, friction: 8 }
//      ).start();
//    }
//
//  _pullUp(){
//    Animated.spring(                          // Base: spring, decay, timing
//       this.state.pullUp,                 // Animate `bounceValue`
//       {
//         toValue: 200,                         // Animate to smaller size
//         friction: 10,                          // Bouncier spring
//       }
//    ).start();
//    }
//
//    _callthis(value){
//
// this.state.bounceValue.setValue(0.5);     // Start large
//  Animated.spring(                          // Base: spring, decay, timing
//      this.state.bounceValue,                 // Animate `bounceValue`
//      {
//       toValue: 0.6,                         // Animate to smaller size
//       friction: 10,                          // Bouncier spring
//      }
//  ).start();
//    }

   _firstDevice(value){

      Animated.spring(                          // Base: spring, decay, timing
          this.state.pullUp,                 // Animate `bounceValue`
          {
           toValue: value,                         // Animate to smaller size
           friction: 10,                          // Bouncier spring
          }
      ).start();
   }

  render() {

   //return <Parallax/>
    return (
      <View style ={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'peachpuff'}}>
         <TextInput  onSubmitEditing ={()=>{this._firstDevice(500)}} onFocus ={()=>{this._firstDevice(800)}} style ={{flex:1,position:'absolute',top:50,bottom:50,left:20,right:20,backgroundColor:'coral',height:40}}/>

         <Animated.View style ={{marginTop:this.state.pullUp,flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'peachpuff'}} scrollEventThrottle = {16}>
            <ScrollView onScroll = {
               Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}>
               <TouchableHighlight onPress ={()=>{this._firstDevice(100)}}>
                  <View style={[styles.container,{backgroundColor:'tan'}]}>
                    <Text style={styles.welcome}>
                      Device {0}
                    </Text>
                  </View>
               </TouchableHighlight>
               {this._renderScrollViewContent(20)}
            </ScrollView>
         </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color:'#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  animated:{
     height:height/10,
     width:width,
 },
 shadow:{
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
}
});


AppRegistry.registerComponent('ParallaxView', () => ParallaxView);
