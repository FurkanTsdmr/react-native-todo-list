import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./App.style";

const ItemList = ({ text }) => {
    return (
        <View style={styles.card}>
            <Text>
                {text}
            </Text>
        </View>
    )
}

export default ItemList;

