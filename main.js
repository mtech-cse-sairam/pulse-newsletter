const getAchievementComponent = (content, images, index) => {
  const component = `
    <div class="flex flex-col ${
      index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
    } items-center space-y-4">
      <div data-aos="${
        index % 2 === 0 ? "flip-right" : "flip-left"
      }" class="flex flex-col md:flex-row md:w-1/2 md:h-96" >
        ${getImageComponent(images)}
      </div>
      <div data-aos="${
        index % 2 === 0 ? "fade-left" : "fade-right"
      }" class="md:w-1/2">
        <p>
          ${content}
        </p>
      </div>
    </div>    
`;
  return component;
};

const getEventOrAwardComponent = (content, title, image, index) => {
  const component = `
    <div class="flex flex-col ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    } gap-6 items-center">
      <div data-aos=${
        index % 2 !== 0 ? "zoom-out-left" : "zoom-out-right"
      } class="h-80 w-[70%] md:w-1/2 rounded-xl">
        <img src=${image} alt=${title} class="shadow-2xl object-cover mx-auto h-full" />
      </div>
      <div data-aos=${
        index % 2 === 0 ? "zoom-out-left" : "zoom-out-right"
      } class="md:w-1/2 w-[90%]">
        <h1 class="font-bold text-xl">${title}</h1>
        <p class="font-old-standard">
          ${content}
        </p>
      </div>
    </div>
  `;
  return component;
};

const getImageComponent = (images) => {
  let imagesComponent = "";
  images.forEach((item) => {
    imagesComponent += `<img src="${item}" class="object-contain object-center h-full w-full" alt=${item} /> `;
  });
  return imagesComponent;
};

const smoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

