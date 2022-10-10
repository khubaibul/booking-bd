import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='hover:bg-slate-600 bg-slate-400 p-5 border m-2 rounded-lg'>
            <label className="label cursor-pointer">
                <span className="label-text font-bold text-xl">{option}</span>
                <input type="radio" name="radio-6" className="radio checked:bg-blue-500" />
            </label>
        </div>
    );
};

export default Option;