import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  random,
  selectReview,
} from './indexChangerSlice';
import styles from './ReviewCmp.module.scss';

export function ReviewCmp() {

  const { id,name,job,image,text } = useAppSelector(selectReview);
  const dispatch = useAppDispatch();


  //const incrementValue = Number(incrementAmount) || 0;
//className={styles.fa} 
  return (
    <section className={styles.section}>
      
      <div className={styles.containerImg}>
        <div className={styles.imgIconContainer} >
          <div className={styles.imgBackground}> 
            <FaBeer className={styles.imgIcon} /> 
          </div>
        </div>
        <img src={image} alt={name} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.besetzung}>{job}</p>
      <div className={styles.description}>{text}</div>
      <div className={styles.moveBtnContainer}>
        <button onClick={() => dispatch(decrement())} ><MdKeyboardArrowLeft /></button>
        <button onClick={() => dispatch(increment())} ><MdKeyboardArrowRight /></button>
      </div>
      <button className={styles.randomBtn} onClick={() => dispatch(random())}>Surprise me 😊</button>
    </section>
  )
}

/*
 /* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */


      