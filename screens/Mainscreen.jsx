import { useState,useRef } from 'react'
import { View, Text,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'

const Mainscreen = () => {
    const [headerShown, setHeaderShown] = useState(false);
    const scrollViewRef = useRef();


  return (
    <SafeAreaView
     style={{flexDirection:'column',flex:1}}
    >
      <View style={{flex:0.1,backgroundColor:'grey'}}>
          
      </View>
      <ScrollView
ref={scrollViewRef}
onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
style={{flex:2,paddingBottom:70}}
>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>

    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
        <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
        <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
</ScrollView>
     
      <View style={{flex:0.05,backgroundColor:'blue',padding:20}}>
          
    </View>
    </SafeAreaView>
  )
}

export default Mainscreen

{/*  */}