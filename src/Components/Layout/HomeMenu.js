import Image from "next/image";

export default function HomeMenu(){
     return(
          <section className="">
               <div className="absolute h-full left-0 right-0 w-full justify-start" style={{'overflowX': "hidden"}}>
                   <div className="absolute left-0 -top-12 text-left">
                   <Image src={'/sallad1.png'} width={107} height={195} alt={'sallad'} />
                   </div>
                   <div className="absolute -top-6 right-0 -z-10">
                   <Image src={'/sallad2.png'}width={107} height={195}  alt={'sallad'} />
                   </div>
               </div>
              <div className="text-center">
             <h3 className="uppercase text-gray-600 font-semibold leading-4">Check out</h3>
             <h3 className="text-primary font-bold text-4xl italic">Menu</h3>
          </div>
          <div>
               
          </div>
          </section>
        
     )
}