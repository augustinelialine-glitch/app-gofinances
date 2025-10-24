//importar as telas os componentes de navegação

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importar as telas
import Dashboard from "./screens/dashboard";
import Home from './screens/home';

//COPIANDO OS LINKS
import FontAwesome from '@expo/vector-icons/FontAwesome';


//importando  o theme dos estilos

import theme from './global/styles/theme';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ }) => ({
                hederShown: false,
                tabBarActiveBackgroundColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarIconStyle: {
                    flexDirection: 'row',
                    marginHorizontal:10
                },

                style: {
                    size: 20,
                    height: 88,
                    
                },

                tabBarLabelStyle: {
                    marginRight:10,
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            })}>
                

                <Tab.Screen name="Dashboard" component={Dashboard}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo name="list" size={24} color={theme.colors.text} 
                            />
                        ))
                    }}

                />

                <Tab.Screen name="Cadatrar" component={Home} 
                     options={{
                        tabBarIcon: (({ size, color }) => (
                            <FontAwesome6 name="money-check-dollar" size={24} color={theme.colors.text} />
                        ))
                    }}
                
                />


                <Tab.Screen name="Resumo" component={Home}
                     options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo name="bar-graph" size={24} color={theme.colors.text} />
                        ))
                    }}
                
                
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}