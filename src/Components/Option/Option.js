import toast, { Toaster } from 'react-hot-toast';

const notifySuccess = () => toast.success('Your Answer Is Right');
const notifyWrong = () => toast.error('Your Answer Is Wrong');

let rightCount = 0;
let wrongCount = 0;

const Option = ({ option, correctAnswer, setRightCount, setWrongCount }) => {
    const handleQuizAnswer = selected => {
        if (selected === correctAnswer) {
            <Toaster></Toaster>
            notifySuccess()
            rightCount = rightCount + 1;
        }
        else {
            <Toaster></Toaster>
            notifyWrong()
            wrongCount = wrongCount + 1;
        }
        setRightCount(rightCount);
        setWrongCount(wrongCount);
    }

    return (
        <div className={`hover:bg-slate-600 bg-slate-400 p-5 border border-slate-700 m-2 rounded-lg `}>
            <label className="label cursor-pointer">
                <span className="label-text font-bold text-xl text-slate-200">{option}</span>
                <input onClick={() => handleQuizAnswer(option)}
                    type="radio" name={correctAnswer}
                    className="radio checked:bg-blue-500" />
                <Toaster></Toaster>
            </label>
        </div>
    );
};

export default Option;