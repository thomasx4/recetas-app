// src/components/Header.jsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

const Header = ({
    title,
    showBack = false,
    onBackPress,
    rightComponent,
    style = {}
}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.leftContainer}>
                {showBack && (
                    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.centerContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
            </View>

            <View style={styles.rightContainer}>
                {rightComponent}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.grayLight,
        minHeight: 60,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 2,
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    backButton: {
        padding: spacing.xs,
    },
    backIcon: {
        fontSize: typography.xlarge,
        color: colors.primary,
        fontWeight: typography.bold,
    },
    title: {
        fontSize: typography.large,
        fontWeight: typography.bold,
        color: colors.textPrimary,
    },
});

export default Header;