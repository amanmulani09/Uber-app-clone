import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SuggestionCard = ({isPromo,imageSrc,footerText}) => {
  return (
    <View style={styles.container}>
        {isPromo && (
            <View style={styles.promotxtContainer}>
        <Text style={styles.promoTxt}>Promo</Text>
        </View>
        )}

        <View style={styles.imageContainer}>
            <Image
                style={styles.SuggestionCardImg}
                source={imageSrc}
            />
        </View>
        <Text style={styles.footerText}>{footerText}</Text>

    </View>
  )
}

export default SuggestionCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:wp('25%'),
        height:hp('15%'),
        justifyContent:'flex-end',
        alignItems:'center',
        position:'relative'
    },
    imageContainer:{
        width:70,
        height:70,
        borderRadius:15,
        backgroundColor:'#e3e8e8',
        justifyContent:'center',
        alignItems:'center'
    },
    SuggestionCardImg:{
        width:50,
        height:50
    },
    promotxtContainer:{
    backgroundColor:'green',
    borderRadius:50,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:10,
    zIndex:2
    },
    promoTxt:{
        fontSize:10,
        color:'#fff',
        textAlign:'center'
    },
    footerText:{
        fontSize:11,
        marginTop:10,
        fontWeight:'600'
    }
})