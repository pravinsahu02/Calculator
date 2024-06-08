import React, { useState } from 'react'
import './calc.css'

const Calc = () => {
    const [input,setinput] = useState('');
   let  handleclick = (value)=>{
        if(value === 'C'){
            setinput('')
        }else if(value === '&lt;'){
            setinput(input.slice(0,-1));
        }else if(value === '=')try{
            setinput(eval(input).toString())
        }catch(error){
            setinput('Error')
        }
        else{
            setinput((prevalue)=>prevalue + value)
        }
    }
  return (
    <div className='container'>
        <h1  className='head'>Calculator</h1>
        <div className='card'>
            <div className='inp'>
            <h1>{input}</h1>
            </div>
            <div className='buttoncomp'>
                <button className='btn' onClick={()=>{
                    handleclick('C')
                }}><h1>C</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('&lt;')
                }}><h1>&lt;</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('%')
                }}><h1>%</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('/')
                }}><h1>/</h1></button>
            </div>
            <div className='buttoncomp'>
                <button className='btn' onClick={()=>{
                    handleclick('7')
                }}><h1>7</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('8')
                }}><h1>8</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('9')
                }}><h1>9</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('*')
                }}><h1>*</h1></button>
            </div>
            <div className='buttoncomp'>
                <button className='btn' onClick={()=>{
                    handleclick('4')
                }}><h1>4</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('5')
                }}><h1>5</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('6')
                }}><h1>6</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('-')
                }}><h1>-</h1></button>
            </div>
            <div className='buttoncomp'>
                <button className='btn' onClick={()=>{
                    handleclick('1')
                }}><h1>1</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('2')
                }}><h1>2</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('3')
                }}><h1>3</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('+')
                }}><h1>+</h1></button>
            </div>
            <div className='buttoncomp'>
                <button className='btn' onClick={()=>{
                    handleclick('00')
                }}><h1>00</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('0')
                }}><h1>0</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('.')
                }}><h1>.</h1></button>
                <button className='btn' onClick={()=>{
                    handleclick('=')
                }}><h1>=</h1></button>
            </div>
        </div>

    </div>
  )
}

export default Calc