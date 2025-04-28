import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='bg-white text-base-100 p-8 w-[40%]'>
            <h1 className='text-[44px] text-center font-semibold mb-8'>Tranquil</h1>

            <fieldset class="fieldset ">
              <legend class="fieldset-legend text-base-100 text-[14px]">Unos lozinke</legend>
              <input type="text" className="input w-full placeholder:text-[#ffffff99] placeholder:text-[12px] outline-none text-white" placeholder="Zaporka" />
              <div className='flex items-center justify-between'>
                <p class="label">Unesite lozinku koju ste dobili na vaš e-mail.</p>
                <p class="label text-base-100 underline font-semibold">Niste dobili lozinku?</p>
              </div>
            </fieldset>

            <button className='btn btn-primary w-full text-white font-semibold text-[14px] mt-6'>
                prijavi se
            </button>

        </div>   
    </div>
  )
}

export default Login
