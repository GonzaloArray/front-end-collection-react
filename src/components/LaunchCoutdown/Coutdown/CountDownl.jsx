import React from 'react'
import FlipCountdown from '@rumess/react-flip-countdown'
import './CountDown.css'

export const CountDownl = () => {
  return (
    <div>
      <FlipCountdown
        hideYear
        hideMonth
        theme='dark'
        size='large'
        titlePosition='bottom'

        endAt={new Date(
          Date.now() +
                    1000 /* sec */ *
                    60 /* min */ *
                    60 /* hour */ *
                    48 /* day */ *
                    30 /* month */ *
                    12 /* year */ *
                    2
        ).toUTCString()}
        dayTitle='DAYS'
        hourTitle='HOURS'
        minuteTitle='MINUTES'
        secondTitle='SECONDS'
      />
    </div>
  )
}
