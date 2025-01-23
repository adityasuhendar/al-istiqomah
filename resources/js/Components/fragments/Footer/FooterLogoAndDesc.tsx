const FooterLogoAndDesc = () => {
    return (
        <div className="mb-4 flex w-full flex-col items-center gap-4 md:flex-row">
            <img
                src="/images/logo-sekolah.png"
                alt="Logo"
                className="mb-1 h-20 w-20 md:mb-0 md:mr-4 md:h-28 md:w-28"
            />
            <div>
                <h2 className="text-xl font-bold tracking-widest md:text-2xl">
                    YAYASAN AL-ISTIQOMAH GIRIMULYO
                </h2>
                <p className="text-justify text-sm md:text-base">
                    Yayasan Al-Istiqomah Girimulyo didirikan pada tahun 2016 dengan SK MENKUNHAM
                    RI Nomor: AHU-0034236.AH.01.04.2016, NOTASIS: DIDIK
                    MARYANYO, SH.M.M.KN No:7 Tgl :30 Agustus 2016
                </p>
            </div>
        </div>
    );
};

export default FooterLogoAndDesc;
