import * as React from 'react'
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function HomScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notification"
            />
        </View>
    );

}

function NotificationsScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={()=>navigation.navigate('Notifications')}
                title='Go to notifications'
            />
        </View>
    
    );
}
const Drawer = createDrawerNavigator();
const lab6 = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={HomScreen}/>
                <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );

}

export default lab6;
