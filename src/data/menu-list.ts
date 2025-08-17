export type MoreMenuItem = {
  label: string;
  icon: string;
  subMenu: MoreMenuSubItem[];
};

export type MoreMenuSubItem = {
  label: string;
  link: string;
  active: boolean;
};

export const moreMenuList: MoreMenuItem[] = [
  {
    label: "Me",
    icon: "icon-[mdi--user-search-outline]",
    subMenu: [
      {
        label: "Who Are You?",
        link: "/chat?question=who-are-you",
        active: true,
      },
      {
        label: "What are your passions?",
        link: "/chat?question=what-are-your-passions",
        active: false,
      },
      {
        label: "How did you get started in tech?",
        link: "/chat?question=how-did-you-get-started-in-tech",
        active: false,
      },
      {
        label: "Where do you see yourself in 5 years?",
        link: "/chat?question=where-do-you-see-yourself-in-5-years",
        active: false,
      },
    ],
  },
  {
    label: "Professional",
    icon: "icon-[flowbite--briefcase-outline]",
    subMenu: [
      {
        label: "Can I see your resume?",
        active: true,
        link: "/chat?question=can-i-see-your-resume",
      },
      {
        label: "What makes you a valuable team member?",
        active: false,
        link: "/chat?question=what-makes-you-a-valuable-team-member",
      },
      {
        label: "What are you working on now?",
        active: false,
        link: "/chat?question=what-are-you-working-on-now",
      },
      {
        label: "Why should I hire you?",
        active: false,
        link: "/chat?question=why-should-i-hire-you",
      },
      {
        label: "What your education background?",
        active: false,
        link: "/chat?question=what-your-education-background",
      },
    ],
  },
  {
    label: "Projects",
    icon: "icon-[mdi--code]",
    subMenu: [
      {
        label: "What projects are you most proud off?",
        active: true,
        link: "/chat?question=what-projects-are-you-most-proud-off",
      },
      {
        label: "What is your favorite project?",
        active: false,
        link: "/chat?question=what-is-your-favorite-project",
      },
      {
        label: "What is your most challenging project?",
        active: false,
        link: "/chat?question=what-is-your-most-challenging-project",
      },
      {
        label: "What is your favorite technology stack?",
        active: false,
        link: "/chat?question=what-is-your-favorite-technology-stack",
      },
    ],
  },
  {
    label: "Skills",
    icon: "icon-[mdi--tools]",
    subMenu: [
      {
        label: "What's are your skills?",
        active: true,
        link: "/chat?question=what-are-your-skills",
      },
      {
        label: "How was your experience at Bandung?",
        active: false,
        link: "/chat?question=how-was-your-experience-at-bandung",
      },
      {
        label: "What is your favorite programming language?",
        active: false,
        link: "/chat?question=what-is-your-favorite-programming-language",
      },
      {
        label: "What is your favorite framework?",
        active: false,
        link: "/chat?question=what-is-your-favorite-framework",
      },
    ],
  },
  {
    label: "Fun",
    icon: "icon-[mdi--emoticon-happy-outline]",
    subMenu: [
      {
        label: "What's your hobbies?",
        active: true,
        link: "/chat?question=what-are-your-hobbies",
      },
      {
        label: "What's your favorite way to have fun?",
        active: false,
        link: "/chat?question=what-is-your-favorite-way-to-have-fun",
      },
      {
        label: "What hobbies do you enjoy?",
        active: false,
        link: "/chat?question=what-hobbies-do-you-enjoy",
      },
      {
        label: "Mac or PC?",
        active: false,
        link: "/chat?question=mac-or-pc",
      },
    ],
  },
  {
    label: "Contact",
    icon: "icon-[mdi--email-outline]",
    subMenu: [
      {
        label: "How can I reach you?",
        active: true,
        link: "/chat?question=how-can-i-reach-you",
      },
      {
        label: 'What kind of project would make you say "yes" immediately?',
        active: false,
        link: "/chat?question=what-kind-of-project-would-make-you-say-yes-immediately",
      },
      {
        label: "Where are you located?",
        active: false,
        link: "/chat?question=where-are-you-located",
      },
    ],
  },
  {
    label: "Testimonials",
    icon: "icon-[mdi--comment-outline]",
    subMenu: [
      {
        label: "What do others say about you?",
        active: true,
        link: "/chat?question=what-do-others-say-about-you",
      },
      {
        label: "Can you provide references?",
        active: false,
        link: "/chat?question=can-you-provide-references",
      },
      {
        label: "What are your strengths?",
        active: false,
        link: "/chat?question=what-are-your-strengths",
      },
      {
        label: "What are your weaknesses?",
        active: false,
        link: "/chat?question=what-are-your-weaknesses",
      },
    ],
  },
];