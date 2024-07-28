import React from 'react'

export const Header = () => {
  return (
    <>
    <div className="container">
      <div className="flex flex-wrap gap-5 justify-between items-center py-3 px-4 bg-primary mb-6  rounded-lg">
        <div className="flex items-center gap-9 text-white">
          <h1 className='text-lg font-bold'>6 Suggestions</h1>
          <p className='text-sm font-bold'><span className='font-thin'>Sort by :</span> Most Upvotes</p>
        </div>
        <div className="">
          <button className='py-3 px-6 bg-[#AD1FEA] text-white rounded-xl'>+ Add Feedback</button>
        </div>
      </div>
    </div>
    </>
  )
}