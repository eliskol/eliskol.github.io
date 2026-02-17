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
          description: "Some information on the math courses I have taken",
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
        },{id: "courses-math-220a-modern-algebra-i",
          title: 'MATH 220A Modern Algebra I',
          description: "Graduate course in modern algebra at UCSB.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH220A/";
            },},{id: "courses-math-220b-modern-algebra-ii",
          title: 'MATH 220B Modern Algebra II',
          description: "Graduate course in modern algebra at UCSB.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATH220B/";
            },},{id: "courses-math-cs-120ai",
          title: 'MATH CS 120AI',
          description: "CCS special topics course on machine learning/data science.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/MATHCS120AI/";
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
