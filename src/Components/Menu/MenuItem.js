import Image from "next/image"
export default function MenuItem(){
     return(
          
          <div className="bg-gray-300 rounded-lg p-4 text-center">
             <Image src={'/pizza.png'} width={120} height={120} alt={'pizza'}/>
             <h4 className="font-semibold my-4 text-xl">Pepperoni Pizza</h4>
             <p className="text-gray-500 text-sm">Pepperoni pizza is a widely enjoyed and iconic choice Pizza</p>
             <button className="mt-4 bg-primary text-white rounded-full px-4 py-2">Add to cart $12</button>
          </div>
        
     );
    
}