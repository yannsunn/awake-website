// Button styles for consistent UI
export const BUTTON_STYLES = {
  primary: 'bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl',
  secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-lg font-medium transition-all duration-200',
  outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200',
  minimal: 'text-gray-700 hover:text-gray-900 px-4 py-2 font-medium transition-colors duration-200'
} as const

// Common animation variants
export const FADE_IN_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
} as const

// Common breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const