import React from 'react';
import service from '../../assets/Services/02 Page.jpg';
import service1 from '../../assets/Services/06 Page.jpg';
import service2 from '../../assets/Services/2-led-vehicle-signage.jpg';
import service3 from '../../assets/Services/3-shop-branding.jpg';
import service4 from '../../assets/Services/4-POP-kiosk-making.jpg';
import service5 from '../../assets/Services/5-wallpaper.jpg';
import service6 from '../../assets/Services/6-laser-engraving-cutting.jpg';
import Client from '../Home/Client/Client';

const Services = () => {
    return (
        <div>
            <h1 className='text-3xl text-center'>Our Services</h1>
            <img className='w-4/5 mx-auto mb-5' src={service} alt="" />
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='h-96 w-96 ms-5'><img src={service1} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">Billboard & Unipole.</h2>
                    <p>As a leading company in the digital printing industry, our company specializes in providing high-quality solutions for billboard and pole advertising. Here's a description of our services.
                        <br></br>
                        <span className='text-xl'>Billboard Printing:</span> Our company offers top-notch digital printing services for billboards, which are large advertising structures typically placed in high-visibility locations along highways, busy streets, or in public spaces. Our printing technology ensures vibrant colors, sharp graphics, and high-resolution images to capture the attention of passersby. Whether it's a single billboard or an entire campaign, our team can handle large-scale printing projects efficiently and effectively.<br></br>
                        <span className='text-xl'>Pole Banners:</span> Alongside billboards, your company specializes in printing pole banners, which are vertical banners displayed on street poles or lampposts. Pole banners are commonly used in urban areas, shopping districts, or for event promotions. Your printing capabilities allow for custom-sized banners, ensuring they fit perfectly on poles and deliver a professional and polished appearance. These banners can be printed with vibrant colors and captivating graphics, making them highly visible to pedestrians and motorists.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body w-1/2">
                    <h2 className="card-title">LED Billboard & LED Sign.</h2>
                    <p>As a leading company in the digital printing industry, our company specializes in providing state-of-the-art LED billboard and LED sign solutions. Here's a description of our services:
                        <br></br>
                        <span className='text-xl'>LED Billboard Printing:</span> Our company offers high-quality digital printing services specifically tailored for LED billboards. LED billboards are large outdoor advertising displays that use light-emitting diodes (LEDs) to create dynamic and eye-catching visuals. Our printing technology ensures vibrant colors, sharp details, and excellent resolution, resulting in impactful and attention-grabbing advertisements. With our expertise, you can handle large-scale LED billboard printing projects efficiently and deliver visually stunning results.<br></br>
                        <span className='text-xl'>LED Sign Design and Production:</span> In addition to LED billboards, Our company excels in designing and producing LED signs for various applications. LED signs are versatile and widely used for storefronts, indoor displays, event promotions, and more. Our team of skilled designers collaborates with clients to create custom LED sign designs that align with their branding and messaging goals. These signs can incorporate various effects, such as scrolling text, animations, and changing colors, to maximize visual impact and attract attention.</p>
                </div>
                <figure className='h-96 w-96 me-5'><img src={service2} alt="Album" /></figure>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='h-96 w-96 ms-5'><img src={service3} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">Shop Branding</h2>
                    <p>As a leading company in the digital printing industry, our company also specializes in shop branding services. Here's a description of our shop branding solutions:
                        <br></br>
                        <span className='text-xl'>Exterior Signage:</span> Our company offers comprehensive exterior signage solutions for shop branding. This includes designing, printing, and installing various types of signage such as storefront signs, window graphics, awnings, and canopies. Our team works closely with clients to understand their brand identity and create visually appealing and attention-grabbing signage that reflects their unique style and message. These exterior signs help businesses stand out, attract customers, and establish a strong presence in their target market.<br></br>
                        <span className='text-xl'>Interior Signage and Wayfinding:</span> In addition to exterior branding, our company provides interior signage and wayfinding solutions to enhance the customer experience within shops and retail spaces. This may include wall signs, floor graphics, directional signage, product displays, and point-of-sale materials. Our goal is to create a cohesive and visually appealing environment that reinforces the brand identity, guides customers through the space, and encourages sales and engagement.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body w-1/2">
                    <h2 className="card-title">POP & Kiosk making.</h2>
                    <p>As a leading company in the digital printing industry, our company specializes in providing Point of Purchase (POP) and kiosk making services. Here's a description of our solutions:
                        <br></br>
                        <span className='text-xl'>Point of Purchase Displays:</span> our company offers a wide range of POP displays that are strategically designed to capture attention and drive sales at the point of purchase. These displays are typically placed near checkout counters or high-traffic areas in retail stores, supermarkets, or trade show booths. Our team works closely with clients to design and produce custom POP displays that align with their branding and promotional objectives. These displays can include standees, counter displays, shelf talkers, hanging signs, and more, all printed with high-quality graphics and messaging to attract and engage customers.<br></br>
                        <span className='text-xl'>Kiosk Design and Fabrication:</span> Our company specializes in designing and fabricating interactive kiosks for various applications. Kiosks are self-contained units that provide information, facilitate transactions, or offer interactive experiences to customers. Our team of designers and engineers collaborates with clients to create custom kiosk designs that cater to their specific requirements. From compact touchscreen kiosks to larger interactive displays, our expertise ensures that the kiosks are user-friendly, visually appealing, and aligned with the client's branding and functionality needs.</p>
                </div>
                <figure className='h-96 w-96 me-5'><img src={service4} alt="Album" /></figure>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='h-96 w-96 ms-5'><img src={service5} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">Wallpaper & Other Printings</h2>
                    <p>
                        As a leading company in the digital printing industry, our company specializes in providing a wide range of printing services, including wallpaper and various other printings. Here's a description of our solutions:
                        <br></br>
                        <span className='text-xl'>Custom Wallpaper Printing:</span> Our company offers custom wallpaper printing services, allowing clients to transform their spaces with personalized designs and visuals. Whether it's for residential, commercial, or hospitality environments, our printing technology enables high-resolution printing on wallpaper materials. Clients can choose from a vast library of existing designs or work with our team of designers to create custom wallpapers that match their unique style, branding, or thematic preferences. The result is stunning, vibrant wallpapers that add personality and visual impact to any space.<br></br>
                        <span className='text-xl'>Promotional Banners and Posters:</span> Our company provides printing services for promotional banners and posters, which are widely used in various events, trade shows, conferences, and retail environments. Our printing technology ensures high-quality prints with vibrant colors and sharp details. These banners and posters can be produced in different sizes and materials, such as vinyl, fabric, or paper, depending on the specific application and client's requirements. They serve as powerful marketing tools to capture attention, convey messages, and promote products, services, or events effectively.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body w-1/2">
                    <h2 className="card-title">Laser Engraving & Cutting</h2>
                    <p>As a leading company in the digital printing industry, our company specializes in providing laser engraving and cutting services. Here's a description of our solutions:
                        <br></br>
                        <span className='text-xl'>Laser Engraving:</span> Our company utilizes advanced laser technology to offer precise and high-quality engraving services on a wide range of materials. Whether it's wood, acrylic, metal, glass, leather, or plastic, our laser engraving machines can accurately etch designs, logos, text, or intricate patterns onto the surface of the material. The laser engraving process ensures fine detail, sharp edges, and consistent results, resulting in visually appealing and professional-looking engravings. This service is ideal for personalized gifts, promotional items, signage, awards, and various other applications.<br></br>
                        <span className='text-xl'>Laser Cutting:</span> Our company provides laser cutting services for a variety of materials, including wood, acrylic, paper, fabric, foam, and more. The precision and versatility of laser cutting technology allow for intricate and complex designs to be cut with speed and accuracy. From custom shapes, intricate patterns, or prototypes, Our laser cutting machines can handle a wide range of cutting requirements. The result is clean and precise cuts with smooth edges, ensuring high-quality finished products for various industries, including signage, packaging, crafts, and manufacturing.
                    </p>
                </div>
                <figure className='h-96 w-96 me-5'><img src={service6} alt="Album" /></figure>
            </div>
            <Client></Client>
        </div>
    );
};

export default Services;