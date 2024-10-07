import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import '../Components/Header.css'; 
import '../Components/imageGallery.css'
import logo from '../Images/camera.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import galary1 from '../assets/galary1.png'
import galary2 from '../assets/galary2.png'
import galary3 from '../assets/galary3.png'
import galary4 from '../assets/galary4.png'
import galary6 from '../assets/galary6.png'
import galary7 from '../assets/galary7.png'

import bg from '../assets/bg.png';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className="motionTop header flex items-center justify-center py-40" data-aos="fade-right">
      <div className="text-center">
        <h1 className="text-5xl font-bold gradient-text">Capture Your Moment, Preserve Your Memories</h1>
        <p className="mt-4 text-gray-300">Our studio specializes in creating beautiful and timeless photographs that capture the essence of your special moments.</p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-black font-semibold rounded-full">Book a Session</button>
      </div>
    </div>



<div class="motion flex flex-col md:flex-row p-8 dark:bg-slate-300">
<div class="sm:mx-4 md:mx-8">
  <img class="object-fill h-[25rem] sm:h-[15rem]  md:h-[25rem] w-auto rounded-lg" src={logo}/>
</div>

  <div class=" text-center space-y-4 sm:mx-4 md:mx-8">
  
      <div class="text-center font-bold pl-20 text-5xl gradient-text"> About Our Photography Services</div>

    <figcaption class="font-medium">

      <div class="motion pb-3 border-b-4 border-indigo-200 rounded-lg shadow hover:shadow-lg bg-slate-200 transition duration-500">
      <div class="text-sky-500 dark:text-sky-400 text-2xl pt-3">
      Portrait Photography
      </div>
      <div class="text-slate-700 dark:text-slate-500 pt-3 ">
      Capture stunning portraits of yourself, family, or friends that will be cherished for years to come.
      </div>
      </div>

       
       <div class="motion pb-3 border-b-4 border-indigo-200 rounded-lg shadow hover:shadow-lg bg-slate-200 transition duration-500">
      <div class="text-sky-500 dark:text-sky-400 text-2xl pt-3 ">
      Wedding Photography

      </div>
      <div class="text-slate-700 dark:text-slate-500 pt-3">
      Document your wedding day from start to finish, preserving memories of your special moments...
      </div>
      </div>


      <div class="motion pb-3 border-b-4 border-indigo-200 rounded-lg shadow hover:shadow-lg bg-slate-200 transition duration-500">
      <div class="text-sky-500 dark:text-sky-400 text-2xl pt-3">
      Event Photography
      </div>
      <div class="text-slate-700 dark:text-slate-500 pt-3">
      Capture the energy and excitement of your event, whether it's a corporate conference or a birthday party
      </div>
      </div>

      <div class="motion pb-3 border-b-4 border-indigo-200 rounded-lg shadow hover:shadow-lg bg-slate-200 transition duration-500">
      <div class="text-sky-500 dark:text-sky-400 text-2xl pt-3 ">
      Commercial Photography
      </div>
      <div class="text-slate-700 dark:text-slate-500 pt-3">
      Professional photos for your business, showcasing your products, services, and brand identity.
      </div>
      </div>
    </figcaption>
  </div>
</div>



<div className="motion flex flex-col items-center p-8 dark:bg-slate-300">
  <p className="text-center font-bold text-5xl gradient-text mb-8">Meet Our Talented Team of Photographers</p>

  <div className="motion flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">

    <div className=" sm:w-1/4 p-4 ">
      <p className="font-bold gradient-text">Sarah Jones</p>
      <p>Sarah is a skilled photographer with a passion for capturing  the beauty in everyday moments. She has a keen eye for detail and a natural ability to connect with her subjects.</p>
    </div>

    <div className=" sm:w-1/4 p-4 ">
      <p className="font-bold gradient-text">Michael Lee</p>
      <p>Michael is a creative and experienced photographer with a focus on wedding and event photography. He has a knack for capturing candid moments and creating stunning visual stories.</p>
    </div>

    <div className=" sm:w-1/4 p-4 ">
      <p className="font-bold gradient-text">Emily Garcia</p>
      <p>Emily is a talented portrait photographer with a gentle and approachable style. She has a gift for making her subjects feel comfortable and confident in front of the camera.</p>
    </div>

  </div>
