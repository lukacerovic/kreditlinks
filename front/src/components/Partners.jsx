import React, { useRef, useEffect } from 'react';

const partnersLogo = [
    <img src="images/klGoldLogo.png" alt="partner" style={{ width: "100%", objectFit: "contain"}} />,
    <p className="text-2xl text-[#e0e0e8]">Kredit Links</p>,
    <img src="images/klGoldLogo.png" alt="partner" style={{ width: "100%", objectFit: "contain"}} />,
    <p className="text-2xl text-[#e0e0e8]">Kredit Links</p>,
    <img src="images/klGoldLogo.png" alt="partner" style={{ width: "100%", objectFit: "contain"}} />,
    <p className="text-2xl text-[#e0e0e8]">Kredit Links</p>,
];

export default function Partners() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        let scrollAmount = 0;
        const speed = 1;

        const animate = () => {
            scrollAmount -= speed;

            if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
                scrollAmount = 0; 
            }

            track.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div style={{
            overflow: "hidden",
            // backgroundColor: "#b6b5b5",
            // backgroundColor: "#364662",
            // backgroundColor: "#ab9b82",
            backgroundColor: "#172230",
            padding: "10px",
            marginInline: "20px",
            display: "flex",
            alignItems: "center",
        }} className="mt-20 rounded-2xl">
            <div ref={trackRef} style={{
                display: "flex",
                whiteSpace: "nowrap",
                alignItems: "center",
            }}>
                {[...partnersLogo, ...partnersLogo].map((partner, index) => (
                    <div key={index} style={{ 
                        display: "inline-block",
                        alignItems:"center",
                        padding: "0 3%" 
                    }}
                    className="w-[40vw] md:w-[20vw]"
                    >
                        {partner}
                    </div>
                ))}
            </div>
        </div>
    );
}
