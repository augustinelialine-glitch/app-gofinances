//imposrtar os conponentes

import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

//impotar arquivo de tema

import theme from "../../global/styles/theme";




//criar função chamada SignSocialButton

export default function SignInSocialButton(props){
return(
    <TouchableOpacity style={styles.Button}>
        <View style={styles.ImageCotainer}>
            <Image source={props.icone}/>
        </View>

    <Text style={styles.ButtonText}>{props. textoBotao} </Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({

    Button:{
        backgroundColor: theme.colors.shape,
        borderRadius:5,
        height:56,
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center'
    },

    ImageCotainer:{
        backgroundColor: theme.colors.background,
        height: '100%',
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRightColor: 1,
        borderColor: '#b9b9b9'
    },

    ButtonText:{
        textAlign: 'center',
        fontSize: 18,
        marginLeft: 20
    }
});