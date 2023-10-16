import React from 'react';
import "./About.css";
import aboutImg from "../images/about-img.jpg";
import anotherImg from "../images/about-img-2.png"; // Import your new image
// import aboutImage from '../images/about-img-2.png';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
            <img src={anotherImg} alt="" />
          </div>
          <div className='about-text columns'>
            <h2 className='about-title fs-26 ls-1'>About Us</h2>
            <p className='fs-17'>
              Welcome to Book Haven, your go-to web application for everything related to books and publications. In a world filled with endless literary treasures, Book Haven is your trusted companion on your reading journey. Whether you're a seasoned bookworm or just getting started with your reading habit, our platform is designed to enrich your reading experience in various ways.
            </p>

            <h3 className='fs-20'>Discover</h3>
            <p className='fs-17'>
              Book Haven offers a vast and diverse library of books and publications, spanning various genres and subjects. Explore a world of literary wonders, from timeless classics to contemporary masterpieces. Our carefully curated collection ensures that there's something for everyone, whether you're into fiction, non-fiction, science fiction, fantasy, or academic research.
            </p>

            <h3 className='fs-20'>Manage</h3>
            <p className='fs-17'>
              We understand that managing your reading list can be a daunting task. With Book Haven, you can effortlessly organize your books and publications. Keep track of what you're currently reading, what you've completed, and what's on your to-read list. Say goodbye to the chaos of scattered book lists and hello to a well-organized digital bookshelf.
            </p>

            <h3 className='fs-20'>Remember</h3>
            <p className='fs-17'>
              Ever stumbled upon a book title or publication that piqued your interest but couldn't remember it later? Book Haven is here to solve that problem. You can easily bookmark books, add them to your favorites, or create a personalized wishlist. Rediscover your favorite reads, and never miss out on a potential literary gem again.
            </p>

            <h3 className='fs-20'>Connect</h3>
            <p className='fs-17'>
              Book Haven is not just a platform; it's a community of book enthusiasts like you. Connect with fellow readers, share your reading recommendations, and discover new titles through community reviews and discussions. Join us in celebrating the joy of reading and the magic of storytelling.
            </p>
          </div>
        </div>
        
        
        <div className='about-text columns'>
          <h2 className='about-title fs-26 ls-1'>Why Book Haven?</h2>
          <ul className='fs-17'>
            <li><strong>User-Friendly:</strong> Our user-friendly interface ensures a seamless and intuitive experience, whether you're a tech-savvy user or just starting with digital libraries.</li>
            <li><strong>Personalized Experience:</strong> Tailor your reading journey with personalized lists, reading progress tracking, and recommendations.</li>
            <li><strong>Secure and Private:</strong> We prioritize the security and privacy of your reading data, ensuring a safe and enjoyable experience.</li>
            <li><strong>Continuous Improvement:</strong> We're committed to enhancing Book Haven continually. Expect exciting new features and updates to make your reading life even better.</li>
          </ul>

          <p className='fs-17'>
            Join us at Book Haven and embark on a delightful journey through the world of books. Rediscover the joy of reading, fuel your curiosity, and build a digital library that reflects your literary tastes. Book Haven is more than just an app; it's your haven for all things book-related.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;



















// import React from 'react';
// import "./About.css";
// import aboutImg from "../images/about-img.jpg";

// const About = () => {
//   return (
//     <section className='about'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>About</h2>
//         </div>

//         <div className='about-content grid'>
//           <div className='about-img'>
//             <img src = {aboutImg} alt = "" />
//           </div>
//           <div className='about-text'>
//             <h2 className='about-title fs-26 ls-1'>About Us</h2>
//             <p className='fs-17'>BookHaven is a web application that allows users to discover, manage, and keep track of books and publications. Whether you're an avid reader or simply looking to organize your reading list, this app provides a user-friendly platform to explore, categorize, and remember books of interest.
// .</p>
            
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About