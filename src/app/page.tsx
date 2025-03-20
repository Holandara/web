import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { InputRoot, InputIcon, InputField } from "./components/input";
import { Copy, ArrowRight, Mail, Radio, User } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="min-h-dvh flex flex-col justify-center items-center text-2xl">

        <div className="p-[-20]">Hi I am</div>
        <div className="font-typographica text-7xl items-center text-center
        bg-gradient-to-r from-purple to-danger bg-clip-text text-transparent"
        >
          SAROLANDA
        </div>
        web developer 
      </div>
    </main>
    
  )
}
