import React from 'react'
const Form = () => {
  return (
    <div>
      <div className="sms-chanel">
        <h1 className='text-xl'>select sms chanel</h1>
        <select name="" id="" className='p-2 w-[530px] mt-4 bg-gray-100 '>
          <option value="">one</option>
        </select>
      </div>

      <div className="mt-10 flex gap-5 ">
        <div className="flex flex-col w-[330px]">
          <div className="flex justify-between">
            <h1>Compain name</h1>
            <p>send email and sms <span className="bg-lime-400  text-center">button</span></p>
          </div>
            <input type="text"  placeholder='Enter compian name'  className='mt-4 p-2 border-2 rounded-sm'/>
        </div>
        <div className=""></div>

        <div className="flex flex-col w-[330px]">
          <div className="flex justify-between">
            <h1>Compain name</h1>
            <p>update content <span className="bg-lime-400  text-center">button</span></p>
          </div>
            <input type="text"  placeholder='Enter compian name'  className='mt-4 p-2 border-2 rounded sm'/>
        </div>
        <div className=""></div>
      </div>
      {/* sms body */}
      <div className="smsbody">
        <p>sms body text</p>
           <textarea name="" id="" placeholder='enter sms body text' className='w-[1200px]'></textarea>
      </div>
    </div>
  )
}

export default Form