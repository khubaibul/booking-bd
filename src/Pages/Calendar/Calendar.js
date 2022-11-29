import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { differenceInBusinessDays } from 'date-fns';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Calendar = () => {
    const newDate = new Date();
    const { setStayDay } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date().getTime() + 24 * 60 * 60 * 1000);
    const stayDay = differenceInBusinessDays(new Date(endDate), new Date(startDate));
    setStayDay(stayDay);
    return (
        <div className='sm:flex sm:gap-y-2 justify-center p-4 gap-4'>
            <div className='bg-slate-400 p-4 rounded'>
                <p className='font-bold'>Check In</p>
                <DatePicker
                    className='p-2 rounded'
                    selected={startDate}
                    minDate={new Date()}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    isClearable
                    dateFormat="dd-MM-yyyy"
                />
            </div>
            <div className='bg-slate-400 p-4 rounded'>
                <p className='font-bold'>Check Out</p>
                <DatePicker
                    className='p-2 rounded'
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    isClearable
                    dateFormat="dd-MM-yyyy"
                />
            </div>
        </div>
    );
};

export default Calendar;