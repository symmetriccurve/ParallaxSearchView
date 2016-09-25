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
  TextInput
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
       pullUp        :   new Animated.Value(800)
     };
   }

   componentDidMount(){
      this._callthis();
                              // Start the animation
   }

   _renderScrollViewContent() {
     const data = Array.from({length: 30});
     return (
      <View style={styles.scrollViewContent}>
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

   _animateEntrance() {
     Animated.spring(
      this.state.enter,
      { toValue: 1, friction: 8 }
     ).start();
   }

 _pullUp(){
   Animated.spring(                          // Base: spring, decay, timing
      this.state.pullUp,                 // Animate `bounceValue`
      {
        toValue: 200,                         // Animate to smaller size
        friction: 10,                          // Bouncier spring
      }
   ).start();
   }

   _callthis(value){

this.state.bounceValue.setValue(0.5);     // Start large
 Animated.spring(                          // Base: spring, decay, timing
     this.state.bounceValue,                 // Animate `bounceValue`
     {
      toValue: 0.6,                         // Animate to smaller size
      friction: 10,                          // Bouncier spring
     }
 ).start();
   }


  render() {

   //   const TM = this.state.bounceValue.interpolate({
   //    inputRange: [0, 0.5],
   //    outputRange: [0, 100],
   //    extrapolate: 'clamp',
   //   });
     //
     //
   //   console.log("this state",this.state);
   //   return(
   //     <View style={{flex:1}}>
   //       <TouchableHighlight onPress ={()=>{this._pullUp()}} style={{flex:1}} underlayColor= 'transparent'>
   //            <Animated.Image                         // Base: Image, Text, View
   //            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
   //            style={{
   //              flex: 1,
   //              transform: [
   //                {translateY: this.state.pullUp},                   // `transform` is an ordered array
   //                {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
   //              ]
   //            }}
   //          />
   // //       </TouchableHighlight>
   //    </View>
   //   );

const headerHeight = this.state.scrollY.interpolate({
  inputRange: [0 , 4],
  outputRange: [500, 100],
  extrapolate: 'clamp',
});

var color = this.state.scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)']
});

//
const marginTop = this.state.scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [100, -500],
  extrapolate: 'clamp',
});

   //return <Parallax/>
    return (
      <View style ={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0}}>
            {/*<Animated.View style ={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'lightyellow'}}>
                  <TextInput  onSubmitEditing ={()=>{this._pullUp()}} style ={{flex:1,position:'absolute',top:50,bottom:50,left:20,right:20,backgroundColor:'coral',height:40}}/>
            </Animated.View>*/}
            <ScrollView style ={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'peachpuff'}}
            stickyHeaderIndices={[0]}
               onScroll = {
                  console.log("Scroll Y ", this.state.scrollY),
                  Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
               scrollEventThrottle = {16}>
                  <Animated.View style={[{height:headerHeight,width:width,backgroundColor: color},styles.shadow]}>
                     <TextInput  onSubmitEditing ={()=>{this._pullUp()}} style ={{flex:1,position:'absolute',top:50,bottom:50,left:20,right:20,backgroundColor:'coral',height:40}}/>
                  </Animated.View>
                  {this._renderScrollViewContent()}

            </ScrollView>


            {/*<ScrollView
            style={{position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:100}}
            ref = "scrollViewRef"
            scrollEventThrottle = {16}
            //onContentSizeChange = {(hello)=>{console.log('onContentSizeChange',hello)}}
            onScroll = {Animated.event(
           [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
            )}>

            <Animated.View style={{width:width,height:200, backgroundColor:'tan'}}>
               <Animated.Image
                  style={{position:'absolute',top:0,bottom:0,left:0,right:0,width:width ,height:headerHeight,opacity:1}}
                  source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                  />
            </Animated.View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                  </View>
            </ScrollView>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

// import React, {Component} from 'react';
// import {
//   Animated,
//   AppRegistry,
//   Image,
//   Platform,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
//
// const HEADER_MAX_HEIGHT = 400;
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
//
// export default class ParallaxView extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       scrollY: new Animated.Value(0),
//     };
//   }
//
//   _renderScrollViewContent() {
//     const data = Array.from({length: 30});
//     return (
//       <View style={styles.scrollViewContent}>
//         {data.map((_, i) =>
//           <View key={i} style={styles.row}>
//             <Text>{i}</Text>
//           </View>
//         )}
//       </View>
//     );
//   }
//
//   render() {
//     const headerHeight = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
//       extrapolate: 'clamp',
//     });
//
//     const imageOpacity = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE/10 , HEADER_SCROLL_DISTANCE],
//       outputRange: [1, 1, 0],
//       extrapolate: 'clamp',
//     });
//     const imageTranslate = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [0, -50],
//       extrapolate: 'clamp',
//     });
//
//     const titleScale = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//       outputRange: [1, 1, 0.8],
//       extrapolate: 'clamp',
//     });
//     const titleTranslate = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//       outputRange: [0, 0, -8],
//       extrapolate: 'clamp',
//     });
//
//     return (
//       <View style={styles.fill}>
//         <StatusBar
//           translucent
//           barStyle="light-content"
//           backgroundColor="rgba(0, 0, 0, 0.251)"
//         />
//         <ScrollView
//           style={styles.fill}
//           scrollEventThrottle={16}
//           onScroll={Animated.event(
//             [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
//           )}
//         >
//           {this._renderScrollViewContent()}
//         </ScrollView>
//         <Animated.View style={[styles.header, {height: headerHeight}]}>
//           <Animated.Image
//             style={[
//               styles.backgroundImage,
//               {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
//             ]}
//              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//           />
//           <Animated.View
//             style={[
//               styles.bar,
//               {transform: [{scale: titleScale}, {translateY: titleTranslate}]},
//             ]}
//           >
//             <Text style={styles.title}>Title</Text>
//           </Animated.View>
//         </Animated.View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   fill: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#03A9F4',
//     overflow: 'hidden',
//   },
//   backgroundImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     width: null,
//     height: HEADER_MAX_HEIGHT,
//     resizeMode: 'cover',
//   },
//   bar: {
//     marginTop: Platform.OS === 'ios' ? 28 : 38,
//     height: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//   },
//   scrollViewContent: {
//     marginTop: HEADER_MAX_HEIGHT,
//   },
//   row: {
//     height: 40,
//     margin: 16,
//     backgroundColor: '#D3D3D3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

AppRegistry.registerComponent('ParallaxView', () => ParallaxView);
