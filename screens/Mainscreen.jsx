import { useState,useRef } from 'react'
import { View, Text,ScrollView,SafeAreaView,TextInput,StyleSheet, TouchableOpacity,KeyboardAvoidingView,Platform} from 'react-native'
import React from 'react'

const Mainscreen = () => {
    const [headerShown, setHeaderShown] = useState(false);
    const scrollViewRef = useRef();
    const [number, onChangeNumber] = React.useState('');


  return (
    <SafeAreaView
     style={{flexDirection:'column',flex:1}}
    >
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
    <View style={{flex:0.007,backgroundColor:'grey',padding:20}}>
    
    </View>
      <ScrollView
ref={scrollViewRef}
onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
style={{flex:2,paddingBottom:70}}
>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,marginTop:10}}>
       <View><Text>ok</Text></View>
       <View><Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente, excepturi laudantium debitis, ab similique, consequuntur architecto fugiat velit enim est iure aliquam magni quam molestias cum at et natus!</Text></View>
    </View>
    <View style={{flex:0.5,backgroundColor:'grey',padding:20,margin:10}}>
    
    </View>
</ScrollView>
    <View style={{flex:0.1,backgroundColor:'#0d1b2a',flexDirection:'row',padding:10,justifyContent:'space-around',padding:10}}>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
      />
      <TouchableOpacity style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <Text>send</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Mainscreen

const styles = StyleSheet.create({
    input: {
      height: 40,
      width:300,
      padding: 10,
      position:'relative',
      top:2,
      borderRadius:30,
      backgroundColor:'white'
    },
  });