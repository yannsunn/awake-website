import type { BaseProps } from '@/lib/types'

interface SectionProps extends BaseProps {
  id?: string
  background?: 'white' | 'gray' | 'gradient'
  padding?: 'normal' | 'large' | 'small'
}

export default function Section({ 
  id, 
  background = 'white', 
  padding = 'normal',
  className = '',
  children 
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-primary-purple to-primary-purple-dark'
  }

  const paddingStyles = {
    small: 'py-12',
    normal: 'py-20',
    large: 'py-32'
  }

  return (
    <section 
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}