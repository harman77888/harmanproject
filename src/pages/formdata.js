import React from 'react'

const Formdata = () => {
  return (
    <>
    <section className="formdata">
        <div className="container">
            <form action="" className='formdata_inputs'>
                <input type="text" placeholder='Name' name='Name'className='form_data_input'/>
                <input type="text" placeholder='Email' name='Email'className='form_data_input'/>
                <input type="text" placeholder='Class' name='Class'className='form_data_input'/>
                <input type="text" placeholder='Roll no' name='Roll no'className='form_data_input'/>
                <input type="text" placeholder='Password' name='Password'className='form_data_input'/>
                <input type="submit" className='form_data_input  '/>
            </form>
        </div>
    </section>
    </>
  )
}

export default Formdata