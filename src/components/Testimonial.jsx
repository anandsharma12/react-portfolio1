import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard name={'Ajay'}   feedback={
            "Expert in transforming designs into functional, user-friendly web applications seamlessly."
          }/>
             <TestimonialCard name={'Saksham'}   feedback={
            "Delivers clean, responsive designs with seamless user experiences and performance."
          }/>
             <TestimonialCard name={'Sourabh'}   feedback={
            "Creates intuitive, responsive interfaces that enhance user experience and performance."
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
