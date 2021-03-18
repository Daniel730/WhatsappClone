import React from 'react';
import {View, Text, Button, Image} from "react-native";
import {Actions} from "react-native-router-flux";

export default props => (
    <Image style={{flex: 1, width: null}} blurRadius={1.5} source={require('../imgs/bg.png')}>
        <View style={{flex: 1, padding: 15}}>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>Seja Bem-Vindo!</Text>
                <Image source={require("./../imgs/logo.png")} />
            </View>
            <View style={{flex: 1}}>
                <Button color="black" title="Fazer Login" onPress={() => Actions.login()} />
            </View>
        </View>
    </Image>
)