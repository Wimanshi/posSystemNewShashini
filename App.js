import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";

import Login from './Screens/Login';
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import CreateEmployee from './Screens/CreateEmployee';
import { createStackNavigator, HeaderTitle} from 'react-navigation-stack';

import AddUserScreen from './crud/AddUserScreen';
import UserScreen from './crud/UserScreen';
import UserDetailScreen from './crud/UserDetailScreen';

//import { NavigationContainer, StackActions } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

/*const Stack = createStackNavigator();

function App() {
    return(
      <View>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Create" component={CreateEmployee} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </View>
    );
}

export default ()=>{
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}*/

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: UserScreen
  },
  Profile: {
    screen: AddUserScreen
  },
  Home: {
    screen : UserDetailScreen
  },
  Create: {
    screen: CreateEmployee
  }
});

/*const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Profile: {
    screen: Profile
  },
  Home: {
    screen : Home
  },
  Create: {
    screen: CreateEmployee
  }
});*/

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, View, Text } from 'react-native';
// import Login from './src/components/Login/Login';
// import ScreenManager from './src/components/ScreenManager/ScreenManager';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

/*const Navigation = StackNavigator({
  Login: {
    screen: Login,
  },
  Profile: {
    screen: Profile,
  }
})*/

// export default class App extends Component {
//   render() {
//     return (
//       <Login/>
//     );
//   }
// }
 
/*const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});*/

/*export default Navigation;
export default ScreenManager;*/