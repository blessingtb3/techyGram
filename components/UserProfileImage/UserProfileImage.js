import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';

import PropTypes from 'prop-types';

const UserProfileImage = (props) => {
    return (
        <View style ={[styles.userImageContainer, {borderRadius: props.imageDimensions}]}>
            <Image source={props.profileImage} style={[{width: props.imageDimensions, height: props.imageDimensions}, styles.userProfile]}/>
        </View>
    )
}
UserProfileImage.PropTypes = {
    profileImage: PropTypes.any.isRequired,
    imageDimensions: PropTypes.number.isRequired,
}

export default UserProfileImage;