//importar os componentes necessarios para\ cosnt interface

import { View, Text, StyleSheet, Image } from 'react-native';


import theme from '../../global/styles/theme';

export default function Home(){

    return(
        <View style={estilos.container}>
            <View style={estilos.Header}>
            <View style={estilos.TituloWrapper}>
                <Image source={require('../../../assets/logotipo.png')} style={estilos.Logotipo}  /> 

                <Text style={estilos.Titulo}>Controle suas finanças de forma muito simples</Text>
                <Text style={estilos.SignInTexto}>Faça seu login com uma das contas abaixo</Text>

            </View>
            </View>

            <View style={estilos.Footer}>
                <View style={estilos.FooterWrapper}>

                </View>

            </View>
        </View>
    );
}

const estilos = StyleSheet.create({

    container:{
        flex: 1,
    },

    Header:{
        width: '100%',
        height:'70%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'flex-end',
    },

    TituloWrapper: {
        alignItems: 'center'
    },

    Titulo:{
        color:'#FFF',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 45
    },

    SignInTexto: {
        color:'#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 48,
        marginBottom: 67
    },

    Footer:{
        width:  '100%',
        paddingHorizontal: '30%',
        backgroundColor: '#FF872C'
    },

    FooterWrapper: {
        marginTop: -4,
        paddingHorizontal: 32,
        justifyContent: 'space-between'
    },
    
    Logotipo:{
        width: 120,
        height: 78
    }

})