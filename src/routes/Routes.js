import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Screens from "./index";

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator
             screenOptions ={{
                 headerShown: false,
             }}
             >
                <AppStack.Screen name="Login" component={Screens.Login} />
                <AppStack.Screen name="registerAccount" component={Screens.RegisterAccount} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;