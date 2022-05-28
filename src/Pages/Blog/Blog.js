import React from 'react';

const Blog = () => {
    return (
        <section className='mt-12'>
            <div className=" bg-base-200 text-left p-8 rounded-b-box">
                <div>
                <h1 className="text-2xl  font-bold">1. How will you improved the performance of a react application ?</h1>
                <div className='py-2  '>
                    <p>একটা রিয়াক্ট এপ্লিকেশন এর  পারফর্মেন্স বিভিন্ন বিষয়ের ওপর ভেরি করে। যে যে কারণে পারফর্মেন্স ভালো করা যেতে পারে তা হলো :-</p>
                    <ol>
                        <li type='i'> Immutable  ডেটা স্ট্রাকচার ব্যবহার করলে তুলনা মুলক ভালো পারফরমেন্স পাওয়া যাবে। </li>
                        <li type='i'> কোড যেন রিরেন্ডির না হয় সেই দিকে লক্ষ রাখা</li>
                        <li type='i'> Lazy loading images ব্যবহার না করা</li>
                        <li type='i'> রেন্ডার ফাংশনে ইনলাইন ফাংশন ব্যবহার না করা </li>
                        <li type='i'> Production Build ব্যবহার করা </li>
                        <li type='i'> Use React.memo for Component Memoization</li>
                    </ol>
                </div>     
                </div>  
            </div>
            <div className=" bg-base-200 mt-5 text-left p-8 rounded-b-box">
                <div>
                <h1 className="text-2xl  font-bold">2. what are the different way to manage state in a react application ?</h1>
                <div className='py-2  '>
                    <p>আমরা সাধারণত কোনো কিছু রাখার জন্য। useState use  করে থাকি। তবে। useState ছাড়াও আর ও অনেক way আছে state manage করার জন্য । যখন আমরা আমাদের অ্যাপ্লিকেশান গুলিতে state সম্পর্কে কথা বলি, তখন কোন ধরনের state আসলে গুরুত্বপূর্ণ সে সম্পর্কে পরিষ্কার হওয়া গুরুত্বপূর্ণ। আপনার অ্যাপগুলিতে আপনাকে সঠিকভাবে পরিচালনা করার জন্য চারটি প্রধান state রয়েছে:  :- </p>
                    <ol>
                        <li type='i'>Local state</li>
                        <li type='i'> Global state</li>
                        <li type='i'> Server state</li>
                        <li type='i'> URL state </li>
                    </ol>
                </div>     
                </div>  
            </div>
            <div className=" bg-base-200 mt-5 text-left p-8 rounded-b-box">
                <div>
                <h1 className="text-2xl  font-bold">3. How does prototypal inheritance work?</h1>
                <div className='py-2  '>
                    <p>আমরা জানি Inheritance অর্থ হলো উত্তরাধিকার সূত্রে পাওয়া। মানে কোনো একটি ক্লাসের বৈশিষ্ট অন্য একটি ক্লাসে শেয়ার করা । প্রতিটি বস্তুর পদ্ধতি এবং বৈশিষ্ট্য সহ একটি অভ্যন্তরীণ এবং লুকানো সম্পত্তি রয়েছে যা প্রোটোটাইপ নামে পরিচিত। প্রোটোটাইপ্যাল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা বস্তুতে পদ্ধতি এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি বস্তু অন্য বস্তুর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে।  </p>
                   
                </div>     
                </div>  
            </div>
            <div className=" bg-base-200 mt-5 text-left p-8 rounded-b-box">
                <div>
                <h1 className="text-2xl  font-bold">4. You have an array and product each object has a name, price, descriptsion etc, How will you implement a search to find product by name </h1>
                <div className='py-2  '>
                    <p>আমার কাজে যে array টা আছে। সেটার ওপর লুপ চালাবো array.map().includ() or match()। অর্থাৎ সার্চ বক্স কে onChange() করে দেব user যখন কোনো নাম লেখবে তখন ইনপুট ফিল্ড এর প্রতিটা লেটার আমার এরে তে রাখা অবজেক্ট এর  নাম আর সাথে includ() করে দেখবে কোনটার সাথে মেলে । যেটির সাথে মিলবে সেটা আউটপুট হিসেবে user কে দেখবে।  </p>
                   
                </div>     
                </div>  
            </div>
            <div className=" bg-base-200 mt-5 text-left p-8 rounded-b-box">
                <div>
                <h1 className="text-2xl  font-bold">5. What is unit test? why should write unit test ?</h1>
                <div className='py-2  '>
                    <p>  ইউনিট টেস্টিং হল একটি সফ্টওয়্যার পরীক্ষার পদ্ধতি যেখানে “ইউনিট”—সফ্টওয়্যারের পৃথক উপাদানগুলি—পরীক্ষিত হয়। কোডটি সঠিকভাবে কাজ করে তা নিশ্চিত করতে Developer তাদের কোডের জন্য ইউনিট পরীক্ষা লেখেন। এটি বাগগুলি সনাক্ত করতে এবং রক্ষা করতে সহায়তা করে৷  </p>
                   
                </div>     
                </div>  
            </div>
        </section>
    );
};

export default Blog;