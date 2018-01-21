import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Products from '../../containers/Products'
import Locations from '../../containers/Locations'
import { Colors } from '../../../../resources/colors'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'map', title: 'Rota' },
      { key: 'products', title: 'Produtos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
    />
  );

  _renderScene = SceneMap({
    map: Locations,
    products: Products,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: Colors.PRIMARY_COLOR
  }
});