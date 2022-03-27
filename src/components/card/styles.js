import { StyleSheet,Dimensions } from 'react-native'
import { colors } from '../../constants/theme';

const {width,height} = Dimensions.get('screen');

export const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    card: {
        
        height: height * 0.35,
        justifyContent: 'center',
        backgroundColor: colors.primary,
        marginTop: height * 0.03,
        marginHorizontal: 50,
        elevation: 5,

    },



});