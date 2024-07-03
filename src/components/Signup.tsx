import { useEffect, useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleValueChange = (event) => {
    console.log('Email:', event.target.value);

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(event.target.value)) {
      setIsValid(true);

    
    } else setIsValid(false);
  };
  // useEffect(() => {
  //       setIsValid(true);
  //     }, [isValid]);


  const handleSubmit = (event) => {
    // handleValueChange(event);
    event.preventDefault();
  };

  return (
    <section className='signup'>
      <form onSubmit={handleSubmit} className='signup__form'>
        <legend>35,000+ already joined </legend>

        <label className='signup__title'>
          Stay up-to-date with what we're doing
      
        <input
          type='email'
          value={email}
          placeholder='jane.appleseed@bookmark.io'
          className='signup__input'
          // onChange={handleValueChange}
        />
          </label>
        {!isValid && (
          <span className='required'>Whoops, make sure it's an email</span>
        )}
        <button type='submit' className='btn-form' onSubmit={handleSubmit}>
          Contact Us
        </button>
        {/* 
  <!-- TO-DO=> implement form and submit functionality
  https://docs.astro.build/en/recipes/build-forms/ --> */}
      </form>
    </section>
  );
}
