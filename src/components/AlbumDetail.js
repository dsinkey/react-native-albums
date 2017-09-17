import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const {title, artist, thumbnail_image, image} = album;
  const { headerContentStyle,
          thumbnailStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle } = styles;

  return (
      <Card>
        <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={ headerTextStyle }>{title}</Text>
          <Text>{artist}</Text>
        </View>
        </CardSection>

        <CardSection>
          <Image style={ imageStyle } source={{ uri: image }}>
          </Image>
        </CardSection>

        <CardSection>
          <Button />
        </CardSection>
      </Card>
  )
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}

export default AlbumDetail;
