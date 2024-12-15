import React from "react";
import { ChevronRight } from "lucide-react";
import HeroHeader from "./hero-header";

const FeatureSection = () => {
  return (
    <>
      <HeroHeader />
      <div className="max-w-7xl mx-auto px-4 py-12 mt-10 h-[80vh] my-auto grid place-items-center">
        {/* Header Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full">
          <h1 className="text-6xl font-medium leading-tight tracking-tight">
            <span className="text-black">Automated </span>
            <span className="text-neutral-400">Payroll</span>
            <br />
            <span className="text-neutral-400">Distribution </span>
            <span className="text-black">System</span>
          </h1>

          {/* <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <span className="px-6 py-2 bg-black text-white rounded-full text-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            Privacy
          </span>
          <span className="px-6 py-2 bg-white border border-neutral-100 rounded-full text-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            Efficiency
          </span>
          <span className="px-6 py-2 bg-neutral-100 rounded-full text-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            Automation
          </span>
        </div> */}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large Feature Card */}
          <div className="lg:col-span-2 bg-black rounded-3xl p-8 group cursor-pointer">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-24">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">
                  Tailored payroll solutions
                </h3>
                <p className="text-neutral-400">
                  Seamless integration with Web3 and blockchain platforms
                </p>
              </div>
            </div>
          </div>

          {/* Regular Feature Card */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-100 group cursor-pointer">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-12">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
                <ChevronRight className="w-5 h-5 text-black/30 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Employee portal</h3>
                <p className="text-neutral-600">
                  Secure portal for payroll details
                </p>
              </div>
            </div>
          </div>

          {/* Regular Feature Card */}
          <div className="bg-neutral-100 rounded-3xl p-8 group cursor-pointer">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-12">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
                <ChevronRight className="w-5 h-5 text-black/30 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Global payouts</h3>
                <p className="text-neutral-600">
                  Efficient cross-border transfers
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
