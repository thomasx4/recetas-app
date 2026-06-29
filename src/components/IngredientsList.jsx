// src/components/IngredientsList.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

const IngredientsList = ({ ingredients, style = {} }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>Ingredientes</Text>
            {ingredients.map((ingredient, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.ingredient}>{ingredient}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.md,
        marginBottom: spacing.md,
    },
    title: {
        fontSize: typography.large,
        fontWeight: typography.bold,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.xs,
        paddingVertical: 2,
    },
    bullet: {
        fontSize: typography.large,
        color: colors.primary,
        marginRight: spacing.sm,
        fontWeight: typography.bold,
    },
    ingredient: {
        fontSize: typography.regular,
        color: colors.textSecondary,
        flex: 1,
    },
});

export default IngredientsList;