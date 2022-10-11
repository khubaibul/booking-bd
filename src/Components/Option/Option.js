import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notifySuccess = () => toast.success('Your Answer Is Right');
const notifyWrong = () => toast.error('Your Answer Is Wrong');


const Option = ({ option, correctAnswer, idx }) => {
    const handleQuizAnswer = selected => {
        if (selected === correctAnswer) {
            <Toaster></Toaster>
            notifySuccess()
        }
        else {
            <Toaster></Toaster>
            notifyWrong()
        }
    }
    // ${option === correctAnswer? "bg-green-500" : "bg-red-600"}
    return (
        <div className={`hover:bg-slate-600 bg-slate-400 p-5 border border-slate-700 m-2 rounded-lg `}>
            <label className="label cursor-pointer">
                <span className="label-text font-bold text-xl text-slate-200">{option}</span>
                <input onClick={() => handleQuizAnswer(option)}
                    type="radio" name="radio-6"
                    className="radio checked:bg-blue-500" />
                <Toaster></Toaster>
            </label>
        </div>
    );
};

export default Option;