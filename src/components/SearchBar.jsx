// src/components/SearchBar.jsx

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

const SearchBar = ({
    value,
    onChangeText,
    placeholder = 'Buscar recetas...',
    style = {}
}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.textLight}
                returnKeyType="search"
                clearButtonMode="while-editing"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginHorizontal: spacing.md,
        marginVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderWidth: 1,
        borderColor: colors.grayLight,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        fontSize: typography.regular,
        color: colors.textPrimary,
        paddingVertical: spacing.sm,
        minHeight: 40,
    },
});

export default SearchBar;