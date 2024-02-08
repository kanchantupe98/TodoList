import { View, Text, SafeAreaView, TextInput,StyleSheet, ScrollView, Button, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native'
import React,{useState} from 'react'
const data= [{
  id:"1",
  title :"kanchan"
},
{
 id:"2",
 title :"chan"
}]
const App = () => {
  const[toDO,setTodo]=useState("");
  const[todoList,setTodoList]=useState([]);

  const handleAddtodo=()=>{
    setTodoList([...todoList,{title:toDO}]);
    setTodo("");
  }
  const RemoveTodo=(title,indexNo)=>{
    let updatetodoList=todoList.filter((item,index)=>(item!==title && index!==indexNo));
    setTodoList(updatetodoList);
  }

  return (
  
        <View style={{height:"100%",marginHorizontal:10}}>
         
        <View style={{justifyContent:"center",alignItems:"center",position:"relative"}}>
           <Text style={{marginBottom:20,marginTop:22,fontSize:50,fontWeight:"bold"}}>My Todos</Text>
           
           <View style={{flexDirection:"row"}}>
  
  {/* {rendering an data} */}
           <TextInput placeholder='Make a note' style={{marginHorizontal:10,width:"75%",height:50,borderWidth:1,fontSize:20}}
            value={toDO}
            onChangeText={(userText)=>setTodo(userText)}//taking an user inputs
           /> 
           
           <TouchableOpacity style={{width:"15%",height:40,borderWidth:1,alignItems:"center", borderRadius:5,elevation:10,backgroundColor:"#88e5f7"}}
           onPress={()=>handleAddtodo()}
           >
            <Text style={{fontSize:23,fontWeight:"500"}}>Save</Text>
           </TouchableOpacity>
           </View>
        </View>
        
 {/* {display a data into list } */}
        <View >
           
           <FlatList style={{ marginTop:30}}
             data={todoList}
             renderItem={({item,index})=>{
              return( 
                 <View style={{flexDirection:"row",width:"100%"}}>
                   <View style={{width:"65%",margin:5 ,padding:10 ,elevation:5,backgroundColor:"white",borderRadius:25}}>
                   <Text style={{fontSize:25}}>{item.title}</Text>
                   </View>
              {/* {
                console.log(item.index,index)
              } */}
                   <TouchableOpacity style={{padding :5,width:"30%",margin:5,height:50,alignItems:"center",backgroundColor:"#fca7a7",borderRadius:10}}
                   onPress={()=>RemoveTodo(item,index)}
                   >
                       <Text style={{fontSize:25}}>Remove</Text>
                   </TouchableOpacity>
            
                 </View>
              )
             }}
           />
           </View>
        </View>
      
  )
}

const styles=StyleSheet.create({
  
})
export default App