import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const NoResults = ({searchTerm}) => {
  return (
    <div className="h-[40vh] flex flex-col items-center justify-center">
            <div className="animate-pulse mb-2">
              <IoSearchSharp className="text-[#4B635B]" size={90} />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-medium text-[#1A1D14]">
                No results for "{searchTerm}"
              </h3>
              <p className="text-sm text-[#4B635B] opacity-70 md:max-w-[60%] mx-auto">
                We couldn't find what you're looking for. Please try another
                keyword.
              </p>
            </div>
          </div>
  )
}

export default NoResults
