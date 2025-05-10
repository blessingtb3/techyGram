import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const ProfileTabContentStyle = StyleSheet.create({

    profileTabContentContainer:{
        backgroundColor: 'white',
    },
    ProfileTabContent:{
        paddingHorizontal: horizontalScale(21),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
        
    },
    image:{
        marginBottom: verticalScale(10),
        width: horizontalScale(145),
        height: verticalScale(90),
        borderRadius: 10
    }
});

export default ProfileTabContentStyle;