import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faR, faJ, faC, faG } from '@fortawesome/free-solid-svg-icons'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';



const Analytics = () => {
    const quizzes = useLoaderData();
    const allQuiz = quizzes.data;

    const data = [
        { name: allQuiz[0].name, value: allQuiz[0].total, icons: faR, colors: 'text-[#0088FE]' },
        { name: allQuiz[1].name, value: allQuiz[1].total, icons: faJ, colors: 'text-[#00C49F]' },
        { name: allQuiz[2].name, value: allQuiz[2].total, icons: faC, colors: 'text-[#FFBB28]' },
        { name: allQuiz[3].name, value: allQuiz[3].total, icons: faG, colors: 'text-[#FF8042]' },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff7979'];

    return (
        <div className='flex my-10 w-[90%] mx-auto gap-10'>
            <div className="card lg:card-side bg-slate-500 shadow-xl lg:w-[50%] mx-auto sm:w-full ">
                <div>
                    <PieChart width={300} height={400}>
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
                <div className="card-body flex items-center justify-center">
                    <div>
                        <h2 className="card-title text-3xl text-[#ff7979] font-bold">Questions</h2>
                        {
                            data.map((task, idx) => {
                                return <div key={idx} className='flex gap-3 items-center'>
                                    <FontAwesomeIcon className={task.colors} icon={task.icons}></FontAwesomeIcon>
                                    <h4 className={task.colors}><span className='font-bold'>{task.name}</span></h4>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;