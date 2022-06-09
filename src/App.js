import React, { Component, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './App.style'
import ItemList from './itemList';



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            data: []
        }
    }


    handleSave = () => {
        const { text, data } = this.state;
        data.push({ text })
        this.setState({ data, text: '' })

    }

    render() {
        const { text, data } = this.state

        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.title_text}>To-Do Application</Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={(text) => this.setState({ text })}
                />
                <TouchableOpacity style={styles.opacity_button} onPress={this.handleSave}>
                    <Text style={styles.title_text} >EKLE</Text>
                </TouchableOpacity>
                <View>
                    {data.map((item) => {
                        return <ItemList text={item.text} />
                    })}
                </View>
            </View>
        )
    }
}