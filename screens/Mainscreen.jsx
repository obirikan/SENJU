import { useState,useRef ,useEffect} from 'react'
import { View, Text,ScrollView,SafeAreaView,TextInput,StyleSheet, TouchableOpacity,KeyboardAvoidingView,Platform} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Config from '../config/Config'
import axios from 'axios';

const Mainscreen = () => {
    const [headerShown, setHeaderShown] = useState(false);
    const [data,setdata]=useState([        {
        name:'ko',
        response:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente, excepturi laudantium debitis, ab similique, consequuntur architecto fugiat velit enim est iure aliquam magni quam molestias cum at et natus'
     },
     {
        name:'ko',
        response:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente, excepturi laudantium debitis, ab similique, consequuntur architecto fugiat velit enim est iure aliquam magni quam molestias cum at et natus'
     },
     {
        name:'ko',
        response:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente, excepturi laudantium debitis, ab similique, consequuntur architecto fugiat velit enim est iure aliquam magni quam molestias cum at et natus'
     },
     {
        name:'ko',
        response:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente, excepturi laudantium debitis, ab similique, consequuntur architecto fugiat velit enim est iure aliquam magni quam molestias cum at et natus'
     },
     {
        name:'ko',
        response:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente, excepturi laudantium debitis, ab similique, consequuntur architecto fugiat velit enim est iure aliquam magni quam molestias cum at et natus'
     },])
    const scrollViewRef = useRef();
    const [number, onChangeNumber] = React.useState('');



// Function to make API call
const  generateCompletion= async ()=> {
  const newdata={name:'kan',response:number}
  setdata([...data,newdata])
// Define endpoint URL here
const endpointUrl = "https://api.openai.com/v1/completions";

// Define Header Parameters here
const headerParameters = {
"Authorization": `Bearer ${Config.API_KEY}`,
"Content-Type": "application/json"
};

const bodyParameters = JSON.stringify({
model: "text-davinci-002",
prompt: "Brainstorm some ideas combining deep learning and images:\n",
temperature: 0.75,
max_tokens: 200,
top_p: 1.0,
frequency_penalty: 1,
presence_penalty: 1
});

// Setting API call options
const options = {
method: "POST",
headers: headerParameters,
body: bodyParameters
};
 await axios.post(endpointUrl,bodyParameters,headerParameters)
 .then((res)=>{
  console.log(res.data)
 })
 .catch((err)=>{
    console.log(err);
 })
    }

   useEffect(() => {

   }, [data])
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
    {
        data.map((d)=>(
    <View style={{flex:0.5,padding:20}} key={d.id}>
       <View style={{backgroundColor:'blue',width:50,justifyContent:'center',alignItems:'center',padding:10,borderRadius:4}}><Text style={{fontSize:25}}>{d.name}</Text></View>
       <View style={{backgroundColor:'grey',marginTop:5,padding:20,borderRadius:10}}><Text style={{fontSize:22}}>{d.response}</Text></View>
    </View>
        ))
    }

</ScrollView>
    <View style={{flex:0.1,backgroundColor:'#0d1b2a',flexDirection:'row',padding:10,justifyContent:'space-around',padding:10}}>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
      />
      <TouchableOpacity style={{display:'flex',justifyContent:'center',alignItems:'center'}} onPress={()=> generateCompletion()}>
        <Ionicons name={'send-sharp'} size={20} color={'white'} />
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