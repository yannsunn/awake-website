// UI Style Constants
export const STYLES = {
  // Container
  container: 'mx-auto max-w-7xl px-6 lg:px-8',
  
  // Button styles
  button: {
    primary: 'inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2',
    secondary: 'inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2',
    outline: 'inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2',
    minimal: 'inline-flex items-center justify-center text-gray-700 px-4 py-2 font-medium transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
  },
  
  // Section spacing
  section: {
    hero: 'py-12 sm:py-16 lg:py-20',
    content: 'py-12 sm:py-16 lg:py-20',
    cta: 'py-12 sm:py-16 lg:py-20 bg-gray-900 text-white',
    features: 'py-12 sm:py-16 lg:py-20 bg-gray-50',
    pricing: 'py-12 sm:py-16 lg:py-20'
  },
  
  // Card styles
  card: {
    default: 'bg-white rounded-2xl p-8 border border-gray-100',
    featured: 'bg-white rounded-2xl p-8 border border-gray-900 ring-2 ring-gray-900 ring-opacity-10',
    compact: 'bg-white rounded-lg p-6 border border-gray-100'
  },
  
  // Typography
  heading: {
    h1: 'text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl',
    h2: 'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl',
    h3: 'text-2xl font-semibold text-gray-900 sm:text-3xl',
    h4: 'text-xl font-semibold text-gray-900'
  },
  
  // Form elements
  form: {
    input: 'block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900',
    textarea: 'block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none',
    label: 'block text-sm font-medium text-gray-700 mb-2',
    error: 'text-sm text-red-600 mt-1'
  }
} as const

// Legacy exports for compatibility
export const BUTTON_STYLES = STYLES.button

// Common breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const