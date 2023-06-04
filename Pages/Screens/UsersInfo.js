import { View, Image, StyleSheet, Button, Text } from 'react-native'
import React from 'react'

export default function UserInfo({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.column}>
        <View>
          <Image style={Styles.Image} source={require('../Images/Logo/user.png')} />
          <Text style={Styles.text}>User Login</Text>
          <View style={Styles.Button1}>
            <Button
              color="#774921"
              title="Sign In"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <View style={Styles.Button2}>
            <Button
              color="#774921"
              title="Sign Up"
              onPress={() => navigation.navigate("Registration")}
            />
          </View>
        </View>
        <View>
          <Image style={Styles.Image} source={require('../Images/Logo/user.png')} />
          <Text style={Styles.text}>Admin Login</Text>
          <View style={Styles.Button1}>
            <Button
              color="#774921"
              title="Sign In"
              onPress={() => navigation.navigate("LoginAdmin")}
            />
          </View>
          <View style={Styles.Button2}>
            <Button
              color="#774921"
              title="Sign Up"
              onPress={() => navigation.navigate("RegistrationAdmin")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3BC9A',
    alignItems: 'center',
    //justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  Image: {
    width: 240,
    height: 240,
    //borderRadius: 400,
    paddingRight: 50,
    //marginTop: 30,
    //marginLeft: 10,
    //marginRight: 50,
  },
  text:{
paddingLeft: 50,
fontSize: 22,
fontWeight: 'bold',
  },
  column: {
    flex: 1,
    margin: 10,
    //alignItems: "center",
    marginHorizontal: 50,
    justifyContent: 'center',
    flexDirection: "row",
    gap: 150,
    
    backgroundColor: "white",
    padding: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Button1: {
    width: 230,
    height: 40,
    paddingTop: 5,
    marginTop: 30,
    fontWeight: 'bold'
  },
  Button2: {
    width: 230,
    height: 40,
    marginTop: 5,
    fontWeight: 'bold'
  },
  // user:{
  //   margin: 100,
  // }

})
// import { View, Image, StyleSheet, Button } from 'react-native'
// import React from 'react'

// export default function UserInfo({ navigation }) {
//   return (
//     <View style={Styles.container}>
//       <Image style={Styles.Image} source={require('../Images/Logo/user.png')} />
//       <View style={Styles.Button1}>
//         <Button
//           color="#774921"
//           title="Log In"
//           onPress={() => navigation.navigate("Login")}
//         />
//       </View>
//       <View style={Styles.Button2}>
//         <Button
//           color="#774921"
//           title="Sign In"
//           onPress={() => navigation.navigate("Registration")}
//         />
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
//     width: 300,
//     height: 300,
//     marginTop: 30,
//     marginLeft: 50,
//     marginRight: 50,
//   },
//   Button1: {
//     width: 230,
//     height: 40,
//     paddingTop: 5,
//     marginTop: 30,
//     fontWeight: 'bold'
//   },
//   Button2: {
//     width: 230,
//     height: 40,
//     marginTop: 5,
//     fontWeight: 'bold'
//   },

// })
