import React from 'react'

const About = () => {
  return (
    <div id='About'
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "url('Banner.jpg')" }}
    >
    
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-semibold mb-4">A little bit about us.</h2>
        <p className="text-lg mb-12">
          We are a group of photographers from The Netherlands.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
          <blockquote className="italic text-xl text-gray-600 mb-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            varius mi at turpis ullamcorper mattis. Integer sed accumsan purus.
            Morbi ullamcorper euismod leo et porttitor. Etiam varius mi at
            turpis ullamcorper mattis."
          </blockquote>
          <p className="mb-4">
            Nullam scelerisque dolor tortor, eget luctus metus egestas non. Sed
            molestie bibendum arcu, vitae consequat est sagittis et. Nulla
            sodales sagittis velit ac lacinia. Proin at felis posuere, aliquam
            nisi sed, pharetra velit.
          </p>
          <h3 className="font-semibold text-xl mb-4">
            Working together for over 6 years!
          </h3>
          <p className="mb-4">
            Fusce dapibus magna nulla, ac placerat felis fringilla eu. Maecenas
            tincidunt suscipit lacus, et viverra nisi lacinia eget. Duis eu urna
            varius, condimentum elit eu, blandit velit. Proin enim urna, cursus
            at feugiat in, aliquam at neque.
          </p>
          <p className="mb-4">
            Cras felis ligula, feugiat nec gravida sit amet, posuere at est.
            Proin ac semper tellus. Mauris tristique diam justo, sit amet
            tristique eros sagittis lacinia. Sed eu luctus quam. Pellentesque
            nibh sapien, commodo et enim consequat, viverra sollicitudin nunc.
          </p>
          <h3 className="font-semibold text-xl mb-4">
            In hac habitasse platea dictumst.
          </h3>
          <p>
            Ut sit amet ex volutpat, finibus urna eu, maximus mi. Sed vel orci
            varius, congue augue eu, mollis turpis. Sed consectetur tellus ut
            sem lacinia nec pulvinar massa pulvinar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