</div>


<div class="motion flex items-center justify-center  bg-blue-500 sm:h-auto">
        <div class="motion w-full max-w-5xl h-auto bg-white rounded-2xl border shadow-2xl shadow-white overflow-hidden">
            <p class="mt-3 text-center font-bold text-4xl gradient-text mb-8">Browse Our Impressive Photography Portfolio</p>

            <div class="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 px-4">
                <div class="sm:w-1/4 p-4">
                    <img class="object-cover w-full h-48 sm:h-auto mx-auto rounded-lg sm:rounded-none" src={image1} alt="Portrait Photography"/>
                    <p class="font-bold mt-2 text-center">Portrait Photography</p>
                    <p class="text-slate-500 text-center">View our portfolio of stunning portraits, capturing the essence of our clients' personalities</p>
                </div>

                <div class="sm:w-1/4 p-4">
                    <img class="object-cover w-full h-48 sm:h-auto mx-auto rounded-lg sm:rounded-none" src={image2} alt="Landscape Photography"/>
                    <p class="font-bold mt-2 text-center">Landscape Photography</p>
                    <p class="text-slate-500 text-center">Explore our collection of breathtaking landscape photographs, showcasing the beauty of the world around us</p>
                </div>

                <div class="sm:w-1/4 p-4">
                    <img class="object-cover w-full h-48 sm:h-auto mx-auto rounded-lg sm:rounded-none" src={image3} alt="Wedding Photography"/>
                    <p class="font-bold mt-2 text-center">Wedding Photography</p>
                    <p class="text-slate-500 text-center">Discover our portfolio of wedding photography, documenting the special moments of our clients' big days</p>
                </div>
            </div>
        </div>
    </div>


{/* image gallery */}
<div class="motion bg-gradient-to-r from-indigo-400 to-cyan-400 pb-8">
<h1 class="ImageGalleryTitle">Image gallery</h1>
  <div class="ImageGalleryBox ">
		<div id="carousel">
			<figure><img src={galary1} alt=""/></figure>
			<figure><img src={galary2}  alt=""/></figure>
			<figure><img src={galary3}  alt=""/></figure>
			<figure><img src={galary4}  alt=""/></figure>
			<figure><img src={galary6}  alt=""/></figure>
			<figure><img src={galary7}  alt=""/></figure>
			<figure><img src={image1} alt=""/></figure>
			<figure><img src={image3} alt=""/></figure>
			<figure><img src={galary2}  alt=""/></figure>
		</div>
	</div>
  </div>



<div class="motion question flex items-start justify-center pt-8 h-96">

    <div class="max-w-2xl p-8 md:p-0 rounded-lg">
        <h1 class="text-5xl font-bold text-indigo-400 mb-6">Frequently Asked Questions About Our Services</h1>
        <ul class="space-y-4">
            <li class="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 fill-white mr-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
                <span class="font-bold md:text-2xl">What types of photography services do you offer?</span>
            </li>
            <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 fill-white mr-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
                <span class="font-bold md:text-2xl">How do I book a photography session?</span>
            </li>
            <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 fill-white mr-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
                <span class="font-bold md:text-2xl">What is your turnaround time for delivering photos?</span>
            </li>
        </ul>
    </div>
</div>


{/* footer */}

<div class="motionFooter footer text-white py-24">
  <div class="container mx-auto text-center">

    <h1 class="text-blue-600 font-bold text-5xl md:text-5xl mb-12">Get in Touch and Let's Capture Your Story</h1>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-4">

      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-blue-600 mb-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <p class="font-medium">Phone</p>
        <p>+91 9999995555</p>
      </div>

      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-blue-600 mb-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <p class="font-medium">Email</p>
        <p>info@photostudio.com</p>
      </div>

      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-blue-600 mb-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p class="font-medium">Address</p>
        <p>123 Main Street, City, State, Zip Code</p>
      </div>

      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-blue-600 mb-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <p class="font-medium">Website</p>
        <p>www.photostudio.com</p>
      </div>
    </div>
  </div>
</div>

</>
  );
}

export default Header;
