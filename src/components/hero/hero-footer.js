import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Github, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const HeroFooter = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="relative bg-[#F3F3F3] rounded-[35px] overflow-hidden p-8 py-6 mb-8 h-[85vh] grid place-items-center">
        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F3F3F3]/80" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full grid place-items-center p-1.5">
              <Image src="/logob.svg" width={50} height={50} alt="Hero Image" />
            </div>
            <div>
              <h1 className="text-5xl font-medium text-center">
                <span className="text-black">Automated </span>
                <span className="text-gray-400">Payroll</span>
                <br />
                <span className="text-gray-400">Distribution </span>
                <span className="text-black">System</span>
              </h1>
            </div>
          </div>

          <div className="grid place-items-center mt-6">
            <button
              className="group rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 bg-black text-white shadow hover:opacity-90 pl-4"
              onClick={() => setShowVideo(true)}
            >
              <p className="py-2">View Demo</p>
              <div className="h-10 w-10 rounded-full bg-white overflow-hidden grid place-items-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ChevronRight className="text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Protocol Demo</DialogTitle>
            <DialogDescription>
              Watch how our <span className="text-black">Payroll Protocol</span>{" "}
              works.
            </DialogDescription>
          </DialogHeader>
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/OvAVM-Ll2SA?si=eeKfjUTMkISdKBtg" // Replace YOUR_VIDEO_ID with actual YouTube video ID
              title="Protocol Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroFooter;
