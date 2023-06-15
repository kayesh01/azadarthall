import React from 'react';
import bd from '../../../assets/logo/bangladesh-logo.png';
import gp from '../../../assets/logo/grameenphone.png';
import robi from '../../../assets/logo/robi.jpg';
import blk from '../../../assets/logo/banglalink.jpg';
import tltlk from '../../../assets/logo/teletalk-logo.png';
import airtel from '../../../assets/logo/airtel.jpg';
import samsung from '../../../assets/logo/samsung.png';
import singer from '../../../assets/logo/singer.jpg';
import square from '../../../assets/logo/square.jpg';
import bkash from '../../../assets/logo/bkash.jpg';
import akij from '../../../assets/logo/akij-group.jpg';
import akijmotor from '../../../assets/logo/akij-motors.png';
import bracbank from '../../../assets/logo/brac-bank.jpg';
import afbl from '../../../assets/logo/afbl.png';
import abul from '../../../assets/logo/abul-khair-group.png';
import acement from '../../../assets/logo/anwar-cement-sheet.png';
import anwar from '../../../assets/logo/anwar-group.jpg';
import bashundara from '../../../assets/logo/bashundhara-group.png';
import brb from '../../../assets/logo/brb-logo.png';
import bengal from '../../../assets/logo/bengal.png';
import berger from '../../../assets/logo/berger.png';
import biswarong from '../../../assets/logo/biswarong.png';
import brac from '../../../assets/logo/brac.png';
import bsrm from '../../../assets/logo/bsrm-logo.png';
import cococola from '../../../assets/logo/cocacola-logo.png';
import energypac from '../../../assets/logo/energypac.png';
import golden from '../../../assets/logo/Goldenharvest.png';
import gsk from '../../../assets/logo/gsk.png';
import icddrb from '../../../assets/logo/icddrb.png';
import igloo from '../../../assets/logo/igloo.png';
import jamuna from '../../../assets/logo/jamuna-group-logo.png';
import kazi from '../../../assets/logo/kazi-farms.png';
import kohinoor from '../../../assets/logo/kohinoor.jpg';
import ksrm from '../../../assets/logo/ksrm.jpg';
import maximus from '../../../assets/logo/maximus.png';
import mobil from '../../../assets/logo/mobil-logo.png';
import oppo from '../../../assets/logo/oppo.png';
import partexstar from '../../../assets/logo/partex-star-group-logo.png';
import php from '../../../assets/logo/php-logo.png';
import pmi from '../../../assets/logo/pmi.jpg';
import rahim from '../../../assets/logo/rahimafrooz.png';
import reckitt from '../../../assets/logo/reckitt-benckiser.png';
import sibl from '../../../assets/logo/sibl.png';
import smc from '../../../assets/logo/smc-logo.png';
import suzuki from '../../../assets/logo/suzuki.png';
import unicef from '../../../assets/logo/unicef-logo.png';
import unilever from '../../../assets/logo/unilever-logo.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";




const Client = () => {
    const clients = [bd, gp, robi, blk, tltlk, airtel, samsung, singer, square, bkash, akij, akijmotor, bracbank, afbl, abul, acement, anwar, bashundara, brb, bengal, berger, biswarong, brac, bsrm, cococola, energypac, golden, gsk, icddrb, igloo, jamuna, kazi, kohinoor, ksrm, maximus, mobil, oppo, partexstar, php, pmi, rahim, reckitt, sibl, smc, suzuki,
        unicef, unilever]

    return (
        <>
            <div>
                <h2 className='text-4xl text-center mt-5 mb-5 font-semibold'>Our Valuable Clients.</h2>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Scrollbar]}
                slidesPerView={4}
                spaceBetween={10}
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                scrollbar={{ draggable: true }}
                navigation
            >

                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <img className='mb-5' src={client} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}

            </Swiper >
        </>
    );
};

export default Client;