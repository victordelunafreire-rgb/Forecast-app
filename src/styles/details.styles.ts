import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from './colors';

export const detailsStyles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
  },

  backButton: {
    padding: spacing.md,
    marginTop: spacing.md,
  },

  backButtonText: {
    ...typography.body,
    color: colors.primary,
  },

  header: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },

  title: {
    ...typography.title,
    color: colors.text,
    textAlign: 'center',
  },

  subTitle: {
    ...typography.subtitle,
    textAlign: 'center',
    marginTop: spacing.xs,
    color: colors.textSecondary,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl * 2,
  },

  loadingText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl * 2,
  },

  errorText: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  return: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  retryButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
  },
});