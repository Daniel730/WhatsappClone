import React from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.container}>
        <View style={styles.viewTitle}>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>Whatsapp Clone</Text>
        </View>
        <View style={styles.viewInputs}>
            <TextInput style={{fontSize: 20, height: 45, flex: 1}} placeholder="Codigo" />
            <TextInput style={{fontSize: 20, height: 45, flex: 3}} placeholder="Número de telefone" />
        </View>
        <View style={styles.viewBtn}>
            <Button title="Acessar" color="black" onPress={() => false} />
            <Text style={{fontSize: 20}}>Faça seu cadastro agora, é grátis e rápido!</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    viewTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    viewInputs: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    viewBtn: {
        flex: 2
    }
})