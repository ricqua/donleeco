import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xdasz7g', 'template_dvyhmk8', form.current, 'user_lJcArVfFvxowZmvIrQxgV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Form submitted Successfully.  Please see your inbox for confirmation.")
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Don Lee & Co is bad</title>
        <meta name="description" content="Don Lee & Co is a bad company.  DO NOT do with with them." />
        <meta name="keywords" content="don lee & Co"/>
        <link rel="icon" href="https://erp.donleecompany.co/_ico/lightblue/apple-touch-icon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Don Lee & Co is a bad company</h1>
        
        <label className={styles.warningLabel}>This website will be taken down as soon as Don Lee pays teachers for thier work.</label>
        <p className={styles.published}>Published: 14 February 2022</p>
        
        <hr />

        <p>The Korean based online English Language business run by founder Don Lee is a bad company to do business with.  Avoid working for or taking lessons with this academy.</p>
        <div className={styles.images}>
          <div className={styles.profileImg}>
            <Image src="/Don Lee profile.png" alt="Don Lee profile image" width="416" height="416"/>
          </div>
          
          <div className={styles.profileImg}>
            <Image src="/teacher response.png" alt="teacher response image" width="416" height="416"/>
            <span>Message from ex-teacher at Don Lee & Co</span>
          </div>
        </div>

        <h2>Links to Don Lee & Co
        </h2>
          <ul>
            <li><a href="https://www.donleecompany.com/" rel="noreferrer">www.donleecompany.com</a></li>
            <li> <a href="https://www.donleeco.com/" rel="noreferrer">www.donleeco.com</a></li>
            <li><a href="https://www.donleecompany.co/" rel="noreferrer">www.donleecompany.co</a></li>
            <li><a href="https://www.linkedin.com/in/coachdonlee/" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/coachdonlee" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/donleeco" rel="noreferrer">Facebook</a></li>
          </ul>


        <h2>My story</h2>
        <p>My name is Richard (The creator of this site) and I taught as an independent instructor for Don Lee & Co between mid September 2021 till mid February 2022.  Over these 5 months/payment periods I only received payment once and it wasn’t even a full month&apos;s salary.  Don kept promising over phone calls and emails to pay me my outstanding salary but has not done so to date.  </p>
        
        <h2>Background</h2>
        <p>Shortly after joining Don Lee & Co one of my students mentioned that their previous instructors and other Don Lee & Co instructors teaching English classes to thier coworkers had quit suddenly because they did not receive payment after lengthy negotiations with Don himself.   I contacted some of these instructors and they confirmed the stories.</p>
        <p>I&apos;ve taught English in Korea for 5-6 years and have never heard or experienced academies not paying teachers so my initial assumption was that the instructors that quit were simply unreasonable staff.  My opinion started to change when I completed my 3rd month and still had not recieved any salary.  Don kept making excuses and the excuses have not stopped.</p>
        <p>At this point I don&apos;t know if Don Lee & Co are scamming people or if they simply suffer from really bad business and finance management.  Either way, the results are the same.</p>

        <h2>Action</h2> 
        <p>Don Lee & Co have published my paystubs for the past 5 months on the interal ERP system but no payment has been made.  Don, you know how much you own me.  Pay me...  It&apos;s actually very simple.</p>
        <p>P.S.  Oh, and Don, consider this my resignation notice.</p>

        <form ref={form} onSubmit={submitForm} className={styles.complaintForm}>
          <h2>Submit a complaint</h2>
          <p>Have you had issues with Don Lee & Co?  Submit your complaint here.  All messages will be treated as annonymous.</p>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email"/>
          <input type="phone" name="phone" placeholder="Phone"/>
          <textarea type="text" name="message" placeholder="Message" rows="10"/>
          <button type="submit" >Submit</button>
        </form>

        <hr />

        <h2>Live preview of Don Lee & Co&apos;s website</h2>
        <div className={styles.livePreviewiFrame}>
          <iframe src="https://www.donleecompany.com/home"  title="Iframe Example"></iframe>
        </div>

      </main>
    </div>
  )
}


