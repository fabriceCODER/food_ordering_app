import Image from "next/image";
import Right from "../Icons/Right";

export default function Hero(){
     return(
     <section className="hero mt-4">
          <div className="py-12">
          <h1 className="text-4xl font-semibold">Everything<br /> is better<br /> with a <span className="text-primary">Pizza</span></h1>
          <p className="my-6 text-gray-500 text-sm">Pizza is the missing piece that makes every<br />day complete, a simple yet delicious joy in life</p>
          </div>
    
          <div className="relative top-[-20px]">
          <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
          </div>
          <div className="bg-white absolute right-0 -z-10">
                   <Image src={'/sallad2.png'}width={107} height={220}  alt={'sallad'} />
                   </div>
          <div className="mt-[-50px]">
  <div className="flex gap-4 text-sm">
    <button className="bg-primary uppercase flex items-center gap-2 text-white px-6 py-2 rounded-full">
      <span className="whitespace-nowrap">Order now</span>
      <span className="flex-1 w-7 h-7"><Right /></span>
    </button>
    <button className="flex items-center gap-2 text-gray-600 py-2 font-semibold">
      <span className="whitespace-nowrap">Learn more</span>
      <span className="flex-1 w-7 h-7 flex items-center"><Right /></span>
    </button>
  </div>
</div>
     </section>
     );
}


