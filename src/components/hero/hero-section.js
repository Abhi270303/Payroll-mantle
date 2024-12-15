import Image from "next/image";
import React from "react";
import HeroHeader from "./hero-header";
import { ArrowUpRight, Shield, Clock, CreditCard } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto w-full p-4 pt-0 flex-1 flex flex-col">
       
        
        <div className="grid grid-cols-1 min-h-[85vh] md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 mt-8">
          {/* Main Hero Card */}
          <div className="lg:col-span-2 bg-black text-white rounded-3xl p-12 flex flex-col justify-between group relative overflow-hidden min-h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="space-y-4 relative z-10">
              <span className="inline-flex items-center gap-2 text-sm text-neutral-400">
                Featured <ArrowUpRight className="w-4 h-4" />
              </span>
              <h1 className="text-5xl font-medium">
                Encrypted
                <br />
                Transactions
              </h1>
            </div>
            <p className="text-neutral-400 max-w-md relative z-10 text-lg">
              Next-generation payroll security for modern businesses
            </p>
          </div>

          {/* Image Card */}
          <div className="lg:col-span-2 bg-neutral-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden group hover:bg-neutral-200 transition-colors duration-500 min-h-[420px]">
            <div className="relative w-full h-full">
              <Image
                src="/hero.svg"
                fill
                alt="Hero Image"
                className="object-contain transform transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="bg-white justify-center rounded-3xl p-8 group hover:bg-neutral-100 transition-colors duration-300 border border-neutral-100 flex flex-col h-full">
            <div>
              <Shield className="w-6 h-6 text-black" />
              <h3 className="text-lg font-medium mt-6 mb-3">Security First</h3>
            </div>
            <p className="text-neutral-600 text-sm">End-to-end encryption for all transactions</p>
          </div>

          <div className="rounded-3xl justify-center p-8 group transition-colors duration-300 border border-neutral-100 hover:bg-neutral-100 flex flex-col h-full">
            <div>
              <Clock className="w-6 h-6" />
              <h3 className="text-lg font-medium mt-6 mb-3">Automated</h3>
            </div>
            <p className="text-neutral-600 text-sm">Intelligent payment processing</p>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 group hover:bg-neutral-100 transition-colors duration-300 border border-neutral-100 flex flex-col h-full justify-center">
            <div>
              <CreditCard className="w-6 h-6 text-black" />
              <h3 className="text-lg font-medium mt-6 mb-3">Smart Management</h3>
            </div>
            <p className="text-neutral-600 text-sm">Complete control over your financial operations with intelligent insights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;