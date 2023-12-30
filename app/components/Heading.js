import React from 'react'

const Heading = (props) => {
  const subHeading = props.subHeading || 'Enter details of your book below';

  return (
    <div className='flex flex-col justify-center items-center pt-12'>
        <h1 className='text-3xl font-bold'> {props.headingText}</h1>
        <p className='text-lg py-4'>{subHeading}</p>
    </div>
  )
}

export default Heading