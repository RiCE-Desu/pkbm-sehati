import Image from 'next/image'
import React from 'react'

export const About = () => {
    return (
        <div id='tentang' className='md:px-20 md:py-40 px-10 py-20 flex justify-between items-center bg-[#0B2D72] gap-4 md:flex-row flex-col-reverse'>
            <div>
                <h2 className='text-[#F6E7BC] text-2xl sm:text-5xl md:text-6xl md:max-w-xl max-w-sm font-extrabold mb-6'>PKBM Sehati</h2>
                <p className='mt-4 md:mt-0 text-white max-w-3xl text-base sm:text-lg md:text-xl'>
                    PKBM Sehati adalah lembaga pendidikan inklusi yang berkomitmen memberikan akses belajar bagi semua peserta didik, termasuk anak berkebutuhan khusus. Kami percaya bahwa setiap anak memiliki potensi unik yang harus dikembangkan melalui pendekatan yang humanis, profesional, dan berbasis nilai kebersamaan.
                </p>
                <div className='w-fit h-10 p-5 mt-5 border-white border-2 flex items-center justify-center text-white hover:bg-white hover:text-black transition'><p>Selengkapnya 👉</p></div>
            </div>
            <div>
                <Image
                    src="/about-img.png"
                    alt="Example"
                    width={500}
                    height={300}
                />
            </div>
        </div>
    )
}
