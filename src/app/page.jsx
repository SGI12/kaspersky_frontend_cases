'use client'
import { Ephesis } from 'next/font/google';
import React, { useState } from 'react';
import Image from 'next/image';
import Datepicker from './components/Datepicker/Datepicker'
import Timepicker from './components/Timepicker/Timepicker'

const ephesis = Ephesis({ subsets: ['latin'], weight: '400' })


const Home = () => {
  const [popup, setPopup] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [timePicker, setTimePicker] = useState(false)
  const [pers, setPers] = useState(1)
  const [phone, setPhone] = useState('')
  const [liquidLabPopup, setLiquidLabPopup] = useState(false)
  const phoneChangeHandler = (e) => {
    
  // мейби тут будет валиадация 

      setPhone(e.target.value)
 
  }
  const persClickHandler = () => {
    if (pers > 1) {
      setPers(pers-1)
    }
  }

  
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
      
      </div>
      
      <div className="hidden md:hidden absolute flex-col items-center justify-center gap-10 z-3 w-full h-full bg-white text-gray-accent ">
        <h1 className={`${ephesis.className} text-[4.5vw]`} >Ei nabe Restaurant</h1>
        <h3 className='text-[2vw] font-bold'>Please open from your mobile device</h3>
      </div>
      <div className='flex flex-col px-[16px] text-gray-accent items-start max-w-screen-sm w-full min-h-full pb-28'>
        <h3 className={`${ephesis.className} text-[32px] py-8 border-b-2`}>
          Ei nabe Restaurant
        </h3>
        <h2 className='text-[24px] text-gray-accent font-bold mb-8  '>
          Menu
        </h2>
        <div className=" flex flex-col justify-end w-full h-[130px] mb-8 bg-no-repeat bg-cover rounded-[25px] text-bg-white-styled text-[24px] bg-center bg-[url('/chala.png')]">

          <p className='pb-2 pl-6'>Chilaquiles</p>
        </div>
        <div className=" flex flex-col justify-end w-full h-[130px] mb-8 bg-no-repeat bg-cover rounded-[25px] text-bg-white-styled text-[24px] bg-center bg-[url('/pozole.png')]">

          <p className='pb-2 pl-6'>Pozole</p>
        </div>
        <div className=" flex flex-col justify-end w-full h-[130px] mb-8 bg-no-repeat bg-cover rounded-[25px] text-bg-white-styled text-[24px] bg-center bg-[url('/tacos.png')]">

          <p className='pb-2 pl-6'>Tacos Al Pastor</p>
        </div>
        <div className=" flex flex-col justify-end w-full h-[130px] mb-8 bg-no-repeat bg-cover rounded-[25px] text-bg-white-styled text-[24px] bg-center bg-[url('/burrito.png')]">

          <p className='pb-2 pl-6'>Burritos</p>
        </div>
        <div className=" flex flex-col justify-end w-full h-[130px] mb-11 bg-no-repeat bg-cover rounded-[25px] text-bg-white-styled text-[24px] bg-center bg-[url('/Torta.png')]">

          <p className='pb-2 pl-6'>Torta Cubana</p>
        </div>


      </div>
      {popup && <div className='flex animate-slideIn flex-col justify-center h-[100vh] items-center w-full fixed bottom-0 backdrop-blur-2xl bg-bg-gray-blured right-auto max-w-screen-sm'>
        <div className={`flex flex-col justify-center p-8 gap-4 items-center w-11/12  rounded-[16px] bottom-0 max-w-screen-sm bg-white`}>
          <Image onClick={() => setPopup(false)} style={{ alignSelf: 'flex-end', cursor: 'pointer', }} width={16} height={16} alt='cross' src='/cross.png' />
          
          
          <Datepicker showCalendar={showCalendar} setShowCalendar={setShowCalendar} setTimePicker={setTimePicker}/>
          <Timepicker timePicker={timePicker} setTimePicker={setTimePicker} setShowCalendar={setShowCalendar}/>
          <div  className='w-full bg-orange-primary flex justify-center items-center gap-[25px] h-[56px] rounded-[20px] text-bg-white-styled text-[18px] active:bg-orange-primary '>
             <button onClick={persClickHandler} className='bg-white w-[28px] h-[28px] rounded-full text-black text-[27px] active:bg-gray-200'>-</button>
              <span>{pers + ' Pers'}</span>
              <button onClick={() => setPers(pers+1)} className='bg-white w-[28px] h-[28px] rounded-full text-black text-[27px] active:bg-gray-200'>+</button>
          </div>
          
          {!showCalendar && !timePicker && <div className='flex flex-col gap-4 w-full'>
            <input type="text" placeholder='Name' className='h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent' />
            <input type="text" placeholder='Lastname' className='h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent' />
            <input value={phone} type="tel" onChange={(e) => phoneChangeHandler(e)} placeholder='(---) --- ----' className='h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent' />
          </div>}
          
          {liquidLabPopup && <div className='flex flex-col animate-slideIn  top-8 justify-center items-center w-10/12 text-gray-accent text-[16px]  left-0 right-0 mx-auto p-6 drop-shadow-xl rounded-[10px] absolute bg-white'>
          <Image onClick={() => setLiquidLabPopup(false)} style={{ alignSelf: 'flex-end', cursor: 'pointer', }} width={16} height={16} alt='cross' src='/cross.png' />
            If you don't have a QR it can be made by following this link <a href="#" className='self-start underline' target="_blank" rel="noopener noreferrer">LiquidLab</a>
          </div>}
          
          
          <div className='w-full'>
          
          <button onClick={() => setLiquidLabPopup(true)} className=' flex justify-center gap-3 items-center w-full bg-transparent border-dashed h-[56px] text-[18px] border-orange-primary border-2 rounded-[20px] text-orange-accent'>
          
            Upload QR
            <Image  src='/cloud_icon.png' alt='icon' width={28} height={28}/>
          </button>
          </div>
          <button onClick={() => setPopup(!popup)} className='w-full bg-orange-accent h-[56px] rounded-[20px] text-bg-white-styled text-[18px] active:bg-orange-primary '>Book</button>
        </div>



      </div>}
      <div className={!popup ? `flex flex-col justify-center items-center w-full h-[136px] fixed bottom-0 max-w-screen-sm bg-white` : 'hidden'}>

        <button onClick={() => setPopup(!popup)} className='w-10/12 bg-orange-accent h-[56px] rounded-[20px] text-bg-white-styled text-[18px] active:bg-orange-primary '>Book</button>
      </div>
      
      
    </main>

  );
}

export default Home