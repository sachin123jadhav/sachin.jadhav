import React from 'react'

const Badge = ({
  label = 'Badge',
  bgColor = 'bg-[#f2f2f2]',
  textColor = 'text-slate-600',
  className = ''
}) => {
  return (
    <div
      className={`rounded-full px-4 py-1 inline-block text-center mr-2 ${bgColor} ${className}`}
    >
      <p className={`mb-0 text-sm font-medium ${textColor}`}>
        {label}
      </p>
    </div>
  )
}

export default Badge
