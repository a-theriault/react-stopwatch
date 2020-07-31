
export const padZero = digit => ("0"+digit).slice(-2)              // prepend zero then slice 'extra' from end
export const seconds = time => {                                   // modulo into 60 from 1k milliseconds in second
    return ((time / 1000) % 60) 
  }
export const minutes = time => (this.seconds(time) / 60)
export const hours = time => (this.minutes(time) / 60) 
export const format = (fn, time) => this.padZero(                  // all together as convenience method
  Math.floor(
    this[fn](time)
  )
)