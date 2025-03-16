import React, { forwardRef } from 'react';

const Team = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex pt-[15%] px-10">
            <div style={{ color: "#181818" }} className="md:p-5">
                <h1 className="text-5xl md:text-7xl text-[#ab9b82]">Naš Tim</h1>
                <div className='flex flex-col justify-center md:flex-row md:justify-between '>
                    <div className="w-[100%] md:w-[60%]">
                        <p className="text-lg md:text-xl pt-5 text-[#ededed]">
                        Agencija Kredit Links, koju predvodi Ljiljana Cerović, prepoznatljiva je po stručnosti, usredsređenosti na potrebe klijenata i širokoj bazi kontakata iz bankarsko-finansijske oblasti.
                        <br/><br/>
                        Dobro utemeljen koncept Agencije i sve navedene vrednosti klijentima obezbeđuju sigurnog partnera na koga se mogu osloniti od momenta donošenja odluke o kreditnom zaduživanju do realizacije plasmana kod izabrane poslovne banke.
                        <br/><br/>
                        Pored posredovanja na relaciji klijent-banka, Agencija Kredit Links svojim klijentima nudi i besplatne usluge posredovanja u komunikaciji sa investitorima, proceniteljima i poreskim organima, kako u procesu apliciranja za stambeni kredit, tako i neposredno nakon njegove realizacije.
                            <br/><br/>
                        </p>
                    </div>
                    <div style={{ 
                        borderRadius: "50%", 
                        overflow: "hidden", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center"
                    }}
                    className="w-[40vw] h-[40vw] md:w-[22vw] md:h-[22vw] self-center"
                    >
                        <img 
                            src="images/ljiljana.jpeg" 
                            alt="profile" 
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover" 
                            }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Team;

