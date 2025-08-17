import { moreMenuList } from "./menu-list";

function getRandomSubMenuLink(label: typeof moreMenuList[number]['label']): string | undefined {
  const menu = moreMenuList.find(list => list.label === label);
  if (!menu || !menu.subMenu || menu.subMenu.length === 0) return;
  const randomIndex = Math.floor(Math.random() * menu.subMenu.length);
  return menu.subMenu[randomIndex].link;
}

export const quickMenuList = [
  {
    label: 'About Me',
    icon: 'icon-[mdi--information-outline]',
    link: getRandomSubMenuLink('Me'),
  },
  {
    label: 'Projects',
    icon: 'icon-[mdi--folder-outline]',
    link: getRandomSubMenuLink('Projects'),
  },
  {
    label: 'Skills',
    icon: 'icon-[mdi--star-outline]',
    link: getRandomSubMenuLink('Skills'),
  },
  {
    label: 'Fun',
    icon: 'icon-[mdi--emoticon-happy-outline]',
    link: getRandomSubMenuLink('Fun'),
  },
  {
    label: 'Contact',
    icon: 'icon-[mdi--email-outline]',
    link: getRandomSubMenuLink('Contact'),
  },
  {
    label: 'Testy',
    icon: 'icon-[mdi--comment-outline]',
    link: getRandomSubMenuLink('Testimonials'),
  }
];