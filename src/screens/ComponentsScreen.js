import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Marcellus Jordan III';

    return (
        <View>
        <Text style={styles.h1}>Getting started with react native!</Text>
        <Text style={styles.p}>My name is {myName}.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 45
    },
    p: {
        fontSize: 20,
        color: 'purple'
    }
});

export default ComponentsScreen;