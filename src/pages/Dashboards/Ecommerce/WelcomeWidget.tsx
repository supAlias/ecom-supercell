import React from 'react';

//import images
import dashboard from "assets/images/dashboard.png";

const WelcomeWidget = () => {
    return (
        <React.Fragment>
            <div className="relative col-span-12 overflow-hidden card 2xl:col-span-8 bg-slate-900">
                <div className="absolute inset-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-100" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                        <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
                            <use xlinkHref="#SvgjsSymbol1007" x="0" y="0"></use>
                            <use xlinkHref="#SvgjsSymbol1007" x="720" y="0"></use>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1000">
                                <rect width="1440" height="560" fill="#ffffff"></rect>
                            </mask>
                            <path d="M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z" id="SvgjsPath1003"></path>
                            <path d="M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z" id="SvgjsPath1004"></path>
                            <path d="M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z" id="SvgjsPath1001"></path>
                            <path d="M2 -2 L-2 2z" id="SvgjsPath1005"></path>
                            <path d="M6 -6 L-6 6z" id="SvgjsPath1002"></path>
                            <path d="M30 -30 L-30 30z" id="SvgjsPath1006"></path>
                        </defs>
                        <symbol id="SvgjsSymbol1007">
                            <use xlinkHref="#SvgjsPath1001" x="30" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="30" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="30" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="30" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="30" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="30" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="30" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="30" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="30" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="30" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="90" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="90" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="90" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="90" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1004" x="90" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="90" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="90" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="90" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="90" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="90" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="150" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="150" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="150" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="150" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="150" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="150" y="330" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1004" x="150" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="150" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="150" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="150" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="210" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="210" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="210" y="150" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1002" x="210" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="210" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="210" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="210" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="210" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="210" y="510" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1003" x="210" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="270" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="270" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="270" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="270" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="270" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="270" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="270" y="390" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1002" x="270" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="270" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="270" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="330" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="330" y="90" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1002" x="330" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="330" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="330" y="270" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1001" x="330" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="330" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="330" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="330" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="330" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1004" x="390" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="390" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="390" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="390" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="390" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="390" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="390" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="390" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="390" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="390" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="450" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1004" x="450" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="450" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="450" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="450" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="450" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="450" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="450" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="450" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="450" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="510" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="510" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="510" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="510" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="510" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1004" x="510" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="510" y="390" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1001" x="510" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="510" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="510" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="570" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="570" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="570" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="570" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="570" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="570" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="570" y="390" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1005" x="570" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="570" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="570" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="630" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="630" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="630" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="630" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="630" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="630" y="330" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1002" x="630" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="630" y="450" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1001" x="630" y="510" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="630" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="690" y="30" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="690" y="90" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="690" y="150" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1002" x="690" y="210" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1005" x="690" y="270" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1001" x="690" y="330" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="690" y="390" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1003" x="690" y="450" stroke="rgba(32, 43, 61, 1)"></use>
                            <use xlinkHref="#SvgjsPath1006" x="690" y="510" stroke="rgba(32, 43, 61, 1)" strokeWidth="3"></use>
                            <use xlinkHref="#SvgjsPath1003" x="690" y="570" stroke="rgba(32, 43, 61, 1)"></use>
                        </symbol>
                    </svg>
                </div>
                <div className="relative card-body">
                    <div className="grid items-center grid-cols-12">
                        <div className="col-span-12 lg:col-span-8 2xl:col-span-7">
                            <h5 className="mb-3 font-normal tracking-wide text-slate-200">Welcome Paula Keenan 🎉</h5>
                            <p className="mb-5 text-slate-400">An ecommerce dashboard has just that purpose. It provides your ecommerce team with a clear overview of key financial and website KPIs at any time.</p>
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-500/20 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-500/20 dark:ring-custom-400/20">Take a Product</button>
                        </div>
                        <div className="hidden col-span-12 2xl:col-span-3 lg:col-span-2 lg:col-start-11 2xl:col-start-10 lg:block">
                            <img src={dashboard} alt="" className="h-40 ltr:2xl:ml-auto rtl:2xl:mr-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WelcomeWidget;
