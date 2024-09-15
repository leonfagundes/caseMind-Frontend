import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from './bottom.routes'
import { themes } from "../global/themes";
import Register from "../pages/register";

export default function Routes() {
    
    const Stack = createStackNavigator()
    
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: themes.colors.backgorund
                }
            }}
        >

            <Stack.Screen
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='BottomRoutes'
                component={BottomRoutes}
            />

            <Stack.Screen
                name='Register'
                component={Register}
            />

        </Stack.Navigator>
    )
}