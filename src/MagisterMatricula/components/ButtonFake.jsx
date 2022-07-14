import React from 'react'

export const ButtonFake = ({ text }) => {
    return (
        <div className=' py-2 px-2'>
            <button
                className='rounded-xl border border-slate-300 bg-white py-2 px-6 text-txt-color-2 '
                type="button"
            >
                {text}
            </button>
        </div>
    )
}
