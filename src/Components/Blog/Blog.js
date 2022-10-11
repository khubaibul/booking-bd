import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-[50%] lg:mx-auto my-40 sm:mx-5 md:mx-5'>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>What is the purpose of React Router?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React Router is a library for routing in React. It enables the navigation among views of various components in a React Application, allow us to change the path without page reloading. And keeps the UI in sync with the URL. By using we can develope Single Page Application (SPA). We can decide which element or component will show in different route.</p>
                </div>
            </div>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>How does Context API Work?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    First, we need to create a Context API, which we can use to create providers.
                    Once that's done, we can import the context and use it to create our provider, which we're calling MyProvider. In it, we initialize a state with some values, which we can share via value prop our provider component.
                    We'll need to import the context again and wrap our component with it which injects the context argument in the component. That's how Context API works.
                </div>
            </div>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>Write something about useRef Hook.</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.useRef() only returns one item. It returns an Object called current.The useRef Hook can also be used to keep track of previous state values.This is because we are able to persist useRef values between renders. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;