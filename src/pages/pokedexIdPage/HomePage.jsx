import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerSlice } from '../../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'

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
    <div>
        <h1>Pokedex</h1>
        <h2>Hi Trainer!</h2>
        <p>To start, please, enter your trainer nickname</p>
        <form onSubmit={handeleTrainer}>
            <input ref={inputTrainer} type="text" />
            <button>start!</button>
        </form>
    </div>
  )
}

export default HomePage