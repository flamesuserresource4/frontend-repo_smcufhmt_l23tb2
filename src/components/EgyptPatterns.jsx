import React from 'react'

export function PyramidDivider(){
  return (
    <div className="relative h-12 w-full overflow-hidden">
      <svg aria-hidden viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M0,0 100,120 200,0 300,120 400,0 500,120 600,0 700,120 800,0 900,120 1000,0 1100,120 1200,0 1200,120 0,120Z" className="fill-sand-100 dark:fill-slate-900"/>
      </svg>
    </div>
  )
}
