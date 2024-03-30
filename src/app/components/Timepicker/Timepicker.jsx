import React, { useEffect, useRef, useState } from 'react';
import styles from './Timepicker.css'
import { init, moveFormat, moveHour, moveMinute } from './index'
import { Inter } from 'next/font/google';

const hours = ['', '', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '', '']
const minutes = ['', '', '00', '10', '20', '30', '40', '50', '', '']
const inter = Inter({ subsets: ['latin'] })

const Timepicker = ({timePicker, setTimePicker, setShowCalendar}) => {


    const handleHourScroll = () => {
        const currentHour = document.querySelector('.hour .active').innerHTML
        setHour(currentHour)
    }
    const handleMinuteScroll = () => {
        const currentMinute = document.querySelector('.minute .active').innerHTML
        setMinute(currentMinute)
    }

    const handleFormatScroll = () => {
        const currentFormat = document.querySelector('.AM_PM .active').innerHTML
        setFormat(currentFormat)
    }
    const [hour, setHour] = useState('10')
    const [minute, setMinute] = useState('00')
    const [format, setFormat] = useState('PM')
  
    useEffect(() => {
        init()
    }, [])
    return (
        <>
            <button onClick={() => {setTimePicker(!timePicker); setShowCalendar(false)}} className='w-full  h-[56px] rounded-[20px] text-bg-white-styled text-[18px] bg-orange-primary '>{hour + ":" + minute + ' ' + format}</button>
            {timePicker && <div className={`clock ${inter.className}`}>
                <div className="hour" onScroll={(e) => { moveHour(e.target); handleHourScroll() }}>
                    <ul className={inter.className}>
                        {hours.map((hour, index) => (
                            <li key={index}>{hour}</li>
                        ))}
                    </ul>
                </div>
                <div className="minute" onScroll={(e) => {moveMinute(e.target); handleMinuteScroll()}} >
                    <ul>
                        {minutes.map((minute, index) => (
                            <li key={index}>{minute}</li>
                        ))}
                    </ul>
                </div>
                <div onScroll={(e) => {moveFormat(e.target); handleFormatScroll()}} className='w-[100px] text-[40px] text-white AM_PM'>
                    <ul>
                        <li>AM</li>
                        <li>PM</li>
                    </ul>
                    {/* <button onClick={() => setFormat('AM')} className='bg-orange-accent rounded-t-md hover:bg-orange-primary'>AM</button>
                    <button onClick={() => setFormat('PM')} className='bg-orange-accent rounded-b-md hover:bg-orange-primary'>PM</button> */}
                </div>
            </div>}
        </>
    );
};

export default Timepicker;