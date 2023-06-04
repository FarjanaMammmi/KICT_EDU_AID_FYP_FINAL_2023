import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CountProvider } from "./Pages/Screens/Be_A_Tutor";
import { CProvider } from "./Pages/Screens/Get_A_Tutor";
//import { CountProviderr } from "./Pages/Screens/Get_A_Tutor";
import { auth } from "./firebase/firebase";

import Home from "./Pages/Screens/Home";
import UsersInfo from "./Pages/Screens/UsersInfo";
import UserAdminInfo from "./Pages/Screens/UserAdminInfo";
import Login from "./Pages/Screens/Login";
import LoginAdmin from "./Pages/Screens/LoginAdmin";
import StudentsList from "./Pages/Screens/StudentsList";
import TutorsList from "./Pages/Screens/TutorsList";
import ResetPass from "./Pages/Screens/ResetPass";
import Registration from "./Pages/Screens/Registration";
import RegistrationAdmin from "./Pages/Screens/RegistrationAdmin";
import About_Kict from "./Pages/Screens/About_Kict";
import Student_Materials from "./Pages/Screens/Student_Materials";
import Services from "./Pages/Screens/Services";
import Contact_info from "./Pages/Screens/Contact_info";
import LogOut from "./Pages/Screens/LogOut";
import Dashboard from "./Pages/Screens/Dashboard";
import Feedback from "./Pages/Screens/Feedback";
import Required_Sub from "./Pages/Screens/Required_Sub";
import S_Sub from "./Pages/Screens/S_Sub";
import Get_A_Tutor from "./Pages/Screens/Get_A_Tutor";
import Be_A_Tutor from "./Pages/Screens/Be_A_Tutor";
import Payment from "./Pages/Screens/Payment";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <CountProvider>
        <CProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                height: 50,
                backgroundColor: "#774921",
              },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="UsersInfo"
              component={UsersInfo}
              options={{ headerTitleAlign: "center" }}
            />

<Stack.Screen
              name="UserAdminInfo"
              component={UserAdminInfo}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerTitleAlign: "center" }}
            />

<Stack.Screen
              name="LoginAdmin"
              component={LoginAdmin}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="ResetPass"
              component={ResetPass}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="RegistrationAdmin"
              component={RegistrationAdmin}
              options={{ headerTitleAlign: "center" }}
            />

<Stack.Screen
              name="StudentsList"
              component={StudentsList}
              options={{ headerTitleAlign: "center" }}
            />

<Stack.Screen
              name="TutorsList"
              component={TutorsList}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="About_Kict"
              component={About_Kict}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Student_Materials"
              component={Student_Materials}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Services"
              component={Services}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Contact_info"
              component={Contact_info}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="LogOut"
              component={LogOut}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Required_Sub"
              component={Required_Sub}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="S_Sub"
              component={S_Sub}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Get_A_Tutor"
              component={Get_A_Tutor}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Be_A_Tutor"
              component={Be_A_Tutor}
              options={{ headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerTitleAlign: "center" }}
            />

            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{ headerTitleAlign: "center" }}
            />
          </Stack.Navigator>
        </CProvider>
      </CountProvider>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#774921",
    alignItems: "center",
    justifyContent: "center",
  },
});
