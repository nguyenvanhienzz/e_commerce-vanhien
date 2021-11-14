import './deal.css';
import React, { useEffect, useState } from 'react'
import ImgOne from '../../../images/counter-img.png'
import { useHistory } from 'react-router';

const Deal = () => {
    const history = useHistory();
    const today = new Date();
    const countData = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, today.getHours(), today.getMinutes(), today.getSeconds()).getTime();
    const [day, setDay] = useState(0);
    const [hours, setHours] = useState(0);
    const [minu, setMinu] = useState(0);
    const [second, setSecond] = useState(0);
    useEffect(() => {
        function countDown() {
            let now = new Date().getTime();
            let gap = now - countData;
            let seconds = 1000;
            let minutes = seconds * 60;
            let hours = minutes * 60;
            let day = hours * 24;
            let d = Math.floor(gap / (day));
            let h = Math.floor((gap % (day) / (hours)));
            let m = Math.floor((gap % (hours) / (minutes)));
            let s = Math.floor((gap % (minutes) / (seconds)))
            setDay(d);
            setHours(h);
            setMinu(m);
            setSecond(s);
        };

        setInterval(function () {
            countDown();
        }, 1000)

    }, []);
    return (
        <section className='deal'>
            <h1 className='heading'>
                Special <span>deal</span>
            </h1>
            <div className='row'>
                <div className='content'>
                    <span className='discount'>
                        Upto 50% Off
                    </span>
                    <h3 className='text'>
                        Deal Of The Day
                    </h3>
                    <div className='count-down'>
                        <div className='box'>
                            <h3 id='days'>{day == 0 ? '00' : day}</h3>
                            <span>Days</span>
                        </div>
                        <div className='box'>
                            <h3 id='hours'>{hours == 0 ? '00' : hours}</h3>
                            <span>Hours</span>
                        </div>
                        <div className='box'>
                            <h3 id='minutes'>{minu == 0 ? '00' : minu}</h3>
                            <span>Minutes</span>
                        </div>
                        <div className='box'>
                            <h3 id='seconds'>{second == 0 ? '00' : second}</h3>
                            <span>Seconds</span>
                        </div>

                    </div>
                    <button className='btn' onClick={() => history.push('/sales')}>
                        Shop Now
                    </button>
                </div>
                <div className='image'>
                    <img src={ImgOne} />
                </div>
            </div>
        </section>
    )
}

export default Deal
