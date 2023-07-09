import React from 'react';
import building from '../../assets/Contact/05 Page.jpg';

const Contact = () => {
    return (
        <div className='bg-slate-100'>
            <div>
                <h2 className='text-4xl text-center mt-5 font-semibold'>Our Location and Contact Details.</h2>
            </div>
            <div className='flex flex-row pt-3'>
                <div className='ms-5 w-3/5'>
                    <img src={building} alt="" />
                </div>
                <div className='ms-5 mt-60'>
                    <h2 className="card-title font-bold text-5xl">Factory-1</h2>
                    <p className='font-bold mt-5 text-xl'>107/A, Police fari road, <br />Paradogair, Demra, Dhaka. <br />Phone :+88-02-7545224 <br />E-mail: azadfactory24x7@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row mt-5 px-1 pb-3">
                <div className="grid flex-grow h-34 card bg-teal-700 hover:shadow-xl rounded-box place-items-center">
                    <div className='hover:uppercase font-semibold text-white'>
                        <p className='text-xl font-medium'>Head Office</p>
                        <p>Suite # 5k (5th floor), Meherba Plaza,</p>
                        <p>33 Topkhana Road, Dhaka-1000.</p>
                        <p>Mobile: 01711 626773</p>
                        <p>Phone: +88-02-9570618</p>
                        <p>E-mail: info@azadarthall.com</p>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">And</div>
                <div className="grid flex-grow h-34 card bg-teal-700 hover:shadow-xl rounded-box place-items-center">
                    <div className='hover:uppercase font-semibold text-white'>
                        <p className='text-xl font-medium'>Factory-2</p>
                        <p>Habib Complex, (Ground Floor),</p>
                        <p>50/1 Purana Paltan, Dhaka-1000.</p>
                        <p>Phone :+88-02-9570618</p>
                        <p>E-mail: smartsignagebd@gmail.com</p>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal">And</div>
                <div class="grid flex-grow h-34 card bg-teal-700 hover:shadow-xl rounded-box place-items-center">
                    <div className='hover:uppercase font-semibold text-white'>
                        <p className='text-xl font-medium'>Quick Contact</p>
                        <p>Mobile: 01715-129846</p>
                        <p>E-mail: zafar@azadarthall.com</p>
                        <p>info@azadarthall.com</p>
                        <p>azadarthallbd@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;