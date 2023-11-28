import Image from "next/image";
import Right from "../Icons/Right";

export default function Hero(){
     return(
     <section className="hero">
          <div className="py-12">
          <h1 className="text-4xl font-semibold">Everything<br /> is better<br /> with a <span className="text-primary">Pizza</span></h1>
          <p className="my-4 text-gray-500 text-sm">Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life</p>
          </div>
    
          <div className="relative">
          <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
          </div>

          <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full ">Order now
     <Right />
          </button>
          <button className="flex items-center gap-2 text-gray-600 py-2 font-semibold">
  Learn more
  <Right />
</button>
          </div>
          
     </section>
     );
}