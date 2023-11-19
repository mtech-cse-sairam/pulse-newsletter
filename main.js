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
    content:
      "Agilan Amarnath Flight Cadet in NCC from the Depsartment of M tech CSE has achieved a remarkable feat by securing the second position in the prestigious ALL INDIA INTER DIRECTORATE SPORTS SHOOTING COMPETITION. This esteemed event took place in Thiruvananthapuram, Kerala, spanning from July 3rd to July 6th, 2023.",
    images: [
      "./images/Acheivements/NCC/agilan4.png",
      "./images/Acheivements/NCC/agilan1.png",
    ],
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
];

const generateAchievements = () => {
  const sectionElement = document.querySelector("#achievements");
  achievementData.forEach((item, index) => {
    const node = document.createElement("div");
    node.innerHTML = getAchievementComponent(item.content, item.images, index);
    sectionElement.appendChild(node);
  });
};

smoothScrolling();
generateAchievements();
