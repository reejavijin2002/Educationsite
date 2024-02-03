import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Whystudeon = () => {
  return (
    <div>
         <h5 className="text-gray-400 text-center font-serif mt-20">
         Skills We Have
        </h5>
        <h2 className="text-center text-black font-bold text-4xl font-sans">
        Why Studeon?
        </h2>
        <div className="align-top justify-center flex-wrap mr-auto ml-auto w-14 h-0.5 bg-green-500 mt-6 mb-5"></div>
        <div>
            <div>
                <div>
                    <CountdownCircleTimer 
                     isPlaying
                     duration={7}
                     colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                     colorsTime={[7, 5, 2, 0]}/>
                </div>
                <div>
                    <h4>Quality</h4>
                    <h6>Students Skills</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                
                </div>
            </div>
            <div>
                <div></div>
                <div>
                <h4>Efficiency</h4>
                    <h6>Students Skills</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Whystudeon