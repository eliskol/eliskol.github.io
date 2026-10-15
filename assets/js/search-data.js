// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "Courses I have completed at UC Santa Barbara",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My CV/resume. (still under construction lol)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-coming-back-to-math-academy-to-give-guest-lectures-on-fourier-series",
        
          title: "coming back to Math Academy to give guest lectures on Fourier series",
        
        description: "i went back to my high school to talk about math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/math-academy-guest-lectures/";
          
        },
      },{id: "post-the-open-mapping-principle",
        
          title: "the open mapping principle",
        
        description: "proving the open mapping principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/open-mapping-principle/";
          
        },
      },{id: "post-liouville-39-s-theorem",
        
          title: "liouville&#39;s theorem",
        
        description: "proving liouville&#39;s theorem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/liouvilles-theorem/";
          
        },
      },{id: "post-the-uniqueness-principle",
        
          title: "the uniqueness principle",
        
        description: "proving the uniqueness principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/uniqueness-principle/";
          
        },
      },{id: "post-the-maximum-modulus-principle",
        
          title: "the maximum modulus principle",
        
        description: "proving the maximum modulus principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/maximum-modulus-principle/";
          
        },
      },{id: "post-cauchy-39-s-integral-formula",
        
          title: "cauchy&#39;s integral formula",
        
        description: "proving cauchy&#39;s integral formula",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cauchys-integral-formula/";
          
        },
      },{id: "courses-bl-st-160-race-gender-and-medicine-in-the-united-states",
          title: 'BL ST 160 Race, Gender and Medicine in the United States',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/BLST160/";
            },},{id: "courses-cmpsc-9-intermediate-python-programming",
          title: 'CMPSC 9 Intermediate Python Programming',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/CMPSC9/";
            },},{id: "courses-earth-10-antarctica-the-last-place-on-earth",
          title: 'EARTH 10 Antarctica: The Last Place on Earth',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/EARTH10/";
            },},{id: "courses-eemb-40-ecology-of-infectious-disease",
          title: 'EEMB 40 Ecology of Infectious Disease',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/EEMB40/";
            },},{id: "courses-int-cs-120-introduction-to-quantitative-developmental-biology",
          title: 'INT CS 120 Introduction to Quantitative Developmental Biology',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/INTCS120/";
            },},{id: "courses-ital-20x-introduction-to-italian-culture",
          title: 'ITAL 20X Introduction to Italian Culture',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/ITAL20X/";
            },},{id: "courses-math-111a-abstract-algebra",
          title: 'MATH 111A Abstract Algebra',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH111A/";
            },},{id: "courses-math-111b-abstract-algebra",
          title: 'MATH 111B Abstract Algebra',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH111B/";
            },},{id: "courses-math-111c-abstract-algebra",
          title: 'MATH 111C Abstract Algebra',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH111C/";
            },},{id: "courses-math-118a-real-analysis",
          title: 'MATH 118A Real Analysis',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH118A/";
            },},{id: "courses-math-118b-real-analysis",
          title: 'MATH 118B Real Analysis',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH118B/";
            },},{id: "courses-math-118c-real-analysis",
          title: 'MATH 118C Real Analysis',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH118C/";
            },},{id: "courses-math-220a-modern-algebra-i",
          title: 'MATH 220A Modern Algebra I',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH220A/";
            },},{id: "courses-math-220b-modern-algebra-ii",
          title: 'MATH 220B Modern Algebra II',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH220B/";
            },},{id: "courses-math-220c-modern-algebra-iii",
          title: 'MATH 220C Modern Algebra III',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH220C/";
            },},{id: "courses-math-cs-101a-problem-solving-i",
          title: 'MATH CS 101A Problem Solving I',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS101A/";
            },},{id: "courses-math-cs-101b-problem-solving-ii",
          title: 'MATH CS 101B Problem Solving II',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS101B/";
            },},{id: "courses-math-cs-108a-advanced-linear-algebra-i",
          title: 'MATH CS 108A Advanced Linear Algebra I',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS108A/";
            },},{id: "courses-math-cs-108b-advanced-linear-algebra-ii",
          title: 'MATH CS 108B Advanced Linear Algebra II',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS108B/";
            },},{id: "courses-math-cs-117-introduction-to-real-analysis",
          title: 'MATH CS 117 Introduction to Real Analysis',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS117/";
            },},{id: "courses-math-cs-120ai-introduction-to-data-science-and-machine-learning-foundations-and-applications",
          title: 'MATH CS 120AI Introduction to Data Science and Machine Learning: Foundations and Applications...',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS120AI/";
            },},{id: "courses-math-cs-120fn-number-systems",
          title: 'MATH CS 120FN Number Systems',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS120FN/";
            },},{id: "courses-math-cs-120ft-topology",
          title: 'MATH CS 120FT Topology',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS120FT/";
            },},{id: "courses-math-cs-121-probability",
          title: 'MATH CS 121 Probability',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS121/";
            },},{id: "courses-math-cs-122a-complex-analysis-i",
          title: 'MATH CS 122A Complex Analysis I',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS122A/";
            },},{id: "courses-math-cs-122b-complex-analysis-ii",
          title: 'MATH CS 122B Complex Analysis II',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS122B/";
            },},{id: "courses-math-cs-5-colloquium-categories-types-logics",
          title: 'MATH CS 5 Colloquium: Categories, Types, Logics',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS5/";
            },},{id: "courses-phil-3-critical-thinking",
          title: 'PHIL 3 Critical Thinking',
          description: "Coursework at UC Santa Barbara.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/PHIL3/";
            },},{id: "news-just-set-this-up",
          title: 'Just set this up!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/setup/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
