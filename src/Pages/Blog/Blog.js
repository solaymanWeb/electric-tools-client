import React from 'react';

const Blog = () => {
    return (
        <section className='mt-12'>
            <div class=" bg-base-200 text-left p-8 rounded-b-box">
                <div>
                <h1 class="text-2xl  font-bold">1. How will you improved the performance of a react application ?</h1>
                <div className='py-2  '>
                    <p>একটা রিয়াক্ট এপ্লিকেশন এর  পারফর্মেন্স বিভিন্ন বিষয়ের ওপর ভেরি করে। যে যে কারণে পারফর্মেন্স ভালো করা যেতে পারে তা হলো :-</p>
                    <ol>
                        <li type='i'> Immutable  ডেটা স্ট্রাকচার ব্যবহার করলে তুলনা মুলক</li>
                        <li type='i'> কোড যেন রিরেন্ডির না হয় সেই দিকে লক্ষ রাখা</li>
                        <li type='i'> Lazy loading images ব্যবহার না করা</li>
                        <li type='i'> রেন্ডার ফাংশনে ইনলাইন ফাংশন ব্যবহার না করা </li>
                        <li type='i'> Production Build ব্যবহার করা </li>
                        <li type='i'> Use React.memo for Component Memoization</li>
                    </ol>
                </div>     
                </div>  
            </div>
            <div class=" bg-base-200 mt-5 text-left p-8 rounded-b-box">
                <div>
                <h1 class="text-2xl  font-bold">1. How will you improved the performance of a react application ?</h1>
                <div className='py-2  '>
                    <p>একটা রিয়াক্ট এপ্লিকেশন এর  পারফর্মেন্স বিভিন্ন বিষয়ের ওপর ভেরি করে। যে যে কারণে পারফর্মেন্স ভালো করা যেতে পারে তা হলো :-</p>
                    <ol>
                        <li type='i'> Immutable  ডেটা স্ট্রাকচার ব্যবহার করলে তুলনা মুলক</li>
                        <li type='i'> কোড যেন রিরেন্ডির না হয় সেই দিকে লক্ষ রাখা</li>
                        <li type='i'> Lazy loading images ব্যবহার না করা</li>
                        <li type='i'> রেন্ডার ফাংশনে ইনলাইন ফাংশন ব্যবহার না করা </li>
                        <li type='i'> Production Build ব্যবহার করা </li>
                        <li type='i'> Use React.memo for Component Memoization</li>
                    </ol>
                </div>     
                </div>  
            </div>
        </section>
    );
};

export default Blog;