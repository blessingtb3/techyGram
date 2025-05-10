import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Routes } from "./routes";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import ProfileTabTitle from "../components/ProfileTabTitle/ProfileTabTitle";
import ProfileTabContent from "../components/ProfileTabContent/ProfileTabContent";


const Stack = createStackNavigator();//var with stack for drawer 
const Drawer = createDrawerNavigator();//var to set up drawer with home and profile
const ProfileTabs = createMaterialTopTabNavigator();//var to setup tabs for user profile page

export const ProfileTabsNavigation = () => {
    return (
        <ProfileTabs.Navigator screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: 'transparent'
                },
                tabBarStyle:{
                    zIndex: 0,
                    elevation: 0
                }
            }
        }>

            <ProfileTabs.Screen name={'Tab1'} component={ProfileTabContent} options={{
                tabBarLabel: ({focused}) => 
                    <ProfileTabTitle 
                        title={'Photos'}
                        isFocused={focused}
                    />
            }}/>
            <ProfileTabs.Screen name={'Tab2'} component={ProfileTabContent} options={{
                tabBarLabel: ({focused}) => 
                    <ProfileTabTitle 
                        title={'Videos'}
                        isFocused={focused}
                    />
            }}/>
            <ProfileTabs.Screen name={'Tab3'} component={ProfileTabContent} options={{
                tabBarLabel: ({focused}) => 
                    <ProfileTabTitle 
                        title={'Saved'}
                        isFocused={focused}
                    />
            }}/>

        </ProfileTabs.Navigator>
        
    );
};


const MainMenuNavigation = () => {
    return (
        // Drawer with home and profile
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name={Routes.Home} component={Home}/>
            <Drawer.Screen name={Routes.Profile} component={Profile}/>
        </Drawer.Navigator>
    )
}

const MainNavigation = () => {

    return (
        // Stack navigation which enables us to go from one page to another
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Drawer'}>
            {/* list/stack of screens we have for navigation */}
            <Stack.Screen name={'Drawer'} component={MainMenuNavigation}/>
        </Stack.Navigator>
    );
};

export default MainNavigation;