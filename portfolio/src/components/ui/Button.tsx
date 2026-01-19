import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl',
    secondary: 'bg-primary-dark text-white hover:bg-primary-dark/80',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}
