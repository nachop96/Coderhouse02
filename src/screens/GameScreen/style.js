import { StyleSheet } from 'react-native';
import { colors, fontSize, padding } from '../../constants/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,


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

        flex: 1,
        flexGrow: 0.23,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 8,


    },

})