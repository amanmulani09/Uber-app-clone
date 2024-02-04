import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{useSharedValue,withSpring,useAnimatedStyle,withTiming} from 'react-native-reanimated';

const SuggestionCard = ({isPromo,imageSrc,footerText,isFocused}) => {

    const scaleProp = useSharedValue(0.5);

    const imageStyles = useAnimatedStyle(()=>{
        return{
            transform:[{scale:scaleProp.value}]
        }
    },[])

    useEffect(()=>{

        scaleProp.value = withTiming(1,{
            duration:1000
        });
    },[])

  return (
    <Animated.View style={[styles.container]}>
        {isPromo && (
            <View style={styles.promotxtContainer}>
        <Text style={styles.promoTxt}>Promo</Text>
        </View>
        )}

        <Animated.View style={[styles.imageContainer]}>
            <Animated.Image
                style={[styles.SuggestionCardImg,imageStyles]}
                source={imageSrc}
            />
        </Animated.View>
        <Text style={styles.footerText}>{footerText}</Text>
    </Animated.View>
  )
}

export default SuggestionCard

const styles = StyleSheet.create({
    container:{
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