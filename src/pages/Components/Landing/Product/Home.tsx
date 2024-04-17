import React from "react";
import { Plus, ShoppingCart } from "lucide-react";

// Image
import offer from "assets/images/landing/offer.png";
import productHome from 'assets/images/landing/product-home.png';

const Home = () => {
    return (
        <React.Fragment>
            <section className="relative pb-28 xl:pb-36 pt-44 xl:pt-52" id="home">
                <div className="absolute top-0 left-0 size-64 bg-custom-500 opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 size-64 bg-purple-500/10 blur-3xl"></div>
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid items-center grid-cols-12 gap-5 2xl:grid-cols-12">
                        <div className="col-span-12 xl:col-span-5 2xl:col-span-5">
                            <h1 className="mb-4 !leading-normal lg:text-5xl 2xl:text-6xl dark:text-zinc-100" data-aos="fade-right" data-aos-delay="300">Exclusive Collections 2024</h1>
                            <p className="text-lg mb-7 text-slate-500 dark:text-zinc-400" data-aos="fade-right" data-aos-delay="600">In 2024, metallics will be taking over the sneaker world. I love this trend because there are so many different ways to wear it. You can wear sequined sneakers, white sneakers with metallic accents, or all-over silver.</p>
                            <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="800">
                                <button type="button" className="px-8 py-3 text-white border-0 text-15 btn bg-gradient-to-r from-custom-500 to-purple-500 hover:text-white hover:from-purple-500 hover:to-custom-500"
                                >Shop Now <ShoppingCart className="inline-block size-4 align-middle rtl:mr-1 ltr:ml-1" /></button>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-7 2xl:col-start-8 2xl:col-span-6">
                            <div className="relative mt-10 xl:mt-0">
                                <div className="absolute text-center -top-20 xl:-right-40 lg:text-[10rem] 2xl:text-[14rem] text-slate-100 dark:text-zinc-800/60 font-tourney" data-aos="zoom-in-down" data-aos-delay="1400">
                                    Unique Fashion
                                </div>
                                <img src={offer} alt="" className="absolute h-40 left-10 xl:-left-10 top-32" data-aos="fade-down-right" data-aos-delay="900" data-aos-easing="linear" />
                                <div className="relative" data-aos="zoom-in" data-aos-delay="500">
                                    <button data-tooltip="default" data-tooltip-content="$199.99" className="absolute items-center justify-center hidden size-8 bg-white rounded-full xl:flex bottom-20 text-slate-800 left-20">
                                        <Plus></Plus></button>
                                    <img src={productHome} alt="" className="mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;