import { StyleSheet,Dimensions } from 'react-native';
import { colors, fontSize, padding } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

    container: {
        flex: 1,


    },

    cardConteiner:{

        height: height * 0.35,

    },

    confirmedText: {

        fontSize: fontSize.big,
        fontWeight: 'bold',
        color: colors.secondary,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 20,


    },

    confirmedTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        color: colors.secondaryText,
        justifyContent: 'center',
        alignSelf: 'center'

    },

    buttonsContainer: {

        height: height * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 8,


    },

})