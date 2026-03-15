import React from 'react'

const Title = ({title, preTitle}: {title: string, preTitle?: string}) => {
  return (
    <div className="flex flex-col items-center text-center">
        {preTitle &&  <h3 className="font-qurova text-base sm:text-lg md:text-xl font-light text-gray-500 uppercase tracking-normal">
            {preTitle}
          </h3>}
          <h1 className="font-ruigslay text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient-brand max-w-full px-4">
            {title}
          </h1>
        </div>
  )
}

export default Title