const achievementData = [
  {
    content: `Mr. Sivanesh K S and Mr. Surya A, both pursuing M.Tech CSE in their third year, alongside Mr. Naren Kumar S S from the Department of CSE, secured their positions as top 75 innovators in the Build (Bold, Unique, Lead, Idea, and Development) program at IIT Hyderabad.From a pool of over 600 applicants, these brilliant minds emerged victorious, clinching an initial funding of ₹1,00,000 to fuel the development of their groundbreaking prototype. The trio, particularly the dynamic duo of Sivanesh and Surya, showcased unparalleled teamwork and unwavering dedication during a grueling 3-day orientation bootcamp at IIT Hyderabad, held on October 29, 30, and 31. This intensive session delved into the nuances of the Tech Entrepreneurship Ecosystem, Design Thinking, Intellectual Property, the 6 D's of Technology, Elevator Pitching, Business Model Canvas, Branding & Storytelling, and Pitch Deck Design. The bootcamp, a crucible of learning and collaboration, also featured enlightening visits to iTIC iLab and the IITH Campus, providing real-world insights into the landscape they are set to conquer. Guided by a seasoned mentor, the duo navigated the intricate path of project development, ensuring the brilliance of their innovation shines through. The crescendo of their journey was the grand iTIC Foundation Day celebrations, where accolades, momentos , and special gifts awaited these visionary students, marking the culmination of a transformative and impactful chapter in their academic pursuits. As they stand at the precipice of tomorrow's technology, this triumphant trio embodies the spirit of innovation and the promise of a future sculpted by their ingenious contributions.`,
    images: ["./images/Acheivements/build-program.png"],
  },
  {
    content: `Surya and Sivanesh from M.Tech CSE (2021-2026), along with Naren Kumar from CSE, seized a unique opportunity to showcase their startup before prominent investors in Salem on September 30th, 2023, through StartNet Ventures Private Limited. This experience proved invaluable, offering profound insights from tech experts, including a motivating speech from marketing strategist Mani Maran Ramalingam.`,
    images: ["./images/Acheivements/start-net.jpg"],
  },
  {
    content:
      `Agilan Amarnath Flight Cadet in NCC from the Depsartment of M tech CSE has achieved a remarkable feat by securing the second position in the prestigious ALL INDIA INTER DIRECTORATE SPORTS SHOOTING COMPETITION. This esteemed event took place in Thiruvananthapuram, Kerala, spanning from July 3rd to July 6th, 2023.`,
    images: ["./images/Acheivements/NCC/agilan4.png"],
  },
  {
    content: `Sivanesh K S and Surya A, brilliant pupils from the esteemed M.Tech Computer Science and Engineering department, recently showcased their exceptional ingenuity by clinching the runner-up award at the esteemed Ideathon and Pitchfest hosted by IEEE RMC at The NorthCap University in Gurugram, Haryana. The journey to this accomplishment commenced with their idea earning recognition during the abstract selection round, where it outshone 200+ competing applications. Progressing to the second round hosted at The NorthCap University, Gurugram, within the backdrop of the International Returning Mothers Conference held on October 26-27, the duo presented their innovative project in a sprawling auditorium before a diverse audience of over 300 participants, featuring esteemed delegates from across the world and India.Their remarkable presentation culminated in a well-deserved 1st runner-up position, coupled with a significant cash award of $250, in addition to receiving commendable tokens such as a memento and certificates. This achievement not only brought prestige to the M.Tech CSE department but also opened doors to extensive networking opportunities. Furthermore, their groundbreaking work is slated to be showcased on a global platform through IEEE TV, solidifying their standing in the international arena and highlighting the caliber of their contributions to the field of Computer Science and Engineering.`,
    images: ["./images/Acheivements/IEEE/rmc.jpg"],
  },
  {
    content: `Sri Charith A G, a distinguished member of the M.Tech CSE department, recently demonstrated exceptional prowess at the SEATECH Hackathon in Malaysia, garnering international acclaim. His noteworthy participation in this global event not only brought pride to our department but also showcased a commendable dedication to innovation on an international stage. The SEATECH Hackathon proved to be a transformative experience, challenging conventional thinking and offering invaluable insights. The support extended by Sri Sai Ram Engineering College, particularly through a travel grant of rupees 1 lakh, played a pivotal role in facilitating this international participation. We express our sincere gratitude for their unwavering encouragement, as their generosity significantly contributed to the success of our representative. Beyond enabling participation in Malaysia, this opportunity served as a prominent platform to exhibit and refine skills and talents. We would also like to acknowledge our management for their noteworthy gesture of honoring participants with a Cash Award, a testament to their recognition and appreciation for the dedication and success achieved at this prestigious international event. Such support reinforces our commitment to fostering excellence and innovation within our academic community.`,
    images: ["./images/Acheivements/sea-tech.jpg"],
  },
  {
    content: `Rakesh, Aldous Roy and Parthiban.J of M.Tech(CSE) (2021-2026)secured Second place in the Ideathon Event, organised by NDLI Club on 11th july 2023.`,
    images: ["./images/Acheivements/voice-of-brain.png"],
  },
  {
    content: `Vaishnavi S. Department of MTECH CSE (III year)(2021-2026) has been chosen as IEEE Region 10 WIE Pre-University Champion 2023 on 17th October 2023.`,
    images: ["./images/Acheivements/IEEE/wie-champion-2023.jpg"],
  },
  {
    content: `IEEE Sri Sai Ram Engineering College, SMC28, System, Man and
          Cybernetics (SMC) / IEEE Madras Section, has been selected to
          receive a $210 support fund from the IEEE R10 Humanitarian
          Sustainable Project & Volunteer Training Support Fund 2023. Our
          project, "From Trash to Treasure: Uniting Waste Management and
          Mushroom Cultivation for a Sustainable Society," has been recognized
          for its potential to make a positive impact on our community and the
          environment. This incredible opportunity showcases the power of
          entrepreneurship in driving positive change for our community and
          the environment.`,
    images: ["./images/Acheivements/IEEE/Ieeefunding.png"],
  },
  {
    content: ` Ruthi Shankari S, Vaisali S and Pavithra R of 3rd year have been
    shortlisted for the Grand finale of IEEE Yessist taking place in
    EGYPT on september 1 and 2. Their project is based on Stress and
    Anxiety Therapy using AI mobile application. this app serves as a
    personal guide, offering an array of features designed to address
    the complex nature of stress and anxiety. The app's unique value
    lies in its holistic approach, combining evidence-based strategies,
    expert guidance, and user-friendly functionalities.Aligned with
    Sustainable Development Goal 3 (Good Health and Well-being), this
    app is more than just a technological innovation. It's a step
    towards a world where mental wellness is prioritized and accessible
    to all.`,
    images: ["./images/Acheivements/ieeeyesist.png"],
  },
  {
    content: `Meet a remarkable achiever whose journey shines brightly. His
  project, a standout among numerous submissions for the Intel Unnati
  Industrial Training Programme's challenge focused on creating a
  simulated FIGO Land Rover (FSM). Guided by determination and
  supported by a network of mentors, his gratitude extends to Sairam
  Institutions for nurturing his growth and his department for its
  guidance. Intel Unnati, an educational transformation platform,
  played a crucial role, enabling him to enhance his skills across
  various stages, from designing intricate systems to simulating their
  functions. The journey reached its pinnacle during an awards
  ceremony at Intel's Bengaluru office. This distinguished individual
  was honored with a Rs.30,000 prize, an emblematic Intel t-shirt, and
  a meaningful gift. With sights set on the horizon, he's eager to
  leverage his newfound knowledge to make a significant impact in the
  tech industry. This achievement is not merely a fleeting moment but
  a stepping stone towards a promising future. His appreciation
  extends to all those who contributed to this exceptional
  accomplishment.`,
    images: ["./images/Acheivements/intelunnati.jpg"],
  },
  {
    content: ` SHAHANA DEVI V ,NITHIKA C D ,KEERTHI R , SIVANESH K S Won First
    prize for the project titled “Three Pillars of Social” under SDG
    number-16 in Sairam SDG IDEATHON 2.0`,
    images: ["./images/Acheivements/ideathonsivanesh.png"],
  },
  {
    content: ` The National Service Scheme, in association with the English
    Literary Club and SSEC IEEE Professional Communication Society SBC,
    conducted an essay competition. M.tech CSE Department student
    SIVANESH K S , won the third prize, receiving a cash award .`,
    images: ["./images//Acheivements/sivaneshnss.png"],
  },
  {
    content: `Sri Sairam College of Engineering and Ministry of Culture, IGCAR,
      Ariviyal Sangam, Vigyana Bharathi(VIBHA) jointly organized an Essay
      Writing Competition on Sep 23, 2022, in which our college students
      SIVANESH K S from M.Tech CSE won the Competition.He got a
      opportunity to participate in the International Conference on SIR
      C.V.RAMAN, State level Quiz Competition at DAE Township, Kalpakkam,
      and an Industrial visit to MAPS(Madras Atomic Power Station) -
      IGCAR(Indira Gandhi Centre For Atomic Research) on November 5 and
      6.He also received the felicitation Certificate and a momento
      representing the Institution.`,
    images: ["./images/Acheivements/atomicpowerstation.png"],
  },
  {
    content: ` The Department of Physical Education organized SEETHARAMAN AND
      LAKSHMIAMMAL MEMORIAL TROPHY, An State Level Inter Engineering
      Tournament on 29.09.2022 & 30.09.2022. M.tech CSE Department student
      KANISH K won 4th place in the Badminton-Men event. He was awarded
      with a cash prize and a felicitation certificate.`,
    images: ["./images/Acheivements/kanish_badminton.jpg"],
  },
  {
    content: ` The Department of Computer Science and Engineering in association
      with Skillkora Labs conducted a SKILLFEST'22 -An Ideathon and a
      24-hr Hackathon Event. The students of the department of M.tech CSE
      SIVANESH K S, SHRIVANI R, and SHAHANA DEVI V as team-TECHVERSE won
      5th place in the Ideathon event. These students were offered a
      4-week internship with Skillkora Labs and a 50% fee waiver for AI/ML
      Course.`,
    images: ["./images/Acheivements/skillfest.png"],
  },
  {
    content: `IEEE student branch conducted an event of BID and BUZZ in the IEEE
      Day 2022 Carnival on 11th October 2022. Our department students
      JAYASHREE S and JANANI GOWTHAM as a team won first place receiving a
      cash award and felicitation certificate.`,
    images: ["./images/Acheivements/bid&buzz.png"],
  },
  {
    content: ` Sri Sai Ram Institute of Technology, Department of Computer Science
      and Engineering conducted a national level symposium - NUTPAM 22.
      Our students Muthu Aanand SU and Kamalesh Kumar Saravanan of 2nd
      year M.Tech CSE won 2nd place in the web development contest
      Calypso's Sculpt and were awarded a merit certificate along with a
      cash prize.`,
    images: ["./images/Acheivements/sitsympo.jpg"],
  },
  {
    content: `  Anna University Zone Tournaments 2022-23 was held at Sri Sairam
      Engineering College in which students of several institutions took
      part in various events. Our Department student KANISH K won 2nd
      place in the Badminton-Men event which was held on 16.11.2022 &
      17.11.2022. He was awarded a prestigious trophy and a felicitation
      certificate.`,
    images: ["./images//Acheivements/kanishbadmiton.png"],
  },
  {
    content: `The UBA - Unnat Bharat Abhiyan of the Sairam institution celebrated
      the UBA Day'22 AGNII on 18/11/2022.Our students Yogitha M, Swathika
      S and Yuvashri A K M of M.Tech CSE department participated in the
      event NIRMANI (MODEL PRESENTATION) as a team and won the 2nd prize
      in that Event. They were awarded with the merit certificate and cash
      prize of rupees 1000/-`,
    images: ["./images/Acheivements/ubaday.jpg"],
  },
  {
    content: `Jeppiaar Institute of Technology, Department of Computer Science and
      Engineering organized TECHISETZ'22 on 26th November 2022. Our
      Department student SURYA A has secured 2nd place in both Individual
      Technical events CODEBOT and DEBUGGING receiving a cash award and
      felicitation certificate. He has also secured 2nd place in a
      non-technical team event BIOSCOPE receiving a gorgeous momento and a
      felicitation certificate.`,
    images: ["./images/Acheivements/jeppiarinsititute.jpg"],
  },
  {
    content: ` SSN COLLEGE OF ENGINEERING and SHIV NADAR UNIVERSITY, CHENNAI
      organised INVENTE'22 - A National Level Technical Fest On 3RD and
      4TH of NOVEMBER 2022. This Technical Festival comprises 64
      technical, 14 non-technical events, and 3 major workshops on
      state-of-the-art domains. Students from the department of SM.Tech
      CSE participated actively and won the competition. Our 2nd year
      department students YOGITHA M, SWATHIKA S, YUVASHRI A K M as a team
      has placed 2nd in the Paper Presentation Event.`,
    images: ["./images/Acheivements/ssninvente.jpg"],
  },
  {
    content: `Warm congratulations to ABHINESH S of Department M.Tech CSE - II
      year has been awarded the first prize in the NAAN MUDHAZHVAN - TN
      Skills 2023 for the National Level Hackathon on 05 May 2023 at Anna
      Centenary Library.`,
    images: ["./images/Acheivements/naanmudhalvan.png"],
  },
  {
    content: `Happy to inform that Muthu Annand SU, Guru Sanjay RK and Kamalesh
      Kumar Saravanan of Dedpartment-M.Tech CSE has won the second prize
      in Sairam SDG-solveathon 2.0 under goal number 2 - ”Zero Hunger”
      with a cash prize of ₹750 for their project titled “E-Public
      Distribution System” guided by Dr.M Nithya.`,
    images: ["./images/Acheivements/Solveathon/solveathonepds.png"],
  },
  {
    content: `Best wishes to Vaishnavi S, Preethi S and Niveditha S of
      Dedpartment-M.Tech CSE who has won the second prize in Sairam
      SDG-solveathon 2.0 under goal number 6 - ”Clean water and
      sanitation” with a cash prize of ₹750 for their project titled
      “Solar power automated monitoring agriculture system” guided by Dr.M
      Nithya.`,
    images: ["./images/Acheivements/Solveathon/solveathonpreethi.png"],
  },
  {
    content: `Congratulations to Swathika S, Yuvashri AKM and yogitha M of
      Dedpartment-M.Tech CSE has won the first prize in Sairam
      SDG-solveathon 2.0 under goal number 6 - ”Clean water and
      sanitation” with a cash prize of ₹1000 for their project titled
      “Designing an artificial based robot to clean the clog and clog
      detection” guided by Mrs.Shiny A.`,
    images: ["./images/Acheivements/Solveathon/solveathonswatikayuvashree.png"],
  },
  {
    content: `A follow-up event of Sairam SDG-Ideathon 2.0 which was an initiative
        of an Engineering & Technology campus to generate mass
        Entrepreneurship was conducted on 20.04.2023. Promoting “One Student
        One Startup” was the primary goal of this event. Hearty
        congratulations to Sivanesh KS, Sri Charith AG and Ramanathan K of
        Department - M.Tech CSE who has won the “Overall Championship” of
        Sairam Institutions in the Sairam SDG-Solveathon 2.0 conducted on
        20.04.2023&21.04.2023 for their project titled “IOT powered vehicle
        maintenance and tracking system” guided by Mrs.Nandhini Devi S with
        a cash prize of ₹2500.`,
    images: ["./images/Acheivements/Solveathon/solveathonchamps.png"],
  },
  {
    content: `Hearty congratulations to R.RAKESH (TL), AFRA MARIYAM.A, ABHIENAYA
      SRI.S and THRISALA.K of Department - M.Tech CSE (2022-2027 Batch)
      who has won the “Overall Championship” of Sairam Institutions in the
      Sairam SDG-Ideathon 3.0 conducted on 01.06.2023 & 02.06.2023 for
      their project titled “Biotic Progression of Turbid water using
      Nirmali Seeds” under SDG Goal-6.`,
    images: ["./images/Acheivements/Solveathon/solveathonjunios.png"],
  },
  {
    content: ` Hearty congratulations to R.RAKESH (TL),ADITHYA.S.J,ALDOUS ROY
      &SHREYA of Department -M.Tech-CSE(2022-2027 Batch) who has won the
      2nd prize of Sairam Institutions in the Sairam SDG-Ideathon 3.0
      conducted on 01.06.2023 & 02.06.2023 for their project titled
      “Eradication of Unwanted plants from Water Bodies” under SDG Goal
      14.`,
    images: ["./images/Acheivements/Solveathon/solveathonfirstyears.png"],
  },
  {
    content: `Hearty congratulations to DEVADARSHAN.R,PARTHIBAN.J,GEETHA
      RASHNI.K.S SARANYA.S of Department -M.Tech-CSE(2022-2027 Batch) who
      has won the First prize of Sairam Institutions in the Sairam
      SDG-Ideathon 3.0 conducted on 01.06.2023 & 02.06.2023 for their
      project titled “Beg to Invest” under SDG Goal 1.`,
    images: ["./images/Acheivements/Solveathon/solveathonfirstyear.png"],
  },
  {
    content: ` Muthu Aanand. SU and Kamalesh Kumar Saravanan, got an opportunity at
      the Sairam Techno Incubation Foundation Centre on the challenging
      task of developing a merchandise website for a business named
      'Madrasda'. Utilizing the powerful capabilities of Next.js for the
      frontend and Spring Boot for the backend, they created an efficient,
      user-friendly platform to showcase the brand's offerings. Deploying
      the site on Google Cloud further augmented its scalability and
      performance. This experience not only honed my technical skills but
      also enriched my understanding of seamless digital product
      development. Through this project, they learned the importance of
      integrating various technologies for a cohesive outcome and gained
      insights into cloud deployment and its advantages for business
      scalability`,
    images: ["./images/Acheivements/madrasda.png"],
  },
  {
    content: `SIVANESH K S, MOHAMMED RIZWAN M, PRASANNA KUMAR L of II year MTech
      CSE(2021-2026 batch) won the first prize in the TECH TALKS (Paper
      Presentation) event with a Cash award of Rs. 2000/- in the PRANAV
      2K23 - National level Technical Symposium hosted by the Department
      of Electronics and Communication Engineering & ELECSA of Meenakshi
      Sundararajan Engineering College on 23.03.2023.`,
    images: ["./images/Acheivements/techtalks.png"],
  },
  {
    content: `  K Kanish, an outstanding participant from the Department of MTech CSE, emerged victorious in the
      district-level badminton competition held in Urapakkam, Chennai on August 26, 2023. Through their skillful
      performance, they secured the championship title along with a substantial three-foot trophy.`,
    images: ["./images/Acheivements/kanishwinner.jpeg"],
  },
  {
    content: ` Kanish K from the Department of MTech CSE demonstrated remarkable prowess at the Villupuram District Badminton
      Competition. This district-level event, held on July 30, 2023, witnessed Kanish K's outstanding skills leading
      to a victorious outcome. Their exceptional performance secured both the prestigious 15,000 cash prize and the
      coveted rolling trophy.`,
    images: ["./images/Acheivements/kanishminister2.jpeg"],
  },
  {
    content: `AADITHYA S J and LOKESH C M of MTech CSE have won First prize in Stupid Code 2.0 conducted by Code club on
      23rd August 2023. The event consist of 2 preliminary rounds and a final quiz round`,
    images: ["./images/Acheivements/StupidCode2.jpeg"],
  },
  {
    content: `Ruthi Shankari S , Pavithra R and Vaishali S presented their project on Stress Relief And Anxiety using AI in
      the IEEE Yesist which took place in Egypt on September 2 2023`,
    images: ["./images//Acheivements/yesistfinal.jpeg"],
  },
  {
    content: `Vaishnavi S of M.Tech CSE Department won the first prize in the Paper Presentation Event conducted by Jarvis
      2K23, Department of Mechatronics Engineering at Chennai Institute Of Technology.`,
    images: ["./images//Acheivements/Vaishanavipaper.jpeg"],
  },
  {
    content: ` Rakesh,AFRA MARIYAM A and ABHIENAYA SRI S from M.Tech cse Department of Sri Sairam Engineering College Won
      First Prize in Ideathon Event of ARCANE Symposium organised by Crescent Institute of Science and Technology on
      13.9.23`,
    images: ["./images//Acheivements/RakeshCrescent.jpeg"],
  },
  {
    content: `Shakthi Akshata. G of Mtech CSE department First year of Sri Sairam Engineering College
      Has won prize in Chess Anna University Zonal Competition`,
    images: ["./images/Acheivements/mtechchess2.jpeg"],
  },
  {
    content: `SURYA A, SIVANESH K S of Mtech CSE and NAREN KUMAR S S of CSE departments won the first prize with cash award
      of Rs 3500 in the INNOVENTURE Event conducted by TECHNOVIT, at VIT CHENNAI.`,
    images: ["./images/Acheivements/SivaneshVit.jpeg"],
  },
  {
    content: ` Kanish of Department of Mtech CSE won the runner up trophy in the badminton Tournament held in SRM Valliamai
      College of Engineering on 6.10.2023`,
    images: ["./images/Acheivements/KanishBadminton.jpeg"],
  },
  {
    content: `SURYA A, SIVANESH K S of Mtech CSE, NAREN KUMAR S S of CSE and VIKASH K V of EIE departments won the first
    prize with cash award of Rs 3000 in the TECHNO THINK, ALTRUIX Event conducted by Department of AIDS at SRM
    VALLIAMMAI ENGINEERING COLLEGE on 7.10.2023`,
    images: ["./images/Acheivements/SivaneshSRM.jpeg"],
  },
  {
    content: `Mr. Sivanesh K S, Mr. Ramanathan K, and Mr. Sri Charith A G from the department of M.Tech CSE (2021-2026 batch) who have secured the "first prize" in INNOVATHON 2.0 conducted on 21.03.2024 at Sairam Institutions in the Sairam SDG-INNOVATHON. Their project , "IoT Powered Vehicle Maintenance And Tracking System," presented under the SDG Goal-9, showcases their innovative prowess and dedication to addressing real-world challenges. 
    `,
    images: ["./images/Acheivements/solvesivanesh.png"]
  },{
    content: `Mr. Muthu Anand SU, Mr. Kamalesh Kumar Saravanan, and Mr. Guru Sanjay R K from the department of M.Tech CSE (2021-2026 batch) who have secured the "first prize" in INNOVATHON 2.0 conducted on 21.03.2024 at Sairam Institutions in the Sairam SDG-INNOVATHON. Their project titled "E Public Distribution system" under the SDG Goal -2 reflects their innovative spirit and dedication to addressing  crucial societal issues.  
    `,
    images: ["./images/Acheivements/muthuinnovathon.png"]
  },{
    content: `Warmest congratulations to Mr. Surya A, Mr. Sundaram S, and Mr. Sriram G from the department of M.Tech CSE (2021-2026 batch) for securing the "third prize" in INNOVATHON 2.0 held on 21.03.2024 at Sairam Institutions in the Sairam SDG-INNOVATHON. Their project, "Health Insurance Service Portal," presented under the SDG Goal -1, reflects their innovative approach and commitment to addressing critical societal challenges.
    `,
    images: ["./images/Acheivements/innovathonsurya.png"]
  },{
    content: `Extremely happy to share with you all that our students Mr.R.Devadarshan, Ms.KS.Geetha Rashni, Ms.S.Saranya, Mr.J.Parthiban of M.Tech cse won the “Second place” in the Solveathon3.0 held on 29 April 2024 and 30 April 2024 in the goal 1 - NO POVERTY on the project "B2I-NO POVERTY USING BLOCKCHAIN" of accelerating a Beggar Into An Investor. 
    `,
    images: ["./images/Acheivements/devasolveathon.jpg"]
  },{
    content: `Happy to share that our students Ms.G Hasumathi Lakshmi, Ms.B.Lakshitha, Ms.M.Divya Sri, Ms.V.Divyadarshini from the department of M.Tech CSE (2022-2027 batch )  has secured “second place” in SOLVEATHON 3.0 conducted on 29.04.2024 of Sairam Institutions in the Sairam SDG-SOLVATHON by presenting their project titled “Digital Water Treatment Process Designer” under the SDG Goal -6.

    `,
    images: ["./images/Acheivements/solveathonhasumathi.jpg"]
  },{
    content: `Khushi Mili Mishra, Koushik Babu M, and Sai Charan U from the department of M.Tech CSE (2022-2027 batch) have secured the "second prize" on Goal 7 in SOLVEATHON 3.0 conducted on 29.04.2024 at Sairam Institutions in the Sairam SDG-SOLVATHON. Their project titled "Solar Glider- A Drone Based Solar Panel Cleaning Technology" enhances the efficiency and performance of solar panel systems by cleaning them using Drones.
 
    `,
    images: ["./images/Acheivements/kushisolveathon.jpg"]
  },{
    content: `Mr.S.M.Selva Vignesh(TL),Mr.S.J.Aadithya,S. Mr.Sairaghav, Mr.C.M.Lokesh from the department of M.Tech CSE (2022-2027 batch)  has secured second prize in SOLVEATHON 3.0 conducted on 29.04.2024 at Sairam Institutions in the Sairam SDG-SOLVEATHON by presenting their project titled “ADVANCE TROOPS TRAINING USING VIRTUAL REALITY” under the SDG Goal -16 
    `,
    images: ["./images/Acheivements/selvasolveathon.jpg "]
  },{
    content: `Aldous Roy, Janani VS and Vetriselvi M form the department of M.Tech CSE have secured “Third Prize” on Goal 17 in SDG SOLVATHON 3.0 held on Sairam Institution by presenting the project title “ENHANCING VISUAL CLARITY IN HAZING AND SMOKY ENVIRONMENT USING DARK CHANNEL PRIOR” under SDG Goal-17.
    `,
    images: ["./images/Acheivements/aldoussolveathon.jpg "]
  },{
    content: `Ms. Sivasakthi A of second year M.tech cse has won the first prize in MatMac event conducted by a national level technical symposium silicon 2k24 held during 3rd and 4th april organized by IEEE student branch  at Sathyabama institute of science and technology.
    `,
    images: ["./images/Acheivements/sivasakthi.png "]
  },{
    content: `Mr. Viknesh SR , Mr. Vigneshwaran R, Mr. Nikesh B and Mr. Vickna Sai kumar of 2nd year M.Tech CSE has won the first prize  in “INNOVATION QUEST” on spot paper presentation which is organized by SRM Institute of Science and Technology on 12.4.24.
    `,
    images: ["./images/Acheivements/vikneshsrm.png "]
  },{
    content: `Ms.Vaishnavi S and Ms.Preethi S won the 1st Runner-up  in Paper Presentation which was held at Crescent Institute of Science and Technology on 9th May of 2023. 
    `,
    images: ["./images/Acheivements/vaishnavipaper.png "]
  },{
    content: `Mr. Sri Charith A G (III Year M. Tech CSE) , Ms. Anurega (III Year IT), Mr. Arvind Adithya (III Year IT) and Mr.Dhanush (III Year CSE) has won the 2nd Place in IEEE INDIA COUNCIL HACKATHON which was held at Manipal University, Jaipur on 21st and 22nd October 2023
    `,
    images: ["./images/Acheivements/charithhackathon.jpg "]
  },{
    content: `
    Mr. Deepak P (II Year CSE), Ms. Indhumathi S (III Year M. Tech CSE) , Ms. Nivetha S (II Year ECE) and Ms. Vaishali S (III Year M. Tech CSE) won the 2nd Place in IEEE INDIA COUNCIL HACKATHON which was held at Manipal University, Jaipur on 21st and 22nd October 2023    
    `,
    images: ["./images/Acheivements/vaishalihackathon.jpg "]
  },{
    content: `Ms.Pavithra Ramakrishnan, Ms. Vaishnavi S from M.Tech CSE department and Mr.Vishaal S from EEE department  from the 3rd year, achieved 1st prize in the National Level Technical Symposium, PINNACLE’24 which is conducted by the Department of IT – SRM Easwari Engineering College on 23rd February of 2024. 
    `,
    images: ["./images/Acheivements/pinnacle.jpg "]
  },{
    content: `Ms.Vaishnavi S, 3rd Year M.Tech Integrated CSE , has been bestowed with the prestigious IEEE BEST STUDENT VOLUNTEER AWARD for her exceptional dedication and unwavering commitment to SAIRAM IEEE throughout the year 2023.

    `,
    images: ["./images/Acheivements/vaishnaviIee.png "]
  },
  {
    content: `A state level symposium event ELEXPIEG held on 20th March 2024 by Electrical and Electronics Engineering & Electronics and Communication Engineering on behalf of MNM Jain College of Engineering College, Three students of Sri Sairam Engineering College from the M.Tech CSE department namely Mr. S J Aadithya, Mr. S Sairaghav, Mr. S M Selva Vignesh won the second prize  in the event Paper Feast with a cash prize.
    `,
    images: ["./images/Acheivements/elexpieg.jpg "]
  },
  {
    content: `
    Our III year MTech CSE student, Mr. Mohammed Rizwan M received First place in the paper presentation event organized by Anand Institute of Higher Technology on 23rd March 2024.
    `,
    images: ["./images/Acheivements/rizwanpaper.png"]
  },{
    content: `
    Mr. Siva Ganeshan K and Mr. Aravinddakshan S (III Year M. Tech CSE) has won the 1st Place in INKOGNITZ Paper Presentation event which was held at Jeppiaar Engineering College, Chennai on 22nd March 2024.
    `,
    images: ["./images/Acheivements/sivaganesh.png "]
  },{
    content: `
    Ms. Sri Durgadevi S (III Year M. Tech CSE) , Mr. Kishore M.A, Ms. Bharathi K, Ms. Krithika A (III Year IT) won the 2nd Place in REVOITZ 2.0 Paper Presentation event which was held at Jeppiaar Engineering College, Chennai on 22nd March 2024.
    `,
    images: ["./images/Acheivements/revoitz.png "]
  },{
    content: `Ms. Vaishnavi S and Ms. Pavithra R from the 3rd Year M.Tech CSE Department, along with Mr. Vishaal S and Ms. Abinaya R from the 3rd Year EEE Department has won the 1st Place in Project Presentation Event conducted by the department of EEE – HINDUSTAN INSTITUTE OF TECHNOLOGY AND SCIENCE on 6th april 2024.
    `,
    images: ["./images/Acheivements/pavihtrapresentation.jpg "]
  },{
    content: `
    Ms. Yuvashree RH, Ms. Khushi Mili Mishra, Mr. Viknesh SR and Mr. Raveen T won cash awards of Rs 1000, Rs 750, Rs 500 and Rs 250 respectively for the BIS Standards Writing Competition on the topic “Potable Water Bottle”.
    `,
    images: ["./images/Acheivements/portablewater.jpg "]
  },{
    content: `Ms. N Nivetha Bharathy and Ms. Yuvashree RH won the first (Rs 1000) and the second (750) places in the Overall BIS Standards Writing Competition on the topic “Sticker Bindi”.
    `,
    images: ["./images/Acheivements/stickerbindhi.jpg "]
  },{
    content: `Mr.Deva Darshan R and his colleagues  Mr.Parthiban J, Ms Geetha Rashni KS, Mr Gopiram R and Mr. Dinesh Karthik from M.Tech CSE have established a startup company called Velvet Vistaa Designs pvt ltd on March 30, 2024, to provide services that include software design, UI UX design, graphic design, animation, and so on.
    `,
    images: ["./images/Acheivements/velvetvistaa.jpg "]
  },
  {
    content: `IEEE FUND,Team AVANT-GARDE, comprising M.Tech CSE students from IEEE SEC SMC SBC, has secured funding through EPICS in IEEE for their groundbreaking project titled "Hyaciguard - Restoring Water Ecosystem Innovatively." Led by the astute leadership of Mr.RAKESH R and under the expert guidance of Principal Investigator Dr. M. NITHYA, HOD of M.Tech CSE, the team stands at the forefront of addressing critical environmental concerns. Comprised of dedicated individuals including Ms.SHRIVANI R, Mr.SIVANESH KS, and Mr. SURYA A, all in their third year of M.Tech CSE, the team showcases exemplary commitment and ingenuity in their pursuit of restoring water ecosystems.
    `,
    images: ["./images/Acheivements/avantgarde.png"]
  },{
    content: `Mr. Kamalesh Kumar Saravanan and Mr. Muthu Anand SU both received a stipend of Rs 12000 and Rs 15000 respectively for creating their work on an E-Commerce Website for selling Merchandise.
    `,
    images: ["./images/Acheivements/madrasdafund.png"]
  },{
    content: `Car Simulator, Coin Collector Using Leap Sensor
    Mr. SM Selva Vignesh, Mr. SJ Aadithya and Mr. S Sairaghav were awarded with a cash award of Rs 2000 each for their projects namely, Coin Collector Car Using Leap Sensor and Car Simulation.
    `,
    images: ["./images/Acheivements/carsimulator.jpeg"]
  },{
    content: `We're thrilled to announce that our talented students - Ms.Yogitha.M,Ms. Swathika.S, Ms.Yuvashri.A.K.M from the Department of M.Tech CSE (2021-2026 batch) have clinched a "SEED FUND" of 25,000 for their groundbreaking project "AI-SMART SEWER MAINTENANCE SYSTEM" .
    This remarkable achievement was accomplished at the prestigious RUSA 2.0 STARTUP CAFE event held on 27.04.2024, organized by the Center for Entrepreneurship Development at Anna University, Guindy.
    `,
    images: ["./images/Acheivements/seedfund.jpg"]
  },
];

