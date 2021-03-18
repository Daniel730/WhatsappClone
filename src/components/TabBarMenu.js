import React from "react";
import {View, Text, StatusBar, Image, TouchableHighlight} from 'react-native';
import {TabBar} from "react-native-tab-view";
import {Actions} from 'react-native-router-flux';

export default props => (
    <View style={{backgroundColor: "rgb(0, 0, 0)", elevation: 5, marginBottom: 10}}>
        <StatusBar backgroundColor="black" />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{height: 50, justifyContent: 'center'}}>
                <Text style={{color: "#FFF", fontSize: 20, marginLeft: 20}}>Whatsapp Clone</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 20}}>
                <View style={{width: 50, justifyContent: 'center', alignItems:"center"}}>
                    <TouchableHighlight onPress={() => Actions.adicionarContato()} underlayColor="lightgray">
                        <Image source={require("./../imgs/adicionar_contato.png")}/>
                    </TouchableHighlight>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, color: "#FFF"}}>Sair</Text>
                </View>
            </View>
        </View>
        <TabBar style={{backgroundColor: "rgb(0, 0, 0)", elevation: 0}} {...props}/>
    </View>
)