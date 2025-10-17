//1 passo importanto os componentes de react native

import {View, Text, StyleSheet, Image, TouchableOpacity}from'react-native';

import theme from '../../global/styles/theme';
//icones
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.UserWrapper}>
                    <View UserInfo>
                        <Image style={styles.photo} source={{uri: 'https://randomuser.me/api/portraits/women/49.jpg'}}/>

                        <View style={styles.user}>
                            <Text style={styles.UserGreeting}>Olá</Text>
                            <Text style={styles.UserName}>Jessica Moreira De Cardoso </Text>
                        </View>

                    </View>

                    <TouchableOpacity>
                    <FontAwesome6 style={styles.icon} name="power-off" size={24} />
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        backgroundColor: theme.colors.background
    },

    Header:
    {
        width:'100%',
        height: '40%',
        backgroundColor: theme.colors.primary,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    UserWrapper:
    {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin:70,
        paddingHorizontal:24
    },

    UserInfo:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },

    photo:
    {
        height:40,
        width:40,
        borderRadius:10
    },

    UserGreeting:
    {
       color: theme.colors.shape,
       fontSize:20
    },

    UserName:
    {
        color: theme.colors.shape,
        fontSize:18,
        fontWeight:'bold'
    },

    user:
    {
        margin:20  
    },

    icon:
    {
        color:theme.colors.secondary
    }

})