const eventData = [
  {
    title: "Virtusa MOU",
    content:
      "Successfully signed MOU between MTech CSE Sri Sairam Engineering College and Virtusa for academics and industry collaboration on 21st March 2022. This proud initiative was felicitated by our honorable CEO Shri Sai Prakash along with the Virtusa dignitaries Mr.Raghuveer Subodha -Sr Vice president & Global Head Emerging Technologies,Mr.Narayanan S- Vice President & Technology Head,Ms. Mohanapriya S -Associate Director, Capability & transformation Team,Mr.Krithivasan S- Team Graduate Talent Program(Global University Strategy & Relationship) & Ms.Geetanjali S-Team Graduate Talent Program benefiting the department students with advanced industry based learning, so they can transition into potential candidates with desired skills as expected by industry world.",
    image: "./images/event/VirtusaMou.jpg",
  },
  {
    title: 'Orientation on "ROADMAP FOR ENABLING INDUSTRY READINESS"',
    content: `I'm pleased to share my experience at the "ROADMAP FOR ENABLING
          INDUSTRY READINESS" orientation session offered by Mr. Rajkumar
          Sivasubramanian (Associate Director, Capability & Transformation
          Team) and Ms. Arati Kumari (Executive-HR) from VIRTUSA, Chennai. We
          were given a fantastic presentation on how to get to the point of
          being able to meet industry standards. We were taught about the
          importance of topics like Full Stack Development and programming
          languages like JAVA, as well as their commercial applications. We
          learnt about the firm by taking a mentimeter quiz, which was a lot
          of fun. The duo led the session in the most interactive and
          enjoyable manner imaginable, and they were really educated and
          motivated us to learn more.`,
    image: "./images/event/virtusaposter.jpeg",
  },
  {
    title: "INNERVE - a techstack codeathon - conducted by Virtusa",
    content: `In collaboration with Virtusa, The Department of M.Tech CSE hosted a
          full stack development codeathon for M.Tech CSE students. The
          problem statements were provided by the Virtusa team, and the
          students were divided into five teams of twelve students each. In
          the form of a presentation, the teams are required to examine the
          problem statements and provide use cases and technologies that will
          be employed for the project. Before the deadline, students were
          required to produce a functioning web application. The first review
          meeting was held two days after the problem statements were provided
          by the Virtusa team, which included Mr.Rajkumar Sivasubramanian
          (Associate Director, Capability & Transformation Team) and Ms.Mohana
          Priya (Associate Director, Capability & Transformation Team). They
          conducted the meeting and went over the use-case diagrams for the
          website that the students would build during the codeathon. They
          provided us various technology stack alternatives for constructing
          the website. Students expressed their concerns, and they offered a
          clear, comprehensible response. Students were encouraged to
          continually learn and engage with one another in order to foster
          collaboration and work partnerships. After all, the session was
          really enlightening, and students were eager to get started on the
          website's implementation`,
    image: "./images/event/Innerveposter.png",
  },
  {
    title: "Inaugration OF Sai Info-Blitz",
    content: `The Inaugural Function was led by Dr.M.Nithya, Head of the
          Department, M.tech CSE who greeted the gathering and hosted the
          inaugural function enthusiastically. The upstanding principal of Sri
          Sairam Engineering College, Dr.K Porkumaran felicitated the SAI
          INFOBLITZ association and illuminated the students through his
          enlightening speech. He described the three principles 'Knowledge,
          Skill, Attitude' which would strengthen the quality benevolence of
          the students. He shared his experience about the 'Naturally
          Inspiring Algorithms' such as the 'Fishing Algorithm' which he had
          used in the lung problem. He motivated the students by citing, "
          You're not a student, You're a scholar. " Finally, he encouraged the
          students to explore unexplored areas. Eventually, We had our Guest
          of Honour Mr.Srinath Swaminathan who has more than 13 years of
          Industrial Experience and currently working as a Devops Senior
          Manager, Natwest Group (Bank). He threw his energetic and
          power-packed discourse to the gathering. He inspired the students by
          citing, " Knowledge grows when it is shared." He remembered his
          nostalgic memories with the students. His session on the topic
          'Identity and Information security management' was very informative
          and enlightening. He explained the basic concepts of cybersecurity
          and "jargons" that one should be aware of. He also explained the
          flaws present in the existing systems and how we must oversee them.`,
    image: "./images/event/InfoBlitz.png",
  },
  {
    title: "Innovatia 1.0 - Techfest",
    content: `On behalf of IEEE-System Man and Cybernetics society & in
          association with SAI INFOBLITZ , the department of M.Tech CSE
          Organized the event TechFest 2022- INNOVATIA 1.0 in Beta hall on
          29.12.2022 at 9.15 a.m. with grand success. The chief guest was Mr.
          Karthiq Ganesan,from Hcl tech,Associate General manager.Dr.M.Nithya
          gave the welcome address for this event. Mr.Karthiq Ganesan gave his
          speech on the latest technology in IT industry and clarified the
          students doubts on job placements.Also he had shared ideas on data
          science field along with their communication skills to get improved.
          There were totally 86 attendees in this event, out of which 25
          students were from various other reputed colleges.Students best
          performer awards were given to the students after filing nominations
          .Both technical like Cipher Nation , Startup Smackdown and
          non-technical events like Captura,Superhero Shippuden,Music Fiesta
          were conducted and the student winners were provided with
          certificates and cash prize.With vote of thank ,the event gathering
          ended at 4 pm.`,
    image: "images/event/Innovatiaposter.jpeg",
  },
  {
    title: "SPEAK LIVE - TAKING YOUR SKILLS TO THE NEXT LEVEL",
    content: `The department of M.Tech CSE in association with IEEE SMC conducted an event to inculcate leadership skills on 1st March 2023 through Google meet. In this event, Our Honourable Chief Guest Mrs. JAYA BABU, an esteemed leadership skills trainer and people leader from FORD IT., provided valuable insights on Skill Development.`,
    image: "./images/event/speak-live.png",
  },
  {
    title: "ELEVATE -ONE STUDENT STARTUP:",
    content: `The department of M.Tech CSE in association with IEEE SMC conducted an event on 2nd June 2023 to inculcate the idea about startup. Mr.K.J.Naveen  the Managing Director of Elitez Recruitment Services Pvt Ltd (Arient Solutions), aimed to provide Empowering Learning opportunities for students with a strong entrepreneurial vision.`,
    image: "./images/event/elevate.png",
  },
  {
    title: "BRIDGING GENERATION TECH TALK 1.0",
    content: `The department of M.Tech CSE in association with IEEE SMC conducted an event on information security on 28th March 2023. Our respected chief guest Dr.Saravanan Chandran shared his knowledge about current threats and trends in information security`,
    image: "./images/event/bridging-gap.png",
  },
  {
    title: "IGNITING ENTREPRENEURIAL SKILLS",
    content: `The department of M.Tech CSE in association with IEEE SMC conducted an event ON 23rd June 2023 at beta hall to give insights about entrepreneurship. Our chief guest Ms.Jaya Babu shared her knowledge about entrepreneurship and the real time industrial experience.`,
    image: "./images/event/jaya-babu-program.png",
  },
  {
    title: "ORIENTATION PROGRAMME",
    content: `The Department of MTech CSE conducted an Orientation Programme for 2nd Year students (2022-2027)on 17/08/2023.`,
    image: "./images/event/orientation-2023.png",
  },
  {
    title: "WEBINAR PROGRAMME ON JEE FRAMEWORK",
    content: `The department of M.Tech CSE in association with IEEE SMC conducted a two day webinar program on JEE framework headed by Dr.P.Kavitha Rani and Dr. A Pushpalatha  who spoke about about JEE framework topics and hand on sessions.`,
    image: "./images/event/jee-program.png",
  },
  {
    title: "SKILLRACK AWARENESS",
    content: `The department of M.Tech CSE in association with IEEE SMC conducted an event on 13th September 2023. The seniors  Kamalesh Kumar , Muthu Anand Karthikeyan and Ruthi Shankari, of the department shared their knowledge about how to use skillrack platform proficiently to get a better coding knowledge.`,
    image: "./images/event/skillrack-2023.png",
  },
  {
    title: "INNOVATIA 2.0 INNAUGRATION",
    content: `The association inauguration of  the department of M.Tech CSE "SAI INFLOBLITZ" on October 4 2023 from 1:30 pm onwards at Beta Hall. We are honored to have Sai Prasanna K, Cyber security operation Head,BFSI & Gvt sector as our esteemed chief guest.`,
    image: "./images/event/innovatia2-innaugration.png",
  },
  {
    title: "WRITE TO WIN",
    content: `The department of M.Tech CSE in association with IEEE SMC conducted an event on 5th October to give insights about how to submit the research paper. Our respected Chief guest Dr.B.Vijaya Ramanath ,Hod of department of Mechanical Engineering shared his knowledge about how to write the research paper effectively and it's importance`,
    image: "./images/event/write-to-win.png",
  },
  {
    title: "ART OF WRITING",
    content: `The department of M.Tech CSE and cyber security in association with IEEE SMC conducted an event on 20 November 2023 about how to write a thesis. Dr.B Bharathi gave her insights to all the staff about the methods to write a thesis.`,
    image: "./images/event/art-of-writing.png",
  },
  {
    title: "INNERVE 2.0",
    content: `The department of M.Tech CSE in association with IEEE SMC society and powered by virtusa conducted a codeathon event on 2nd November 2023 . The tech stack codeathon event was conducted for students of batch (2021-2026) headed by the chief guests Mr.Rajkumar Sivasubramanian and Mrs.Mohana Priya S.`,
    image: "./images/event/innerve2.png",
  },
  {
    title: "REQUIRED TO PRODUCT - HANDS ON",
    content: `The Department of M.Tech CSE in association with IEEE SMC conducted an event on 20th october 2023 to give insights about full stack development and JEE framework. Our respected chief guest Dr.Suganya shared her knowledge about the framework and other relevant details.`,
    image: "./images/event/product-hands-on.png",
  },
];

