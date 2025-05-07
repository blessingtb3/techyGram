import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import { horizontalScale } from '../../assets/styles/scaling';

const UserStory = (props) => {
    return (
        <View style={styles.storyContainer}>
            <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(60)}/>
            <Text style={styles.firstName}>{props.firstName}</Text>
        </View>
    );
};
UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired,
}

export default UserStory;