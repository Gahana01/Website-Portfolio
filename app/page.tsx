import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-cover' style={{background:"url(/main-bg.webp)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-4xl md:text-8xl font-bold text-white">
            Make anything possible with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Web Development
            </span> 
          </h1>
          <p className="text-lg md:text-2xl text-white">
            This is a website made with Next.js and Tailwind CSS. 
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link 
            href="/my-skills" 
            className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
             Learn more
            </Link>
            
            <Link 
              href="/my-projects" 
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
             <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-h0ver:opacity-20"/>
             My Projects
            </Link>
            
            <Link 
              href="/contact-me" 
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
             Contact Me!
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
            <Link 
              href="/my-skills" 
              className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
             Learn more
            </Link>
            
            <Link 
              href="/my-projects" 
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
             My Projects
            </Link>
            
            <Link 
              href="/contact-me" 
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
             Contact Me!
            </Link>
          </div>

          <div className="absolute bottom-0 right-0 z-[10]">
            <Image 
            src="/horse.png"
            alt='horse'
            height={300}
            width={300}
            className="absolute right-55 top-40">
            </Image>

            <Image 
            src="/cliff.webp"
            alt='cliff'
            height={480}
            width={480}>
            </Image>
          </div>

          <div className="absolute bottom-0 z-[5] w-full h-auto">
            <Image 
            src="/trees.webp"
            alt='trees'
            height={2000}
            width={2000}
            className="w-full h-full">
            </Image>
          </div>
          <Image 
            src="/stars.png"
            alt='stars'
            height={300}
            width={300}
            className="absolute top-0 left-0 z-[10]">
          </Image>
    </main>
  );
}
