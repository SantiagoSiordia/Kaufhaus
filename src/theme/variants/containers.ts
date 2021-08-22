export const containerVariants = {
  defaults: {
    backgroundColor: 'white',
    borderRadius: 'standard',
    padding: 's',
  },
  standard: {
    borderWidth: 1,
    borderColor: 'light',
    shadowColor: 'overlayLight',
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 8,
  },
  filled: {
    shadowRadius: 4,
    borderWidth: 0,
  },
  outlined: {
    borderWidth: 1,
  },
  light: {
    backgroundColor: 'light',
    borderWidth: 0,
  },
  'input-selected': {
    borderWidth: 1,
    borderColor: 'secondary',
    shadowColor: 'overlayLight',
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 8,
  },
} as const;