const awardData = [
  {
    title: "BEST EMERGING DEPARTMENT-M.TECH(CSE)",
    content: `“Top Emerging Department” was a significant milestone for the M.Tech Computer Science and Engineering (CSE) department. This remarkable accomplishment underscores the department's unwavering commitment, collective effort, and hard work that led to this esteemed honor. The M.Tech CSE department extends its sincere appreciation to the Chairman and Principal, whose profound wisdom and support were pivotal in shaping the department's journey toward excellence. Their visionary leadership served as a guiding beacon, enabling the department to attain this remarkable recognition. The dedicated faculty and staff within the management team have played indispensable roles in achieving this significant milestone. Their ongoing support, guidance, and collaboration served as the strong foundation upon which success was built. And, of course, the extraordinary dedication and hard work exhibited by the M.Tech CSE students were the driving force behind this award. Their infectious energy, innovative thinking, and enthusiasm are the lifeblood of the department. The path to becoming the 'Best Emerging Department' was challenging, characterized by relentless dedication, passion, and an unceasing pursuit of academic excellence. Nevertheless, it is precisely this journey that adds deeper meaning and significance to this achievement.`,
    image: "./images/awards/best-department-award.png",
  },
  {
    title: "IEEE SMC GLOBAL AWARD",
    content: `The Department of M.Tech CSE at SMC Society achieved a groundbreaking milestone by becoming the first society in India to gain international recognition from the IEEE forum. The society's outstanding contributions were acknowledged when it applied for the prestigious IEEE Outstanding SMCS Student Branch Chapter award. In a testament to the society's dedication and accomplishments, our department emerged successfully among numerous participants from various countries and societies.During the application process, the society diligently submitted all relevant documents highlighting both social and technical events organized by the M.Tech CSE SMC Society. The culmination of these efforts resulted in a significant honor—the 'IEEE Outstanding SMCS Student Branch Chapter Award 2023. The recognition brought not only prestige but tangible support as well. Our department was awarded a fund of $500, a symbolic memento, and a certificate acknowledging the hard work and impactful activities of the society. This acknowledgment from the IEEE forum not only reflects the excellence of our department but also serves as an inspiration for continued innovation and dedication to the advancement of knowledge in the field of Computer Science and Engineering. This prestigious accolade was bestowed upon our department at the IEEE SMC Conference held in Honolulu, Hawaii, USA.`,
    image: "./images/awards/ieee-award.jpg",
  },
  {
    title: "IEEE MADRAS SECTION HONORS DR.M.NITHYA",
    content: `On the auspicious 14th of October, amid the vibrant celebration of IEEE Day at the College of Engineering Guindy, Anna University, The Institute of Electrical and Electronics Engineers (IEEE) Madras Section bestowed a distinguished honor upon Dr. M. Nithya. Recognizing her fervent dedication and noteworthy accomplishments, Dr. Nithya was acknowledged for her outstanding professional achievements within the IEEE community during the period of 2022-2023. The accolade, a testament to her unwavering commitment to the field, was presented by the esteemed personalities Dr. K. Porkumaran, Chairman of IEEE Madras Section, and Dr. R. Hariprakash, Secretary of IEEE Madras Section. Dr. Nithya's contributions, marked by enthusiasm and excellence, resonated with the core values of IEEE, an organization renowned for advancing technology for the benefit of humanity.Dr. M. Nithya's recognition on this notable occasion served as an inspiration, inspiring aspiring engineers and researchers to strive for excellence within the dynamic and ever-evolving landscape of electrical and electronic engineering. The IEEE Day celebration became a memorable milestone, underscoring the significance of dedication and achievement in shaping the future of technological advancements.`,
    image: "./images/awards/ieee-hod-award.png",
  },
  {
    title:
      "R10 HUMANITARIAN SUSTAINABLE PROJECTS & VOLUNTEER TRAINING SUPPORT FUND-2023",
    content: `IEEE Sri Sai Ram Engineering College, represented by its System, Man, and Cybernetics (SMC) chapter under the IEEE Madras Section, is honored to announce that it has been chosen to receive a support fund of $210 from the prestigious IEEE R10 Humanitarian Sustainable Project & Volunteer Training Support Fund 2023. This financial backing is a testament to the significance and promise of the chapter's innovative project titled "From Trash to Treasure: Uniting Waste Management and Mushroom Cultivation for a Sustainable Society." The project's focal point lies in addressing critical issues surrounding waste management and environmental sustainability. By synergizing waste management practices with mushroom cultivation, the initiative aims to create a symbiotic relationship that not only reduces environmental impact but also generates valuable resources. This forward-thinking approach aligns with the IEEE R10 Humanitarian Sustainable Project & Volunteer Training Support Fund's mission to support projects with tangible, positive effects on communities and the environment.The recognition of this project underscores its potential to contribute significantly to building a sustainable society. The financial support provided by IEEE R10 will empower the SMC28 chapter to further develop and implement their innovative solution. As the project unfolds, it is anticipated to serve as a model for other communities, showcasing the positive outcomes that can arise from holistic, environmentally conscious initiatives.`,
    image: "./images/awards/ieee-r10-hta.jpg",
  },
  {
    title: "IEEE SMC SOCIETY  SUBSIDY AMOUNT -$547.03",
    content: `The IEEE SMC Society of the M.Tech CSE department has secured financial support totaling $547.03 USD. This approval, attributed to the efforts of VP for Finance, Dr. Tang, and Treasurer, Dr. Wan, underscores their pivotal roles as committee members within the IEEE society. Their instrumental contribution has paved the way for the SMC Society Chennai branch to organize a spectrum of events, spanning both social and technical domains. This funding signifies a commitment to fostering a dynamic environment for the exchange of knowledge and ideas within the society. With the financial backing in place, the SMC Society is well-positioned to enrich the academic and professional experience of its members, fostering a vibrant community dedicated to the advancements in Systems, Man, and Cybernetics.`,
    image: "./images/awards/ieee-society-subsidy.png",
  },
];
const socialEvents = [
  {
    title: `Adutha Illaku`,
    content: `Mr.Sabari RL, Mr.Raj kumar R, Mr.Rishi vel A, Mr.Aadhithya SJ and Mr.Selva vignesh SM of Mtech CSE have got an opportunity to attend the ADUTHA ILAKKU event conducted by LMES Academy and pick my career and hiring institutions , presented by Sairam institutions at various locations inside Tamilnadu. The students traveled to various schools located in places like Thiruthuraipoondi, Cuddalore, Villupuram, Dindigul, Madurai to demonstrate various projects related to AR and VR to school students. It was a great learning session where they got an opportunity to interact with various industrial giants including the CEO of GUVI ARUNPRAKASH. They shared their insights about the current trends in education to all the`,
    images:  ["./images/socialEvents/aduthaillaku.png "]
  },
  {
    title: `AIM For Science`,
    content: `Ms.Ruthi Shankari of 3rd year M.Tech CSE and Ms.Lakshitha of 2nd year M.Tech CSE, as magic members of Atal Innovation Mission, have organized an event for IEEE Education Week titled "AIM FOR SCIENCE" for students at the Good Life Center Orphanage on April 13, 2024. 
    `,
    images:  ["./images/socialEvents/aimforscience.png"]
  },{
    title: `Helping Hand To The Community`,
    content: `The M.Tech CSE department, together with all of the students and teachers, came together to provide aid to those afflicted by the Michaung Cyclone. A total of Rs 10,000 was donated by the staff and students, and that fund was used to purchase sheets and towels for the affected individuals in different locations. The bedsheets were distributed among the affected by the students.    
    `,
    images:  ["./images/socialEvents/flood.jpg"]
  },{
    title: `EDUCATION EXPO 2024 AT TRADE CENTER`,
    content: `
    The students of M.Tech CSE Mr. Rishi Vel, Mr. R  Rajkumar, Mr. SJ Aadithya, Mr. SM SelvaVignesh and Mr. Sabari R L  represented our college in the EDUCATION EXPO 2024 conducted at Chennai trade centre on April 3 2024. The students presented projects based on AR and VR attendees . It was a great learning and interactive session, and they got an opportunity to connect with the industrialists, students and other people.
    `,
    images:  ["./images/socialEvents/expo.jpg "]
  },{
    title: `Rags To Riches`,
    content: `The students of M.Tech CSE Mr. R. Devadarshan, Ms.KS.Geetha Rashni, Ms.S.Saranya and Mr.J.Parthiban had done their social work related to their project of converting a Beggar to an Investor. They had a personal conversation and came to know about the problems they face in their lives. They had created a platform for them to overcome these problems. They are developing an app related to these people with the blockchain technology. They got an opportunity to meet people and feel their problems they undergo in day to day life.
    `,
    images:  ["./images/socialEvents/ragstoriches.jpg "]
  },{
    title: `ANNA UNIVERSITY INTERNATIONAL CONFERENCE 2024`,
    content: `The students of department of M.Tech CSE attended the AIIII 2024-ANNA UNIVERSITY INTERNATIONAL CONFERENCE 2024, which focused on "Research Trends in AI and IoT for Infrastructure and Industry". Mr. R L Sabari and Mr. R Rajkumar along with other students gave presentations for the projects on augmented reality and virtual reality over the three-day event. The students had the chance to interact with many industrialists  and present ideas to a variety of industrial professionals and students, which was an amazing experience.
    `,
    images:  ["./images/socialEvents/conference.jpg "]
  },
  {
    title: `SURVEY FOR REAL TIME PROJECTS:
    `,
    content: `M.Tech CSE students SWATHIKA S, YUVASHRI A K M, and YOGITHA M engaged in direct public interaction to gather data for their ongoing project, "Designing an artificial intelligence based robot for clog removal."They went to Zone 8 in Anna Nagar, which had a sizable market and a consumer base.They gathered information about their idea and posed several questions about it.The students engaged in an interactive session where they gained knowledge about the current real-world issue that will guide their project forward.
    `,
    images: ["./images/socialEvents/survey.jpg "]
  }
]

