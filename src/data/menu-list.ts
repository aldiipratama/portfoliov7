type TFunction = (key: string) => string;

export const getMoreMenuList = (t: TFunction) => [
  {
    label: t("etc.moreMenu.Me.Label"),
    icon: "icon-[mdi--user-search-outline]",
    subMenu: [
      {
        label: t("etc.moreMenu.Me.WhoAreYou"),
        link: t("etc.moreMenu.Me.WhoAreYou"),
        active: true,
      },
      {
        label: t("etc.moreMenu.Me.WhatAreYourPassions"),
        link: t("etc.moreMenu.Me.WhatAreYourPassions"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Me.HowDidYouGetStartedInTech"),
        link: t("etc.moreMenu.Me.HowDidYouGetStartedInTech"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Me.WhereDoYouSeeYourselfIn5Years"),
        link: t("etc.moreMenu.Me.WhereDoYouSeeYourselfIn5Years"),
        active: false,
      },
    ],
  },
  {
    label: t("etc.moreMenu.Professional.Label"),
    icon: "icon-[flowbite--briefcase-outline]",
    subMenu: [
      {
        label: t("etc.moreMenu.Professional.CanISeeYourResume"),
        link: t("etc.moreMenu.Professional.CanISeeYourResume"),
        active: true,
      },
      {
        label: t("etc.moreMenu.Professional.WhatMakesYouAValuableTeamMember"),
        link: t("etc.moreMenu.Professional.WhatMakesYouAValuableTeamMember"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Professional.WhatAreYouWorkingOnNow"),
        link: t("etc.moreMenu.Professional.WhatAreYouWorkingOnNow"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Professional.WhyShouldIHireYou"),
        link: t("etc.moreMenu.Professional.WhyShouldIHireYou"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Professional.WhatYourEducationBackground"),
        link: t("etc.moreMenu.Professional.WhatYourEducationBackground"),
        active: false,
      },
    ],
  },
  {
    label: t("etc.moreMenu.Projects.Label"),
    icon: "icon-[mdi--folder-star-outline]",
    subMenu: [
      {
        label: t("etc.moreMenu.Projects.WhatProjectsAreYouMostProudOf"),
        link: t("etc.moreMenu.Projects.WhatProjectsAreYouMostProudOf"),
        active: true,
      },
      {
        label: t("etc.moreMenu.Projects.WhatIsYourFavoriteProject"),
        link: t("etc.moreMenu.Projects.WhatIsYourFavoriteProject"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Projects.WhatIsYourMostChallengingProject"),
        link: t("etc.moreMenu.Projects.WhatIsYourMostChallengingProject"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Projects.WhatIsYourFavoriteTechnologyStack"),
        link: t("etc.moreMenu.Projects.WhatIsYourFavoriteTechnologyStack"),
        active: false,
      },
    ],
  },
  {
    label: t("etc.moreMenu.Skills.Label"),
    icon: "icon-[mdi--star-outline]",
    subMenu: [
      {
        label: t("etc.moreMenu.Skills.WhatAreYourSkills"),
        link: t("etc.moreMenu.Skills.WhatAreYourSkills"),
        active: true,
      },
      {
        label: t("etc.moreMenu.Skills.HowWasYourExperienceAtBandung"),
        link: t("etc.moreMenu.Skills.HowWasYourExperienceAtBandung"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Skills.WhatIsYourFavoriteProgrammingLanguage"),
        link: t("etc.moreMenu.Skills.WhatIsYourFavoriteProgrammingLanguage"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Skills.WhatIsYourFavoriteFramework"),
        link: t("etc.moreMenu.Skills.WhatIsYourFavoriteFramework"),
        active: false,
      },
    ],
  },
  {
    label: t("etc.moreMenu.FunFact.Label"),
    icon: "icon-[mdi--emoticon-happy-outline]",
    subMenu: [
      {
        label: t("etc.moreMenu.FunFact.WhatAreYourHobbies"),
        link: t("etc.moreMenu.FunFact.WhatAreYourHobbies"),
        active: true,
      },
      {
        label: t("etc.moreMenu.FunFact.WhatIsYourFavoriteWayToHaveFun"),
        link: t("etc.moreMenu.FunFact.WhatIsYourFavoriteWayToHaveFun"),
        active: false,
      },
      {
        label: t("etc.moreMenu.FunFact.WhatHobbiesDoYouEnjoy"),
        link: t("etc.moreMenu.FunFact.WhatHobbiesDoYouEnjoy"),
        active: false,
      },
      {
        label: t("etc.moreMenu.FunFact.MacOrPC"),
        link: t("etc.moreMenu.FunFact.MacOrPC"),
        active: false,
      },
    ],
  },
  {
    label: t("etc.moreMenu.Contact.Label"),
    icon: "icon-[mdi--email-outline]",
    subMenu: [
      {
        label: t("etc.moreMenu.Contact.HowCanIReachYou"),
        link: t("etc.moreMenu.Contact.HowCanIReachYou"),
        active: true,
      },
      {
        label: t(
          'etc.moreMenu.Contact.WhatKindOfProjectWouldMakeYouSay"Yes"Immediately'
        ),
        link: t(
          'etc.moreMenu.Contact.WhatKindOfProjectWouldMakeYouSay"Yes"Immediately'
        ),
        active: false,
      },
      {
        label: t("etc.moreMenu.Contact.WhereAreYouLocated"),
        link: t("etc.moreMenu.Contact.WhereAreYouLocated"),
        active: false,
      },
    ],
  },
  {
    label: t("etc.moreMenu.Testimonials.Label"),
    icon: "icon-[mdi--account-star-outline]",
    subMenu: [
      {
        label: t("etc.moreMenu.Testimonials.WhatDoOthersSayAboutYou"),
        link: t("etc.moreMenu.Testimonials.WhatDoOthersSayAboutYou"),
        active: true,
      },
      {
        label: t("etc.moreMenu.Testimonials.CanYouProvideReferences"),
        link: t("etc.moreMenu.Testimonials.CanYouProvideReferences"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Testimonials.WhatAreYourStrengths"),
        link: t("etc.moreMenu.Testimonials.WhatAreYourStrengths"),
        active: false,
      },
      {
        label: t("etc.moreMenu.Testimonials.WhatAreYourWeaknesses"),
        link: t("etc.moreMenu.Testimonials.WhatAreYourWeaknesses"),
        active: false,
      },
    ],
  },
];

export const getQuickMenuList = (t: TFunction) => [
  {
    label: t("etc.quickMenu.AboutMe"),
    icon: "icon-[mdi--information-outline]",
    link: t("etc.moreMenu.Me.WhoAreYou"),
  },
  {
    label: t("etc.quickMenu.Projects"),
    icon: "icon-[mdi--folder-outline]",
    link: t("etc.moreMenu.Projects.WhatProjectsAreYouMostProudOf"),
  },
  {
    label: t("etc.quickMenu.Skills"),
    icon: "icon-[mdi--star-outline]",
    link: t("etc.moreMenu.Skills.WhatAreYourSkills"),
  },
  {
    label: t("etc.quickMenu.Fun"),
    icon: "icon-[mdi--emoticon-happy-outline]",
    link: t("etc.moreMenu.FunFact.WhatAreYourHobbies"),
  },
  {
    label: t("etc.quickMenu.Contact"),
    icon: "icon-[mdi--email-outline]",
    link: t("etc.moreMenu.Contact.HowCanIReachYou"),
  },
  {
    label: t("etc.quickMenu.Testy"),
    icon: "icon-[mdi--comment-outline]",
    link: t("etc.moreMenu.Testimonials.WhatDoOthersSayAboutYou"),
  },
];
