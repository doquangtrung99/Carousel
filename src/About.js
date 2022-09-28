import React from "react";
import './About.scss'
import { useEffect } from "react";


const About = () => {

    useEffect(() => {
        document.getElementById('next').addEventListener('click', handleNext)
        document.getElementById('prev').addEventListener('click', handlePrev)

    }, [])


    let direction;
    const handlePrev = () => {
        direction = 1
        document.querySelector('.text').style.transform = 'translateX(400px)'
        document.querySelector('.text').addEventListener('transitionend', handle1)

    }

    const handle1 = () => {
        if (direction === 1) {
            document.getElementById('text1').prepend(document.getElementById('text1').lastElementChild)
            document.getElementById('text1').style.transition = 'none'
            document.getElementById('text1').style.transform = 'translateX(0)'

            setTimeout(() => {
                document.getElementById('text1').style.transition = 'all 0.5s'

            })
        }

    }
    const handleNext = () => {
        direction = -1
        document.querySelector('.text').style.transform = 'translateX(-400px) '
        document.querySelector('.text').addEventListener('transitionend', handle)

    }



    const handle = () => {
        if (direction === -1) {
            document.getElementById('text1').appendChild(document.getElementById('text1').firstElementChild)
            document.getElementById('text1').style.transition = 'none'

            document.getElementById('text1').style.transform = 'translateX(0)'
            setTimeout(() => {
                document.getElementById('text1').style.transition = 'all 0.5s'

            })

        }


    }


    return (
        <div className="wrap">
            <button id='prev' className="btn-prev" >PREV</button>
            <div className="wrap-text">
                <div id='text1' className="text" style={{ color: 'black' }}>
                    <div id='01' className="child-text" >1</div>
                    <div id='02' className="child-text" >2</div>
                    <div id='03' className="child-text" >3</div>
                    <div id='04' className="child-text" >4</div>
                </div>
            </div>

            <button id='next' className="btn-next" >NEXT</button>
        </div>
    )

}

export default About;