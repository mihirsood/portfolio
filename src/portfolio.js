//Home Page
const greeting = {
  title: "Mihir Sood",
  logo_name: "MihirSood",
  subTitle:
    "Hi. I am a Final Year Computer Science and Engineering Undergraduate who loves to explore new Technologies and work on Challenging Ideas."
    ,
  resumeLink:
    "https://drive.google.com/file/d/10YNqFf_QIGXVVTyhbjGaG1oke_rnF3iI/view?usp=sharing",
  portfolio_repository: "https://mihirsood.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mihirsood",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mihir-sood-940b4b190/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:mihirsood.11@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/sood_mihir",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
];

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Resposive Website Front End Using HTML, JavaScript and CSS to bring concepts to life",
        "⚡ Familiar with React-Redux and Google's Firebase to help improve the User Experience",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Competitive Programming",
      fileName: "DSA",
      skills: [
        "⚡ Solved 800+ Problems on LeetCode",
        "⚡ 4⭐️ Coder on CodeChef",
        "⚡ 3.5⭐️ Coder / Knight on LeetCode",
        "⚡ Specialist on CodeForces",
      ],
      softwareSkills: [
        {
          skillName: "Codeforces",
          fontAwesomeClassname: "simple-icons:codeforces",
          style: {
            backgroundColor: "#ffffff",
            color: "#1F8ACB",
          },
        },
        {
          skillName: "CodeChef",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "#ffffff",
            color: "#5B4638",
          },
        },
        {
          skillName: "LeetCode",
          fontAwesomeClassname: "simple-icons:leetcode",
          style: {
            backgroundColor: "#ffffff",
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/mihirsood",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#000000",
      },
      profileLink: "https://leetcode.com/mihir_sood/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mihirsood",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Maharaja Agrasen Institute of Technology",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "mait.png",
      alt_name: "Mait Delhi",
      duration: "2018-22(Expected)",
      descriptions: [
        "⚡ I am a Final Year Student with a Maintained CGPA of 8.84 (10)",
        "⚡ My Coursework consists of : Data Structures, Analysis of Algorithms, Object Oriented Programming, Operating Systems, DataBase Management, Software Development",
        "⚡ Apart from this, I have done courses in Front-End Web Development",
      ],
      website_link: "https://cse.mait.ac.in/",
    },
    {
      title: "Apeejay School, Pitampura",
      subtitle: "CBSE Senior Secondary Education (XII)",
      logo_path: "apj.png",
      alt_name: "Apeejay Delhi",
      duration: "2018",
      descriptions: [
        "⚡ I scored an aggregate percentage of 92.4 %",
        "⚡ My Coursework consisted of : English, Mathematics, Chemistry, Physics, Computer Science",
        
      ],
      website_link: "https://www.apeejay.edu/pitampura/",
    },
    {
      title: "Apeejay School, Pitampura",
      subtitle: "CBSE Secondary Education(X)",
      logo_path: "apj.png",
      alt_name: "Apeejay Delhi",
      duration: "2016",
      descriptions: [
        "⚡ I scored a CGPA of 9.6 (10)",
      ],
      website_link: "https://www.apeejay.edu/pitampura/",
    },
  ],
};

const certifications = {
  certifications: [
      {
        title: "CRUX Java by Coding Blocks",
        subtitle: "- Garima Chikkara",
        logo_path: "cblogo.png",
        certificate_link: "",
        alt_name: "Coding Blocks",
        color_code: "#ffffff",
      },
      {
      title: "React JS- Complete Guide for Frontend Web Development",
      subtitle: "- EdYoda Digital University",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-999a8af9-e29b-488d-9ba7-d055edd011f8/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experiences",
  // subtitle: "Work, Internship and Volunteership",
  // description:
  //   "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Teaching Assistant - Java",
          company: "Coding Blocks",
          company_url: "https://codingblocks.com",
          logo_path: "cbl2.jpg",
          duration: "July 2020 - Present",
          location: "Delhi, India",
          description:
            "Provided assistance to the mentors in preparing the lesson plans and learning material and Contributed in setting up new challenges for the students and writing editorials for new as well as existing problems. Supervised over 200 students by resolving their doubts and debugging their codes. ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor - Java",
          company: "Girls Code it",
          company_url: "https://www.girlcodeit.com/",
          logo_path: "girlcodeit.png",
          duration: "May 2021 - Present",
          location: "Delhi, India",
          description:
          "Worked closely with a team of 20 members to provide the best guidance to 120 learners having colleges all across India. Coached various Data Structures and Algorithms to the learners, resolved their doubts and monitored their progress on various coding platforms.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web tools for optimised user experience. ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Mihir.jpeg",
    description:
      "Feel free to connect with me on LinkedIn. You can hit me up and I will surely back to you within 24 hours. Thanks and Good Luck :) ",
  },
};

export {
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
