import React from 'react'

function TaskCompletedMark() {


    return (
        <>
            <div className='absolute w-full h-full rounded-full' style={{ background: 'linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)' }}></div>
            <img src="/icon-check.svg" alt="" className='w-2 relative z-10' />
        </>
    )
}

export default TaskCompletedMark
