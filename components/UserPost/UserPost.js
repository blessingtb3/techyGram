import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './style';
import { faBookmark, faMessage } from '@fortawesome/free-regular-svg-icons';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';

const UserPost = (props) => {
    return (
        <View style={styles.userPostContainer}>
            {/* post header */}
            <View style={styles.user}>
                <View style={styles.usercontainer}>
                    <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(48)}/>
                    <View style={styles.userTextContainer}>
                        <Text style={styles.userame}>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text style={styles.location}>{props.location}</Text>}
                    </View>
                </View>
                {/* use an icon for the elipsis  */}
                <FontAwesomeIcon icon={faEllipsisH} size={scaleFontSize(24)} color={'#79869F'}/>
            </View>
            {/* post header */}

            {/* post body */}
            <View style={styles.postImage}>
                <Image style={styles.actualImage} source={props.image}/>
            </View>
            {/* post body */}

            {/* like icon */}
            <View style={styles.userPostStats}>
                <View style={styles.userPostStatButton}>
                    <FontAwesomeIcon icon={faHeart} color={'#79869F'}/>
                    <Text style={styles.userPostStatText}>{props.likes}</Text>
                </View>
                <View style={styles.userPostStatButtonRight}>
                    <FontAwesomeIcon icon={faMessage} color={'#79869F'}/>
                    <Text style={styles.userPostStatText}>{props.comments}</Text>
                </View>
                <View style={styles.userPostStatButtonRight}>
                    <FontAwesomeIcon icon={faBookmark} color={'#79869F'}/>
                    <Text style={styles.userPostStatText}>{props.bookmarks}</Text>
                </View>
            </View>
            {/* like icon */}
        </View>
    );
}
UserPost.PropTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
};

export default UserPost;