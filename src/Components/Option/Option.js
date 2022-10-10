import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='hover:bg-slate-600 bg-slate-400 p-5 border border-slate-700 m-2 rounded-lg'>
            <label className="label cursor-pointer">
                <span className="label-text font-bold text-xl text-slate-200">{option}</span>
                <input type="radio" name="radio-6" className="radio checked:bg-blue-500" />
            </label>
        </div>
    );
};

export default Option;