// src/styles/globalStyles.js

import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

export const globalStyles = StyleSheet.create({
    // Contenedores
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    containerPadding: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
        paddingTop: spacing.md,
    },

    // Tarjetas
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 12,
        padding: spacing.md,
        marginBottom: spacing.md,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    // Textos
    title: {
        fontSize: typography.xlarge,
        fontWeight: typography.bold,
        color: colors.textPrimary,
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: typography.large,
        fontWeight: typography.semibold,
        color: colors.textPrimary,
        marginBottom: spacing.xs,
    },
    body: {
        fontSize: typography.regular,
        fontWeight: typography.regular,
        color: colors.textSecondary,
        lineHeight: 22,
    },
    caption: {
        fontSize: typography.small,
        fontWeight: typography.regular,
        color: colors.textLight,
    },

    // Botones
    button: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: typography.regular,
        fontWeight: typography.semibold,
    },
    buttonSecondary: {
        backgroundColor: colors.secondary,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Inputs
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grayLight,
        borderRadius: 8,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        fontSize: typography.regular,
        color: colors.textPrimary,
    },

    // Imágenes
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: spacing.sm,
    },

    // Separadores
    divider: {
        height: 1,
        backgroundColor: colors.grayLight,
        marginVertical: spacing.md,
    },

    // Espaciados
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});