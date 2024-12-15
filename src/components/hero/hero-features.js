import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full h-[50vh] place-items-center">
        <h1 className="text-6xl font-medium leading-tight tracking-tight">
          <span className="text-black">Effortless </span>
          <span className="text-neutral-400">Payroll</span>
          <br />
          <span className="text-neutral-400">Distribution </span>
          <span className="text-black">Solution.</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Numbers Column */}
          <div className="space-y-6">
            <div className="bg-black rounded-3xl p-8 aspect-square">
              <div className="h-full flex flex-col justify-between">
                <div className="text-8xl font-medium text-white">01</div>
                <div>
                  <h3 className="text-xl text-white mb-2">
                    Confidential Payments
                  </h3>
                  <p className="text-neutral-400">
                    Distribute funds on-chain with encrypted amounts
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-100">
              <div className="text-8xl font-medium text-black">02</div>
              <div className="mt-auto">
                <h3 className="text-xl mb-2">Stealth USDC</h3>
                <p className="text-neutral-600">
                  Store stablecoins, hiding amounts from public visibility
                </p>
              </div>
            </div>
          </div>

          {/* Center Preview Column */}
          <div className="space-y-6">
            <div className="bg-neutral-100 rounded-3xl p-8 aspect-[4/3]">
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="/hero2.svg"
                  alt="Dashboard Preview"
                  width={200}
                  height={200}
                  className=""
                />
              </div>
            </div>

            <div className="bg-black rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-100 transition-all duration-300">
                  Live preview
                </button>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-all duration-300 cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-neutral-100">
              <div className="text-8xl font-medium text-black">03</div>
              <div className="mt-auto">
                <h3 className="text-xl mb-2">Effortless Payroll</h3>
                <p className="text-neutral-600">
                  Easily manage payroll with encrypted addresses
                </p>
              </div>
            </div>

            <div className="bg-black rounded-3xl p-8 aspect-square">
              <div className="h-full flex flex-col justify-between">
                <div className="text-7xl font-medium text-white">100%</div>
                <p className="text-neutral-400 text-lg">
                  Confidentiality in every transaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
