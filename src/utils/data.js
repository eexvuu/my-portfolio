import profile from '../assets/profile.svg'
import profilePicture from '../assets/images/usamah-profile.jpg'
import sertif from '../assets/images/sertif.jpg'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import vscode from '../assets/images/vscode.png'
import npm from '../assets/images/npm.png'
import github from '../assets/images/github.png'
import figma from '../assets/images/figma.png'
import tailwind from '../assets/images/tailwind.png'
import firebase from '../assets/images/firebase.png'
import flutter from '../assets/images/flutter.png'


const getData = () => {
  return {
    data: {
      myDetails: {
        name: "Usamah Abdul Matin",
        urlProfile: profile,
        profile: profilePicture,
        about: `Saya mahasiswa semester 5 program studi Informatika Universitas Amikom Purwokerto.`,
        interest: `Saya tertarik dengan Pengembangan Front End dan Mobile Apps Development menggunakan React.`,
      },
      socialMediaUrls: {
        Linkedin: "https://www.linkedin.com/in/usamah-abdul-matin-61910a1a6",
        Github: "https://github.com/eexvuu",
        Twitter: "https://twitter.com/Usamah97105014",
        Instagram: "https://www.instagram.com/eexvuu",
      },
      workDetails: [
        {
          Position:
            "Studi Independen - React and React Native for Front End Developer",
          Company: `Hacktiv8 Indonesia`,
          Location: "Jakarta Selatan, Indonesia",
          Type: "Seasonal",
          Duration: "Aug 2022 - Present",
        },
        {
          Position:
            "Belajar Membuat Aplikasi Web dengan React",
          Company: `Dicoding`,
          Location: "Jakarta Selatan, Indonesia",
          Type: "Seasonal",
          Duration: "Aug 2022 - Present",
        },
        {
          Position:
            "Belajar Membuat Aplikasi Back-End untuk Pemula",
          Company: `Dicoding`,
          Location: "Jakarta Selatan, Indonesia",
          Type: "Seasonal",
          Duration: "Aug 2022 - Present",
        },
      ],
      educationDetails: [
        {
          Position: "Bachelor Degree Informatics",
          Company: "Amikom Purwokerto University",
          Location: "Banyumas, Indonesia",
          Type: "Ungraduate",
          Duration: "2021 - Present",
        },
        {
          Position: "Computer and Network Engineering",
          Company: `SMK Muhammadiyah Kudus`,
          Location: "Kudus, Indonesia",
          Type: "Graduate",
          Duration: "2017 - 2020",
        },
      ],
      skills: {
        html,
        css,
        js,
        react,
        tailwind,
        flutter,
        firebase
      },
      tools: {
        vscode: vscode,
        npm: npm,
        github: github,
        figma: figma,
      },
      awards: [
        {
          title: "HTML dan CSS Dasar",
          image: sertif,
          description: `Course Self Paced Learning at Hacktiv8 Indonesia - React and React Native For Front End Developer`,
        },
        {
          title: "ES6 JavaScript",
          image: sertif,
          description: `Course Self Paced Learning at Hacktiv8 Indonesia - React and React Native For Front End Developer`,
        },
        {
          title: "Styling Component React",
          image: sertif,
          description: `Course Self Paced Learning at Hacktiv8 Indonesia - React and React Native For Front End Developer`,
        },
      ],
    },
  };
};

export { getData };
