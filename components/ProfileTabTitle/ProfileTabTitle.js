import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import profileTabTitlelStyle from './style';

const ProfileTabTitle = (props) => {

    return (
        <Text style={[profileTabTitlelStyle.title, !props.isFocused && profileTabTitlelStyle.titleNotFocused]}>{props.title}</Text>
    );
};

ProfileTabTitle.propTypes = {
    title: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired,
}

export default ProfileTabTitle;