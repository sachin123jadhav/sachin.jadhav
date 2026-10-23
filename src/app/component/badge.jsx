import React from 'react'

const Badge = ({
  label = 'Badge',
  bgColor = 'bg-[#f2f2f2] dark:bg-slate-700',
  textColor = 'text-slate-600 dark:text-slate-300',
  className = ''
}) => {
  return (
    <div
      className={`group rounded-full px-4 py-1 inline-block text-center mr-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-md dark:hover:bg-purple-500 ${bgColor} ${className}`}
    >
      <p className={`mb-0 text-sm font-medium transition-colors duration-300 group-hover:text-white ${textColor}`}>
        {label}
      </p>
    </div>
  )
}

export default Badge
