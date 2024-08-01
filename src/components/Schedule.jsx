import React from 'react'

const Schedule = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${'/images/bg-schedule.svg'})` }}>
    <div className="absolute inset-0"></div>
    <div className="relative flex flex-col items-center justify-center h-full text-white">
      <div className="text-center">
        <div className="mb-4">
          <span className="border bg-gray-50 text-black px-4 py-2 rounded-full text-sm">What Our Clients Says</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-12 mt-20 [font-family:'Poly-Regular']">Meet Your Talent <br /> Sourcing Needs Here</h1>
        <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-300">Schedule a call</button>
      </div>
    </div>
  </div>
  )
}

export default Schedule
