import Image from "next/image";

export default function HomeMenu(){
     return(
          <section className="">
               <div className="absolute h-full left-0 right-0 w-full justify-start" style={{'overflowX': "hidden"}}>
                   <div className="absolute left-0 -top-2 text-left -z-10">
                   <Image src={'/sallad1.png'} width={107} height={195} alt={'sallad'} />
                   </div>
                   <div className="absolute -top-[10px] right-0">
                   <Image src={'/sallad2.png'}width={107} height={195}  alt={'sallad'} />
                   </div>
               </div>
               <div className="text-center mt-[10px]"> 
              
          <h3 className="uppercase text-gray-600 font-semibold leading-4">Check out</h3>
  <h3 className="text-primary font-bold text-4xl italic">Menu</h3>
</div>    
<div className="grid grid-cols-3 gap-4">
    <div className="bg-gray-300 rounded-lg text-center">
       <h4 className="font-semibold my-4">Pepperoni Pizza</h4>
       <p className="text-gray-500 text-sm">Pepperoni pizza is a widely enjoyed and iconic choice Pizza</p>
       <button className="bg-primary text-white rounded-full px-4 py-2">Add to cart</button>
    </div>
     
</div>

          </section>
        
     )
}