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
        <div className=" flex flex-col justify-end w-full h-[130px] mb-8 bg-no-repeat bg-cover rounded-[25px] text-bg-white-styled text-[24px] bg-center bg-[url('/Pozole.png')]">

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
      {popup && <div className='flex flex-col justify-center h-[100vh] items-center w-full fixed bottom-0 backdrop-blur-2xl bg-bg-gray-blured right-auto max-w-screen-sm'>
        <div className={`flex flex-col justify-center p-8 gap-4 items-center w-11/12  rounded-[16px] bottom-0 max-w-screen-sm bg-white`}>
          <Image onClick={() => setPopup(false)} style={{ alignSelf: 'flex-end', cursor: 'pointer', }} width={16} height={16} alt='cross' src='/cross.png' />
          
          
          <Datepicker showCalendar={showCalendar} setShowCalendar={setShowCalendar} setTimePicker={setTimePicker}/>
          <Timepicker timePicker={timePicker} setTimePicker={setTimePicker} setShowCalendar={setShowCalendar}/>
          <div  className='w-full bg-orange-primary flex justify-center items-center gap-[25px] h-[56px] rounded-[20px] text-bg-white-styled text-[18px] active:bg-orange-primary '>
             <button onClick={persClickHandler} className='bg-white w-[28px] h-[28px] rounded-full text-black text-[27px] active:bg-gray-200'>-</button>
              <span>{pers + ' Pers'}</span>
              <button onClick={() => setPers(pers+1)} className='bg-white w-[28px] h-[28px] rounded-full text-black text-[27px] active:bg-gray-200'>+</button>
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