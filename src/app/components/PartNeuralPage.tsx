import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PartNeuralPage() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center mt-[-31px] px-4 md:px-0 sm:mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/winter-clothes.png"
                            alt="Neural Universe"
                            className="shadow-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col w-full md:w-[600px] ml-0 md:ml-10 items-center md:items-start text-center md:text-left">
                        <h5 className="font-bold text-[#BDBDBD] text-[16px]">SUMMER 2020</h5>
                        <h2 className="text-3xl md:text-5xl text-[#252B42] font-bold mb-4">
                            Part of the Neural Universe
                        </h2>
                        <h4 className="text-base md:text-lg mb-6 w-full md:w-[400px] text-[#737373]">
                            We know how large objects will act, but things on a small scale.
                        </h4>
                        <div className="flex flex-col md:flex-row gap-4">
                            <button className="bg-[#2DC071] text-white font-bold py-2 px-4 rounded transition duration-300">
                                Buy Now
                            </button>
                            <button className="bg-white border border-[#2DC071] shadow-md text-[#2DC071] font-bold py-2 px-4 rounded transition duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
