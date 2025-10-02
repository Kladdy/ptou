interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Podden På tal om universum',
    description:
      'I avslappnade och lättsamma samtal med experter inom fysik-, teknik-, och naturvetenskapliga ämnet utforskar vi allt mellan himmel och jord - och långt utanför de gränserna.',
    imgSrc: '/static/images/ptou_social_banner_v1.png',
    href: 'https://rss.com/podcasts/ptou',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blogg/the-time-machine',
  // },
]

export default projectsData
