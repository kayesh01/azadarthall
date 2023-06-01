import React from 'react';

const Location = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center mt-5 font-semibold'>Our Location and Contact Details.</h2>
            </div>
            <div class="flex flex-col w-full lg:flex-row mt-5 mb-5">
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <p className='text-xl font-medium'>Head Office</p>
                    <p>Suite # 5k (5th floor), Meherba Plaza,</p>
                    <p>33 Topkhana Road, Dhaka-1000.</p>
                    <p>Mobile: 01711 626773</p>
                    <p>Phone: +88-02-9570618</p>
                </div>
                <div class="divider lg:divider-horizontal">And</div>
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <p className='text-xl font-medium'>Factory-1</p>
                    <p>107/A, Police fari road,</p>
                    <p>Paradogair, Demra, Dhaka.</p>
                    <p>Phone :+88-02-7545224</p>
                    <p>E-mail: azadfactory24x7@gmail.com</p>
                </div>
                <div class="divider lg:divider-horizontal">And</div>
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><p className='text-xl font-medium'>Factory-2</p>
                    <p>Habib Complex, (Ground Floor),</p>
                    <p>50/1 Purana Paltan, Dhaka-1000.</p>
                    <p>Phone :+88-02-9570618</p>
                    <p>E-mail: smartsignagebd@gmail.com</p>
                </div>
                <div class="divider lg:divider-horizontal">And</div>
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><p className='text-xl font-medium'>Quick Contact</p>
                    <p>Mobile: 01715-129846</p>
                    <p>E-mail: zafar@azadarthall.com</p>
                    <p>info@azadarthall.com</p>
                    <p>azadarthallbd@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Location;