import React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

const HeadingWithAvatars = () => {
  return (
    <div className="bg-white h-screen grid place-items-center">
      <div className="max-w-6xl mx-auto my-auto px-4 py-20 grid place-items-center">
        <div className="flex flex-col items-center gap-12">
          {/* Top Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">
              Uses Fully Homomorphic Encryption
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-semibold leading-[1.1] tracking-tight">
            Built for secure
            <br />
            transactions
          </h2>

          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center">
              <Image
                src="/user1.png"
                alt="Anonymous user 1"
                width={56}
                height={56}
                className="rounded-full border-2 border-white ring-2 ring-black -mr-4"
              />
              <Image
                src="/user2.png"
                alt="Anonymous user 2"
                width={56}
                height={56}
                className="rounded-full border-2 border-white ring-2 ring-black -mr-4"
              />
              <Image
                src="/user3.svg"
                alt="Anonymous user 3"
                width={56}
                height={56}
                className="rounded-full border-2 border-white bg-white ring-2 ring-black"
              />
            </div>
            <p className="text-neutral-600 text-lg">
              Trusted by leading financial institutions
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeadingWithAvatars;
