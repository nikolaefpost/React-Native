import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

export default function Loading() {
    return <View style={styles.container}>
        <Text>Загрузка приложения ...</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})