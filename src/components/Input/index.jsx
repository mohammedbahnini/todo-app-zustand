import classNames from 'classnames';
import React, { useContext, useRef, useState } from 'react'
import {  v4 as uuid } from 'uuid';
import { AppStore } from '../../store/app-store';

function Input() {
    const { theme ,  addTask , currentFilter  } =AppStore( state => state );
    const [errorMessage, setErrorMessage] = useState('');
    const refInput = useRef(null);

    // defining styles
    const divStyle = classNames('rounded-[5px] py-[18px] px-5 mt-10 md:py-6 transition-theme ',
        {
            'bg-very-dark-grayish-violet': theme === 'dark',
            'bg-white': theme === 'light'
        });
    const circleStyle = classNames('aspect-square w-5 border-[1px] border-light-gray rounded-full md:w-6 ', {
        'opacity-20': theme === 'dark'
    });
    const inputStyle = classNames('w-full border-none outline-none  text-xs bg-transparent md:text-lg transition-theme', {
        'text-dark-blue': theme === 'light',
        'text-light-gray': theme === 'dark'
    });
    

    // defining handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        if (refInput.current.value.trim().length == 0) {
            setErrorMessage('Type a task');
            refInput.current.focus();
        }
        else {


            addTask({
                id : uuid() , 
                text : refInput.current.value , 
                isCompleted : false , 
                filterMatched : currentFilter === 'all' || currentFilter === 'active'
            });
            refInput.current.value = '';
            setErrorMessage('');
        }


    }

    return (
        <>
            <div className={divStyle} >
                <div className="flex gap-x-[12px] items-start md:gap-x-6 ">
                    <div className={circleStyle}>
                    </div>
                    <form onSubmit={handleSubmit} className='flex-1'>
                        <input type="text" placeholder='Create a new todo…' className={inputStyle} ref={refInput} />
                    </form>

                </div>


            </div>
            {
                errorMessage &&
                (
                    <div className='mt-2'>
                        <span className='text-red-400'>{errorMessage}</span>
                    </div>
                )
            }
        </>
    )

}

export default Input
