'use client'
import { Ephesis } from 'next/font/google';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Datepicker from './components/Datepicker/Datepicker'
import Timepicker from './components/Timepicker/Timepicker'

const ephesis = Ephesis({ subsets: ['latin'], weight: '400' })


const Home = () => {
  const [popup, setPopup] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [timePicker, setTimePicker] = useState(false)
  const [pers, setPers] = useState(1)
 
  const [liquidLabPopup, setLiquidLabPopup] = useState(false)
  const [imgText, setImgText] = useState('Upload QR')
  const [image, setImage] = useState(null)
  const [liquidLabWasShown, setLiquidWasShown] = useState(false)
  const [QRError, setQRError] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [inputsInvalid, setInputsInvalid] = useState(false)
  const fileRef = useRef()
  

  const persClickHandler = () => {
    if (pers > 1) {
      setPers(pers-1)
    }
  }

  const UploadClickHandler = (e) => {
    
    if (liquidLabWasShown) {
      setInputsInvalid(false)
      fileRef.current.click()
      
    }
    else {
      
      setLiquidLabPopup(true)
      
    }
  }
  const fileLoaderHandler = (e) => {
    const file = e.target?.files[0]
    setImage(file)
    setImgText(file?.name)

  }
  const checkValid = () => {
    if ((name == '') || (lastName == '') || (phone == '') || (image == null)) {
      return false
    }
    else {
      return true
    }
  }
  // Mock img QR validation
  const ImgLoadErrorHandler = () => {
    if (!imgText) {
      setQRError(true)
    }
    else {
      setPopup(false)
      setSuccess(true)
    }
  }

  //Input validation on book button click

  const BookClickHandler = () => {
    if (checkValid()) {
     
      setSuccess(true)
    }
    else {
      setInputsInvalid(true)
      setShowCalendar(false)
      setTimePicker(false)
    }
  }

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      
    
      <div className="hidden md:flex absolute flex-col items-center justify-center gap-10 z-40 w-full h-full bg-white text-gray-accent ">
        <h1 className={`${ephesis.className} text-[4.5vw]`} >Ei nabe Restaurant</h1>
        <h3 className='text-[2vw] font-bold'>Please open from your mobile device</h3>
      </div>
      <div className='flex md:hidden flex-col px-[16px] text-gray-accent items-start max-w-screen-sm w-full min-h-full pb-28'>
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
      {popup &&  <div className='flex  flex-col justify-center h-full items-center w-full fixed bottom-0 backdrop-blur-2xl bg-bg-gray-blured right-auto max-w-screen-sm'>
       {!isSuccess &&<div className={`flex animate-slideIn flex-col justify-center h-5/6 p-8 gap-4 items-center w-11/12 overflow-hidden rounded-[16px] bottom-0 max-w-screen-sm bg-white`}>
          <Image onClick={() => setPopup(false)} style={{ alignSelf: 'flex-end', cursor: 'pointer', }} width={16} height={16} alt='cross' src='/cross.png' />
          
          
          <Datepicker showCalendar={showCalendar} setShowCalendar={setShowCalendar} setTimePicker={setTimePicker}/>
          <Timepicker timePicker={timePicker} setTimePicker={setTimePicker} setShowCalendar={setShowCalendar}/>
          <div  className='w-full bg-orange-primary flex justify-center items-center gap-[25px] h-[56px] rounded-[20px] text-bg-white-styled text-[18px] active:bg-orange-primary '>
             <button onClick={persClickHandler} className='bg-white w-[28px] h-[28px] rounded-full text-black text-[27px] active:bg-gray-200'>-</button>
              <span>{pers + ' persons'}</span>
              <button onClick={() => setPers(pers+1)} className='bg-white w-[28px] h-[28px] rounded-full text-black text-[27px] active:bg-gray-200'>+</button>
          </div>
          
          {!showCalendar && !timePicker && <div className='flex flex-col gap-4 w-full'>
            <input onClick={() => setInputsInvalid(false)} onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className={name!=='' ? `h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent` : `h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent border-red-400 border border-solid`} />
            <input onClick={() => setInputsInvalid(false)} onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" placeholder='Lastname' className={lastName!=='' ? `h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent` : `h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent border-red-400 border border-solid`} />
            <input onClick={() => setInputsInvalid(false)} onChange={(e) => setPhone(e.target.value)} value={phone} type="tel"  placeholder='(---) --- ----' className={phone!=='' ? `h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent` : `h-[56px] bg-gray-field w-full rounded-[20px] px-6 focus:outline-none text-gray-accent border-red-400 border border-solid`} />
            {inputsInvalid && <div className='flex animate-shake gap-1 self-center items-center text-error text-md '>Please fill in all the text fields and upload the image.</div>}
          </div>}
          
          {liquidLabPopup && <div className='flex flex-col animate-slideIn  top-8 justify-center items-center w-10/12 text-gray-accent text-[16px]  left-0 right-0 mx-auto p-6 drop-shadow-xl rounded-[10px] absolute bg-white'>
          <Image onClick={() => {setLiquidLabPopup(false); setLiquidWasShown(true); }} style={{ alignSelf: 'flex-end', cursor: 'pointer', }} width={16} height={16} alt='cross' src='/cross.png' />
            If you don&apos;t have a QR it can be made by following this link <a href="#" className='self-start underline' target="_blank" rel="noopener noreferrer">LiquidLab</a>
          </div>}
          
          
          <div className='w-full'>
          
          <div onClick={UploadClickHandler} className=' flex justify-center gap-3 items-center w-full bg-transparent border-dashed h-[56px] text-[18px] border-orange-primary border-2 rounded-[20px] text-orange-accent'>
          
            <input hidden onChange={fileLoaderHandler} ref={fileRef} type="file" />
            <span className='truncate max-w-[60%]'>{imgText}</span>
            <Image  src='/cloud_icon.png' alt='icon' width={28} height={28}/>
          </div>
          </div>
          <button onClick={BookClickHandler} className='w-full bg-orange-accent h-[56px] rounded-[20px] text-bg-white-styled text-[18px] active:bg-orange-primary '>Book</button>
          {QRError && <div className='flex gap-1 items-center  text-error text-md '><Image src='/error_icon.png' alt='error icon' width={16} height={16}/> There&apos;s no QR in the picture</div>}
        
        </div>}
        {isSuccess && 
        <div className={`flex flex-col justify-start h-5/6 p-8 gap-4 items-center w-11/12 overflow-hidden rounded-[16px] bottom-0 max-w-screen-sm bg-white`}>
          <Image onClick={() => {setSuccess(false); setPopup(false)}} style={{ alignSelf: 'flex-end', cursor: 'pointer', }} width={16} height={16} alt='cross' src='/cross.png' />
          <Image className='animate-fadeIn' src='/accept.png' alt='accept' width={130} height={130} style={{paddingTop: '50%'}}></Image>
          <p className=' text-green text-2xl text-center pt-5 animate-fadeIn'>Your booking is on manual review</p>
          </div>

     }
        


      </div>}
     
      {!isSuccess && <div className={!popup ? `flex flex-col justify-center items-center w-full h-[136px] fixed bottom-0 max-w-screen-sm bg-white` : 'hidden'}>

        <button onClick={() => setPopup(true)} className='w-10/12 bg-orange-accent h-[56px] rounded-[20px] text-bg-white-styled text-[18px] active:bg-orange-primary '>Book</button>
      </div>}
      
      
    </main>

  );
}

export default Home