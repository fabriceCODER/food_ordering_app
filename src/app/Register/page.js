export default function RegisterPage()
{
   return(
      <section className="my-8">
         <h1 className="text-center text-primary text-4xl">
            Register
          </h1>
          <form className="block max-w-xl max-auto items-center">      
          <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
      </section>
   )
}