const generateAchievements = () => {
  const sectionElement = document.querySelector("#achievements");
  achievementData.forEach((item, index) => {
    const node = document.createElement("div");
    node.innerHTML = getAchievementComponent(item.content, item.images, index);
    sectionElement.appendChild(node);
  });
};

const generateEvents = () => {
  const sectionElement = document.querySelector("#events");
  eventData.forEach((item, index) => {
    const node = document.createElement("div");
    node.innerHTML = getEventOrAwardComponent(
      item.content,
      item.title,
      item.image,
      index
    );
    sectionElement.appendChild(node);
  });
};
const generateSocials = () => {
  const sectionElement = document.querySelector("#social-events");
  socialEvents.forEach((item, index) => {
    const node = document.createElement("div");
    node.innerHTML = getEventOrAwardComponent(
      item.content,
      item.title,
      item.images,
      index
    );
    sectionElement.appendChild(node);
  });

}
const generateAwards = () => {
  const sectionElement = document.querySelector("#awards");
  awardData.forEach((item, index) => {
    const node = document.createElement("div");
    node.innerHTML = getEventOrAwardComponent(
      item.content,
      item.title,
      item.image,
      index
    );
    sectionElement.appendChild(node);
  });
};

smoothScrolling();
generateAchievements();
generateEvents();
generateAwards();
generateSocials();