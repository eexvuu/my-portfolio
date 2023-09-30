
const getData = () => {
  return {
    data: {
      myDetails: {
        name: "Usamah Abdul Matin",
        urlProfile: "/",
        about: `Halo, saya mahasiswa semester 5 program studi Informatika Universitas Amikom Purwokerto.`,
        interest: `Saya tertarik dengan Pengembangan Front End dan Mobile Apps Development menggunakan React.`,
      },
      socialMediaUrls: {
        linkdein: "https://www.linkedin.com/in/usamah-abdul-matin-61910a1a6",
        github: "https://github.com/eexvuu",
        twitter: "https://twitter.com/Usamah97105014",
        instagram: "https://www.instagram.com/eexvuu",
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
            "Studi Independen - React and React Native for Front End Developer",
          Company: `Hacktiv8 Indonesia`,
          Location: "Jakarta Selatan, Indonesia",
          Type: "Seasonal",
          Duration: "Aug 2022 - Present",
        },
        {
          Position:
            "Studi Independen - React and React Native for Front End Developer",
          Company: `Hacktiv8 Indonesia`,
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
        html: "html",
        css: "css",
        js: "js",
        react: "react",
        bootstrap: "bootstrap",
        vscode: "vscode",
        npm: "npm",
        github: "github",
        figma: "figma",
      },
      awards: [
        {
          title: "HTML dan CSS Dasar",
          image: "awardImage1",
          description: `Course Self Paced Learning at Hacktiv8 Indonesia - React and React Native For Front End Developer`,
          techstack: "HTML, CSS",
        },
        {
          title: "ES6 JavaScript",
          image: "awardImage2",
          description: `Course Self Paced Learning at Hacktiv8 Indonesia - React and React Native For Front End Developer`,
          techstack: "Javascript",
        },
        {
          title: "Styling Component React",
          image: "awardImage3",
          description: `Course Self Paced Learning at Hacktiv8 Indonesia - React and React Native For Front End Developer`,
          techstack: "Bootstrap, React, Javascript",
        },
      ],
      contact: {
        email: "eexvuu@gmail.com",
        phone: "+62 895 0451 6880",
      },
    },
  };
};

export { getData };
