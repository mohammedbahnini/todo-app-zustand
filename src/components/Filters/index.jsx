import React, { useContext } from 'react'
import FilterItem from './FilterItem'
import classNames from 'classnames';
import { AppStore } from '../../store/app-store';

function Filters(props) {

    const { theme, filters  } = AppStore( state => state );
 

    const style = classNames('flex items-center justify-center rounded-[5px]  ', props.className, {
        'bg-white  shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)]': theme === 'light',
        'bg-very-dark-grayish-violet': theme === 'dark'
    });


    return (
        <div className={style}>
            <div className='flex gap-x-5'>
                {
                    filters.map((filter, index) => (
                        <FilterItem key={index}>{filter}</FilterItem>
                    ))
                }

            </div>
        </div>
    )
}

export default Filters
