import { StyleSheet, Text, View,StatusBar ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated,{withTiming,withDelay,useSharedValue, useAnimatedStyle} from 'react-native-reanimated'

const DELAY = 500;
const DURATION = 1000;
const Services = () => {
  const [visible,setVisible] = useState(false)
  const opacityVal = useSharedValue(0);
  const opacityVal1 = useSharedValue(0)
  const opacityVal2 = useSharedValue(0)
  const opacityVal3 = useSharedValue(0)

  const handleOpacity = ()=>{
    if(visible){

      opacityVal.value = withDelay(3 * DELAY,withTiming(0,{duration:DURATION}) )
      opacityVal1.value = withDelay(2 * DELAY,withTiming(0,{duration:DURATION}) )
      opacityVal2.value = withDelay(1 * DELAY,withTiming(0,{duration:DURATION}) )
      opacityVal3.value = withDelay(0 * DELAY,withTiming(0,{duration:DURATION}) )
    }else{

      opacityVal.value = withDelay(0 * DELAY,withTiming(1,{duration:DURATION}) )
      opacityVal1.value = withDelay(1 * DELAY,withTiming(1,{duration:DURATION}) )
      opacityVal2.value = withDelay(2 * DELAY,withTiming(1,{duration:DURATION}) )
      opacityVal3.value = withDelay(3 * DELAY,withTiming(1,{duration:DURATION}) )
  
    }
   
    setVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#030303" />
      <View style={{flexDirection:'row',gap:10}}>

      <Animated.Text style={{opacity:opacityVal,fontSize:20,fontWeight:'600'}}>This</Animated.Text>
      <Animated.Text style={{opacity:opacityVal1,fontSize:20,fontWeight:'600'}}>Is</Animated.Text>
      <Animated.Text style={{opacity:opacityVal2,fontSize:20,fontWeight:'600'}}>Services</Animated.Text>
      <Animated.Text style={{opacity:opacityVal3,fontSize:20,fontWeight:'600'}}>Page</Animated.Text>
      </View>
      <TouchableOpacity onPress={handleOpacity} >
          <Text style={{marginTop:50,borderWidth:1,padding:5,borderRadius:5}}> {visible  ? 'hide' : 'show'} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
    }
  })