import React from 'react'

const SignUp = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-white text-base-100 p-8 w-[40%]'>
        <h1 className='text-[44px] text-center font-semibold mb-2'>Tranquil</h1>
        <p class="text-base-100 text-center mb-8">Kreirajte vaš korisnički račun.</p>


        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend text-base-100 text-[14px]">Ime</legend>
          <input type="text" className="input w-full placeholder:text-[#ffffff99] placeholder:text-[12px] outline-none text-white" placeholder="Marko" />
        </fieldset>

        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend text-base-100 text-[14px]">Prezime</legend>
          <input type="text" className="input w-full placeholder:text-[#ffffff99] placeholder:text-[12px] outline-none text-white" placeholder="Markić" />
        </fieldset>

        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend text-base-100 text-[14px]">Mail</legend>
          <input type="mail" className="input w-full placeholder:text-[#ffffff99] placeholder:text-[12px] outline-none text-white" placeholder="markomarkic@gmail.com" />
        </fieldset>

        
        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend text-base-100 text-[14px]">Broj telefona</legend>
          <input type=" number" className="input w-full placeholder:text-[#ffffff99] placeholder:text-[12px] outline-none text-white" placeholder="+123 45 678 910" />
        </fieldset>

        <button className='btn btn-primary w-full text-white font-semibold text-[14px] mt-4'>
          registriraj se
        </button>
    </div>   
</div>
  )
}

export default SignUp
