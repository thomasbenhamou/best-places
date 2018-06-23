import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  };

  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      location: {
        value: null,
        valid: false
      }
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  };

  onPlaceAddedHandler = () => {
    this.props.onAddPlace(this.state.placeName, this.state.controls.location.value);
  };

  locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation onLocationPick={this.locationPickedHandler} />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Share the place"
            onPress={this.onPlaceAddedHandler}
            disabled={this.state.placeName === '' || !this.state.controls.location.valid}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    margin: 8
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, location) => dispatch(addPlace(placeName, location))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
