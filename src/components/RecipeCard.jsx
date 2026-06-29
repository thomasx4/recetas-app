// src/components/RecipeCard.jsx

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

const RecipeCard = ({
    recipe,
    onPress,
    style = {}
}) => {
    const { title, category, prepTime, image, difficulty } = recipe;

    const getDifficultyColor = () => {
        if (difficulty === 'Fácil') return colors.success;
        if (difficulty === 'Media') return colors.warning;
        return colors.error;
    };

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: image }}
                style={styles.image}
                defaultSource={require('../assets/images')}
            />

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor() }]}>
                        <Text style={styles.difficultyText}>{difficulty}</Text>
                    </View>
                </View>

                <View style={styles.details}>
                    <Text style={styles.category}>{category}</Text>
                    <Text style={styles.time}>{prepTime} min</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 12,
        marginHorizontal: spacing.md,
        marginBottom: spacing.md,
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 180,
        backgroundColor: colors.grayLight,
    },
    content: {
        padding: spacing.md,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.xs,
    },
    title: {
        fontSize: typography.regular,
        fontWeight: typography.bold,
        color: colors.textPrimary,
        flex: 1,
        marginRight: spacing.sm,
    },
    difficultyBadge: {
        paddingHorizontal: spacing.sm,
        paddingVertical: 2,
        borderRadius: 12,
    },
    difficultyText: {
        fontSize: typography.small,
        color: colors.white,
        fontWeight: typography.medium,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    category: {
        fontSize: typography.small,
        color: colors.textSecondary,
    },
    time: {
        fontSize: typography.small,
        color: colors.textLight,
    },
});

export default RecipeCard;