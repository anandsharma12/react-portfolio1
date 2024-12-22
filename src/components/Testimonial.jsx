import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard name={'Ajay'}   feedback={
            "The frontend development for my website was exceptional, delivering a sleek, user-friendly design that exceeded expectations."
          }/>
             <TestimonialCard name={'Saksham'}   feedback={
            "Delivers clean, responsive designs with seamless user experiences and performance."
          }/>
             <TestimonialCard name={'Sourabh'}   feedback={
            "Thanks Brother, our platform now has an intuitive interface that enhances user experience and engagement."
          }/>
      </section>
    </div>
  )
}

const TestimonialCard = ({name,feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        <h4>{name}</h4>
    <p>{feedback}</p>
    </article>
)

export default Testimonial;
