// src/components/StepsList.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

const StepsList = ({ steps, style = {} }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>Pasos</Text>
            {steps.map((step, index) => (
                <View key={index} style={styles.item}>
                    <View style={styles.stepNumber}>
                        <Text style={styles.stepNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.step}>{step}</Text>
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
        alignItems: 'flex-start',
        marginBottom: spacing.sm,
        paddingVertical: 4,
    },
    stepNumber: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.sm,
        marginTop: 2,
    },
    stepNumberText: {
        color: colors.white,
        fontSize: typography.small,
        fontWeight: typography.bold,
    },
    step: {
        fontSize: typography.regular,
        color: colors.textSecondary,
        flex: 1,
        lineHeight: 22,
    },
});

export default StepsList;