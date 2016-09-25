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
  Animated
} from 'react-native';
var {height, width} = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 400;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

var Parallax = require('./Parallax')
class ParallaxView extends Component {
   constructor(props) {
     super(props);

     this.state = {
       scrollY: new Animated.Value(0),
     };
   }

   _renderScrollViewContent() {
     const data = Array.from({length: 30});
     return (
      <View style={styles.scrollViewContent}>
         {data.map((_, i) =>
            <View style={styles.container} key ={i}>
              <Text style={styles.welcome}>
                Device {i+1}
              </Text>
            </View>
         )}
      </View>
     );
   }

  render() {
     //return <Parallax/>
   //   var _backgroundColor = this._animatedValue.interpolate({
   // inputRange: [0, 150],
   // outputRange: ['rgba(255,255,255,1)', 'rgba(0,0,0,1)']
//});

const headerHeight = this.state.scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [-10, -400],
  extrapolate: 'clamp',
});

const imageOpacity = this.state.scrollY.interpolate({
  inputRange: [0, HEADER_SCROLL_DISTANCE/10 , HEADER_SCROLL_DISTANCE],
  outputRange: [1, 1, 0],
  extrapolate: 'clamp',
});


    return (
      <View style ={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0}}>
            <View style ={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'coral'}}>
                  <View  style ={{flex:1,position:'absolute',top:50,bottom:0,left:20,right:20,backgroundColor:'tan',height:40}}/>

            </View>

            <Animated.View style ={{marginTop:200,position:'absolute',top:headerHeight,bottom:0,left:0,right:0,backgroundColor:'lightblue'}}>
                  <ScrollView style ={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'coral'}}
                     onScroll = {Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
                     scrollEventThrottle = {16}>

                        {this._renderScrollViewContent()}

                  </ScrollView>
            </Animated.View>


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
