import React, { useState, useRef, forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

const services = [
    { title: "Stambeni Krediti", description: "Namenjeni za kupovinu ili renoviranje nekretnine, uz mogućnosti varijabilnih ili fiksnih kamatnih stopa, kao i različite rokove otplate." },
    { title: "Keš Krediti", description: "Keš krediti omogućavaju brz pristup gotovini za različite lične potrebe, bez obaveze navođenja svrhe korišćenja sredstava. Dostupni su u dinarima i eurima, sa fiksnim kamatnim stopama koje omogućavaju stabilne mesečne rate tokom celog perioda otplate." },
    { title: "Brze kreditne procene", description: "Procena kreditne sposobnosti klijenta na osnovu osnovnih informacija omogućava brz uvid u maksimalni iznos kredita koji klijent može dobiti." },
    { title: "Priprema i organizacija dokumentacije", description: "Asistencija u prikupljanju i popunjavanju potrebne dokumentacije, što značajno ubrzava proces dobijanja kredita i štedi klijentovo vreme." },
    { title: "Konsultacije u domenu poreskih olakšica", description: "Pružamo stručne konsultacije kako biste iskoristili sve mogućnosti za povrat poreza i poreske olakšice. Naš tim vam pomaže da razumete aktuelne propise i primenite rešenja prilagođena vašim potrebama, čime optimizujete svoje poreske obaveze." }
];

const Services = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null); // Referenca na Swiper

    const handleTitleClick = (index) => {
        setActiveIndex(index);
        // Promeni aktivni slide kada se klikne na naslov
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index, 1300); // Pomeri Swiper na odgovarajući slide
        }
    };

    return (
        <section ref={ref} className="services-container md:h-[100vh] flex flex-col md:flex-row md:px-10 flex md:justify-center items-center">
            <div className="services-titles pt-10 md:py-1 flex flex-col items-center justify-end md:items-start">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-title ${index === activeIndex ? 'active text-xl md:text-4xl' : 'text-md md:text-2xl'} py-3`}
                        onClick={() => handleTitleClick(index)}
                    >
                        {service.title}
                    </div>
                ))}
            </div>
            <Swiper
                ref={swiperRef} 
                speed={1300}
                direction={'vertical'}
                slidesPerView={1.5}
                initialSlide={activeIndex}
                centeredSlides={true}
                loop={false}
                spaceBetween={50}
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper h-[70vh] sm:h-[50vh] md:h-[70%] md:w-[60%]"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} style={{ alignSelf: "center w-screen md:w-[60%] md:p-[2%]" }}>
                        <p className={`${service.description.length > 150 ? "text-xl" : "text-2xl"} w-[80%]`}>{service.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
});

export default Services;

