import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Sejarah() {
    const misiList = [
        '1. Terwujudnya lembaga pendidikan yang bermutu',
        '2. Terwujudnya pendidikan yang Islami',
        '3. Terwujudnya lembaga pendidikan yang terjangkau dan membanggakan bagi masyarakat luas.',
    ];

    const sejarahMilestones = [
        {
            title: 'Pendirian Sekolah',
            year: '2016',
            image: '/images/sejarahpendirian.jpg',
            content: 'Yayasan Al-Istiqomah Girimulyo didirikan pada tahun 2016 dengan SK MENKUNHAM RI Nomor: AHU-0034236.AH.01.04.2016, NOTASIS: DIDIK MARYANYO, SH.M.M.KN No:7 Tgl :30 Agustus 2016.'
        },
        {
            title: 'Pengembangan Fasilitas',
            year: '2016-sekarang',
            image: '/images/background-sekolah-2.jpg',
            content: 'Yayasan ini memiliki Dua Sekolah yaitu Madrasah Tsanawiyah (MTS) dan Madrasah Aliyah (MA). Sekolah dibangun di atas tanah berukuran ± 5000 m²'
        },
        {
            title: 'Kepemimpinan',
            year: '2016-sekarang',
            image: '/images/sejarahpimpinan.jpg',
            content: 'Di bawah kepemimpinan Bapak Sutikno, S.Pd sebagai kepala yayasan, sekolah telah mengalami berbagai kemajuan dan perkembangan dari segi tenaga pendidik, jumlah siswa, gedung maupun prasarana lainnya.'
        }
    ];

    return (
        <GuestLayout>
            <Head title="Sejarah" />

            <div className="container mx-auto max-w-[1440px]">
                <div className="mb-8 flex justify-center px-4 md:px-8 lg:px-20">
                    <img
                        src="images/sejarah.jpg"
                        alt="SMPN 3 Jati Agung"
                        className="mt-12 w-full max-w-[700px] rounded-[25px] shadow-2xl md:mt-16 lg:mt-20"
                    />
                </div>

                <div className="mb-12 flex flex-col gap-8 px-4 md:px-8 lg:px-20 text-center">
                    {/* Bagian Visi */}
                    <div className="flex-1">
                        <h2 className="font-libre mb-4 text-3xl text-color-primary md:mb-6 lg:mb-8 text-4xl">
                            Visi
                        </h2>
                        <p className="text-lg text-color-primary">
                            "Menyelenggarakan Pendidikan yang bermutu dan berwawasan Islam"
                        </p>
                    </div>


                    {/* Bagian Misi */}
                    <div className="flex-1">
                        <h2 className="font-libre mb-4 text-3xl text-color-primary md:mb-6 lg:mb-8 text-4xl">
                            Misi
                        </h2>
                        <ul className="list-none text-lg text-color-primary space-y-2 md:space-y-3 lg:space-y-4">
                            {misiList.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-24 px-4 md:px-8 lg:px-20">
                    <h2 className="font-libre mb-16 text-center text-3xl text-color-primary md:text-4xl lg:text-4xl">
                        Sejarah Sekolah
                    </h2>

                    <div className="space-y-16">
                        {sejarahMilestones.map((milestone, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-stretch justify-between">
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="w-full md:w-[45%] flex flex-col gap-4 z-10">
                                            <h3 className="font-libre text-left text-2xl text-color-primary md:text-[32px]">
                                                {milestone.title} ({milestone.year})
                                            </h3>
                                            <img
                                                src={milestone.image}
                                                alt={milestone.title}
                                                className="w-full rounded-xl shadow-xl"
                                            />
                                            <p className="text-justify text-lg text-color-primary">
                                                {milestone.content}
                                            </p>
                                        </div>
                                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-color-primary"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="hidden md:block w-[45%]"></div>
                                        <div className="w-full md:w-[45%] flex flex-col gap-4 z-10 md:ml-auto">
                                            <h3 className="font-libre text-left text-2xl text-color-primary md:text-[32px]">
                                                {milestone.title} ({milestone.year})
                                            </h3>
                                            <img
                                                src={milestone.image}
                                                alt={milestone.title}
                                                className="w-full rounded-xl shadow-xl"
                                            />
                                            <p className="text-justify text-lg text-color-primary">
                                                {milestone.content}
                                            </p>
                                        </div>
                                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-color-primary"></div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-24 px-4 md:px-8 lg:px-20">
                    <h2 className="font-libre mb-8 text-center text-3xl text-color-primary md:mb-10 md:text-4xl lg:mb-12 lg:text-5xl">
                        Sekarang
                    </h2>
                    <div className="mb-8 flex justify-center">
                        <img
                            src="/images/sejarahsekarang.jpg"
                            alt="Current Status"
                            className="w-full max-w-[600px] rounded-[25px] shadow-2xl"
                        />
                    </div>
                    <p className="mx-auto max-w-3xl text-center text-lg text-color-primary">
                        Berkat kerjasama yang baik antara kepala sekolah, dewan guru, wali murid, komite dan masyarakat,
                        Yayasan Al-Istiqomah Girimulyo terus berkembang menjadi sekolah yang berkualitas dan berprestasi.
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
