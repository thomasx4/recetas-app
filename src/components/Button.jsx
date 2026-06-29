// src/components/Button.jsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

const Button = ({
    title,
    onPress,
    type = 'primary',
    size = 'medium',
    disabled = false,
    style = {},
    textStyle = {}
}) => {
    const getButtonStyles = () => {
        if (disabled) {
            return styles.disabled;
        }
        if (type === 'secondary') {
            return styles.secondary;
        }
        return styles.primary;
    };

    const getTextStyles = () => {
        if (type === 'secondary') {
            return styles.secondaryText;
        }
        return styles.primaryText;
    };

    const getSizeStyles = () => {
        if (size === 'small') {
            return styles.small;
        }
        if (size === 'large') {
            return styles.large;
        }
        return styles.medium;
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                getButtonStyles(),
                getSizeStyles(),
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, getTextStyles(), textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.secondary,
    },
    disabled: {
        backgroundColor: colors.grayLight,
    },
    small: {
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.md,
        minHeight: 36,
    },
    medium: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        minHeight: 44,
    },
    large: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        minHeight: 52,
    },
    text: {
        fontSize: typography.regular,
        fontWeight: typography.semibold,
    },
    primaryText: {
        color: colors.white,
    },
    secondaryText: {
        color: colors.white,
    },
});

export default Button;