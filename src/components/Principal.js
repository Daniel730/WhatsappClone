import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Conversas' },
      { key: '2', title: 'Contatos' },
    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    '1': Conversas,
    '2': Contatos,
  });

  render() {
    return (
      <Image style={{flex: 1, width: null}} blurRadius={1.5} source={require('../imgs/bg.png')}>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      </Image>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});