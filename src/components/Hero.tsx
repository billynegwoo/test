import React from 'react';
import Image from "next/image";

function Hero() {
    return (
        <div className="container flex flex-row justify-between pb-20 pt-28 items-start">
             <span className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-1/2">
                    <span>
                        <Image src="https://utfs.io/f/e8056fac-cdd7-4e73-8931-94bcc559478d-3x6qx4.png" alt=""
                               fill={true}/>
                    </span>
             </span>
            <div
                className="mb-10 w-full max-w-lg pt-2 text-center lg:mb-0 lg:flex lg:w-1/2 lg:max-w-none lg:flex-col lg:items-start lg:justify-center lg:text-left">

                <h1 className="mb-6"><span
                    className="mb-6 block font-header text-base uppercase tracking-[7px] opacity-50 ">BLOCKCHAIN ORACLE FOR MARKET DATA</span><span
                    className="h1 font-semibold"><span className="block font-light">Smarter Data for</span>Smarter Contracts</span>
                </h1>
                <div className="mx-auto mb-10 max-w-lg lg:mx-0"><p>Secure your smart contracts with reliable,
                    low-latency market data from institutional sources. Build apps with high-fidelity oracle feeds
                    designed for mission-critical systems.</p></div>
                <div>
                    <a className="btn before:btn-bg false btn--light before:bg-light hover:text-light hover:before:bg-dark mr-4"
                       target="_blank" href="">
                        <span className="relative inline-flex items-center whitespace-nowrap">start integrating</span>
                    </a>
                    <a className="btn before:btn-bg btn--dark before:bg-dark hover:text-dark hover:before:bg-light"
                       href="">
                        <span className="relative inline-flex items-center whitespace-nowrap">see the data</span>
                    </a>
                </div>
            </div>
            <div className="relative w-full lg:min-h-[421px] lg:w-[50%]">
                <div className="mx-auto w-full max-w-[550px] lg:mx-0">
                    <div className="mb-2 flex overflow-auto border border-beige-200 bg-darkGray1">
                        <button className="btn-selector2 transition-colors hover:bg-darkGray2 bg-darkGray2">
                            <span className="text-xs">All</span>
                        </button>
                        <button className="btn-selector2 transition-colors hover:bg-darkGray2 false">
                            <span className="text-xs">Crypto</span>
                        </button>
                        <button className="btn-selector2 transition-colors hover:bg-darkGray2 false">
                            <span className="text-xs">Equities</span>
                        </button>
                        <button className="btn-selector2 transition-colors hover:bg-darkGray2 false">
                            <span className="text-xs">Forex</span>
                        </button>
                        <button className="btn-selector2 transition-colors hover:bg-darkGray2 false">
                            <span className="text-xs">Commodities</span>
                        </button>
                    </div>
                    <div className="relative z-[3] ">
                        <div
                            className="relative w-full cursor-default overflow-hidden border border-b-0 border-beige-100 bg-darkGray">
                            <input
                                className="w-full rounded-none border-none bg-darkGray py-[13px] pl-14 pr-14 text-base leading-5 text-light outline-none"
                                placeholder="Search"
                                type="text"
                                />
                            <button className="absolute inset-y-0 left-0 flex items-center pl-6">
                                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                                    <path
                                        d="M13.715 5.939c0 3-2.452 5.438-5.486 5.438S2.742 8.938 2.742 5.939C2.742 2.939 5.195.5 8.23.5c3.034 0 5.486 2.439 5.486 5.439Z"
                                        stroke="#E6DAFE">

                                    </path>
                                    <path transform="scale(-1.00402 -.99596) rotate(-45 -13.8 .213)"
                                          stroke="#E6DAFE"
                                          d="M0-.5h5.929"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <table className="w-full border border-beige-100 bg-darkGray  false">
                        <thead>
                        <tr className="bg-[#1B1A2C]">
                            <th className="py-3.5 pl-4 text-left font-body text-xs font-light tracking-subtitle opacity-40 md:pl-6 ">SYMBOL</th>
                            <th className=" px-4 text-right font-body text-xs font-light tracking-subtitle opacity-40 md:px-5 xl:px-8">PRICE</th>
                            <th className=" pr-4 text-right align-middle font-body text-xs font-light leading-none tracking-subtitle opacity-40 md:pr-5 xl:pr-8">7D</th>
                            <th className="hidden pr-3 text-center align-middle font-body text-xs font-light tracking-subtitle opacity-40 sm:table-cell md:pr-5">LAST
                                7 DAYS
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="group cursor-pointer border-y border-beige-100 font-mono transition-colors hover:bg-darkGray2">
                            <td className="flex items-center py-3 pl-4 font-body md:pl-5">
                                <div className="relative mr-2.5 h-[20px] w-[20px]">
                                </div>
                                <div><span className="min-w-[72px]">XAG/USD</span></div>
                            </td>
                            <td className="py-3 px-4 text-right align-middle font-light leading-none md:px-5 xl:px-8 ">
                                <span className="leading-none ">$28.6792</span></td>
                            <td className="py-3 pr-4 text-right align-middle text-xs md:pr-5 xl:pr-8">
                                <span className="inline-flex items-center leading-none"
                                      style={{color: "rgb(21, 174, 110)"}}>
                                    <svg width="9" height="8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.735 1.306a1 1 0 0 1 1.682 0L8.412 5.96A1 1 0 0 1 7.57 7.5H1.58A1 1 0 0 1 .74 5.959l2.995-4.653Z"></path>
                                    </svg>
                                    <span className="pl-1 leading-none">2.86%</span></span>
                            </td>
                            <td className="hidden pr-3 sm:table-cell md:pr-5 ">
                            </td>
                        </tr>
                        <tr className="group cursor-pointer border-y border-beige-100 font-mono transition-colors hover:bg-darkGray2">
                            <td className="flex items-center py-3 pl-4 font-body md:pl-5">
                                <div className="relative mr-2.5 h-[20px] w-[20px]"></div>
                                <div><span className="min-w-[72px]">XAU/USD</span></div>
                            </td>
                            <td className="py-3 px-4 text-right align-middle font-light leading-none md:px-5 xl:px-8 ">
                                <span className="leading-none ">$2,391.33</span></td>
                            <td className="py-3 pr-4 text-right align-middle text-xs md:pr-5 xl:pr-8">
                                <span className="inline-flex items-center leading-none"
                                      style={{color: "rgb(21, 174, 110)"}}>
                                    <svg width="9" height="8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.735 1.306a1 1 0 0 1 1.682 0L8.412 5.96A1 1 0 0 1 7.57 7.5H1.58A1 1 0 0 1 .74 5.959l2.995-4.653Z"></path>
                                    </svg>
                                    <span className="pl-1 leading-none">2.01%</span></span>
                            </td>
                            <td className="hidden pr-3 sm:table-cell md:pr-5 ">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <a className="block border border-t-0 border-beige-100 bg-darkGray1 px-8 py-3 text-right text-base"
                       href="">
                            <span
                                className="flex items-center justify-end text-xs opacity-50 transition-opacity hover:opacity-100">see all prices <svg
                                width="14" height="4" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
                                className="ml-2">
                                <path d="M9.772 0 14 2 9.772 4V2.346H0v-.692h9.772V0Z" fill="#E6DAFE"/>
                            </svg>
                            </span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Hero;