import { useState } from "react"



const Counter = () => {
    const [step, setStep]= useState(0)
    const [count, setCount]= useState(0)

    function handleStepSum (){
        if(step >= 0)setStep((prevVal)=> prevVal + 1)
       
    }
    function handleStepSub (){
        if(step > 0)setStep((prevVal)=> prevVal - 1)
        
    }
    function handleCounterSum(){
        if(count >= 0)setCount((preVal)=> preVal + step)
    }
    function handleCounterSub(){
        if(count > 0)setCount((preVal)=> preVal - step)
    }

const today = new Date(); // Get the current date and time

  // Calculate the future/past date by adding/subtracting days in milliseconds
  const futureDate = new Date(today.getTime() + count * 24 * 60 * 60 * 1000);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedToday = today.toLocaleDateString(undefined, options);
  const formattedFutureDate = futureDate.toLocaleDateString(undefined, options);

  // Determine if it's a future or past date based on the input
  const timeDirection = count >= 0 ? "future" : "past";
  return (
    <div className="bg-blue-400 text-center p-8 max-w-96  m-auto rounded-2xl mt-8   text-blue-100">
    <div className="flex flex-row gap-5 items-center justify-between">
    <button onClick={handleStepSub} className="px-2 bg-blue-500 text-white text-lg">-</button>
        <p>Step: {step}</p>
       
        <button onClick={handleStepSum} className="px-2 bg-blue-500 text-white text-lg">+</button>
    </div>
    <div className="flex flex-row gap-5 items-center justify-between mt-6 text-blue-900">
    <button onClick={handleCounterSub} className="px-2 bg-blue-500 text-white text-lg">-</button>
        <p >Count: {count}</p>
        <button onClick={handleCounterSum} className="px-2 bg-blue-500 text-white text-lg">+</button>
    </div>
        <p className="mt-6">Today is {formattedToday}. </p>
        <p className="mt-6">The {timeDirection} date {Math.abs(count)} days from today is {formattedFutureDate}.</p>
    </div>
  )
}

export default Counter