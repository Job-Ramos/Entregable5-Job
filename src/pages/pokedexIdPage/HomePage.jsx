import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerSlice } from '../../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'
import './HomePage.css/HomePage.css'

const HomePage = () => {


 const inputTrainer = useRef()
 
 const dispatch = useDispatch()

 const navigate = useNavigate()

 const handeleTrainer = e => {
  e.preventDefault()
  dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
  navigate('/pokedex')
 }

  return (
    <>
    <div className='container_1p'>
    <img className='Homepage__img' src="images/poke.png" alt="" />
    <div className='Homepage'>
        <h2 className='Homepage__caption'>Hi Trainer!</h2>
        <p className='Homepage__p'>To start, please, enter your trainer nickname</p>
        <br />
        <br />
        <form className='Homepage__form' onSubmit={handeleTrainer}>
            <input className='Homepage__input' placeholder='Your name...' ref={inputTrainer} type="text" />
            <button className='Homepage__button' >Start!</button>
            <div className='btns'>
            <button className='b1'></button>
            <button className='b2'></button>
            </div>  
        </form>
    </div>
    </div>
    
    
     </>
  )
}

export default HomePage