import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:10,
        paddingTop:12,
        backgroundColor:'orange'

        
    },
    title:{
        backgroundColor:'blue',
        padding:10,
    },
    title_text:{
        textAlign:'center',
        color:'gray',
        fontSize:16,
        fontWeight:'500'
    },
    input:{
        marginTop:5,
        padding:4,
        backgroundColor:'#ccc',
        borderRadius:50
    },
    opacity_button:{
        paddingTop:10,
        textAlign:'center',
    },
    card:{
        padding:10,
        backgroundColor:'#ddd',
        margin:5,
        
    }
})

export default styles;