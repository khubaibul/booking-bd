import React from 'react';

const Blog = () => {
    return (
        <div className='w-[75%] mx-auto my-40'>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>What is the purpose of React Router?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React create a virtual DOM that is the copy of real DOM tree in JavaScript. So when React needs to change the DOM, it will use the virtual DOM. Then the virtual DOM will try to find the changes by comparing with real DOm. Then update the only changing content. </p>
                </div>
            </div>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>How does Context API Work?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React create a virtual DOM that is the copy of real DOM tree in JavaScript. So when React needs to change the DOM, it will use the virtual DOM. Then the virtual DOM will try to find the changes by comparing with real DOm. Then update the only changing content. </p>
                </div>
            </div>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>Write something about useRef Hook.</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React create a virtual DOM that is the copy of real DOM tree in JavaScript. So when React needs to change the DOM, it will use the virtual DOM. Then the virtual DOM will try to find the changes by comparing with real DOm. Then update the only changing content. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;