import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, Button, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';

export default function Home({ navigation }) {
  const slideAnim = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    const slideAnimation = Animated.timing(slideAnim, {
      toValue: 1000, // Adjust the value based on the width of your container
      duration: 10000, // Adjust the duration based on your desired sliding speed
      useNativeDriver: true,
    });

    const resetAnimation = Animated.timing(slideAnim, {
      toValue: -1000, // Adjust the value based on the width of your container
      duration: 0,
      useNativeDriver: true,
    });

    const sequenceAnimation = Animated.sequence([
      slideAnimation,
      resetAnimation,
    ]);

    const repeatAnimation = Animated.loop(sequenceAnimation);

    repeatAnimation.start();

    return () => {
      repeatAnimation.stop();
    };
  }, []);

  return (
    <View style={Styles.container}>
      <Image style={Styles.Image} source={require('../Images/Logo/l.png')} />

      <Animated.View style={[Styles.TextContainer, { transform: [{ translateX: slideAnim }] }]}>
        <Text style={Styles.Text}>WELCOME TO KICT-EDUAID</Text>
      </Animated.View>

      <View style={Styles.Button}>
        <Button
          title="GET STARTED"
          color="#774921"
          onPress={() => navigation.navigate("UsersInfo")}
        />
        <StatusBar style="auto" hidden = {true}/>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3BC9A',
    alignItems: 'center',
    width: '100',
    height: '100',
  },
  Image: {
    width: 250,
    height: 250,
    marginTop: 70,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30,
  },
  TextContainer: {
    width: '100%',
    alignItems: 'center',
  },
  Text: {
    fontSize: 40,
    fontWeight: 'bold',
    //textAlign: 'center',
    color: 'black',
  },
  Button: {
    width: 200,
    height: 70,
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
});


// import { StatusBar } from 'expo-status-bar';
// import { View, Text, Image, StyleSheet, Button, color } from 'react-native'
// import React from 'react'

// export default function Home({ navigation }) {
//   return (
//     <View style={Styles.container}>
//       <Image style={Styles.Image} source={require('../Images/Logo/SS.png')} />

//       <View style={Styles.Text}>
//         <Text style={Styles.Text}>WELCOME TO KICT-EDUAID</Text>
//       </View>

//       <View style={Styles.Button}>
//         <Button
//           title="GET STARTED"
//           color="#774921"
//           onPress={() => navigation.navigate("UsersInfo")}
//           //onPress={() => navigation.navigate("Dashboard")}
//         />
//         <StatusBar style="auto" />
//       </View>
//     </View>
//   );
// }

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E3BC9A',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },
//   Image: {
//     width: 250,
//     height: 250,
//     marginTop: 70,
//     marginLeft: 50,
//     marginRight: 50,
//     marginBottom: 30,
//   },
//   Text: {
//     width: 1000,
//     height: 100,
//     paddingTop: 5,
//     marginTop: 1,
//     fontSize: 40,
//     fontWeight: 'Bold',
//     textAlign: 'center',
//     color: 'black',
//   },

//   Button: {
//     width: 200,
//     height: 70,
//     paddingTop: 20,
//     marginTop: 20,
//     backgroundColor: 'white',
//     fontWeight: 'bold',
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     borderBottomRightRadius: 50,
//     borderBottomLeftRadius: 50,
//   },

// })