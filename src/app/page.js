import Hero from '@/Components/Layout/Hero';
import HomeMenu from '@/Components/Layout/HomeMenu';
import SectionHeader from '@/Components/Layout/SectionHeader';
import Header from '../Components/Layout/Header';

export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <HomeMenu />
   <section className='text-center my-16'>
    <SectionHeader 
     subHeader={'Our story'}
     mainHeader={'About us'}
    />
    <div className='text-gray-500 max-auto mt-4 f gap-4'>
    <p>Welcome to our pizza paradise! At our pizza website, we take pride in crafting the perfect slice for every pizza enthusiast. Immerse yourself in a delectable journey where quality ingredients meet expert craftsmanship to create a symphony of flavors that dance on your taste buds.
  </p>
  <p>
Explore our diverse menu featuring a variety of mouthwatering pizzas, from classic Margherita to bold and innovative combinations that push the boundaries of traditional pizza-making. Our commitment to freshness and authenticity ensures that each bite is a celebration of the rich heritage and passion we pour into every pizza we serve. Whether you're a fan of thin crust, deep-dish, or somewhere in between, our pizza selection caters to every preference. Join us on this culinary adventure and experience the art of pizza perfection like never before. From our kitchen to your table, savor the extraordinary at <span className='text-primary'>ST PIZZA</span>.</p>
    </div>
  
   </section>
   <section className='text-center my-8'>
    <SectionHeader subHeader={'Don\'t hesitate'}
                mainHeader={'Contact us'}
                
    />
    <div>
    <a className='text-3xl mt-8 underline text-gray-500' href='tel:+250 78 311 59 98'>+250 78 311 59 98
    </a>
    </div> 
   </section>
   </>
  );
}
