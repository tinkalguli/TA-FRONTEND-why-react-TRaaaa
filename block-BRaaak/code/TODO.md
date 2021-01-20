#### Create Article Card Using JSX

- Create an article card using JSX
- Have a look at UI down below
- Use the object below for the information in the card

```js
let articles = [
  {
    title: 'City Lights in New York',
    date: new Date('2017-01-26'),
    comments: 67,
    subTitle: 'The city that never sleeps.',
    description:
      'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    category: 'photos',
    imageURL:
      'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Twitter’s decentralized future',
    date: new Date('2021-01-16'),
    comments: 43,
    subTitle: 'The decentralized future of twitter.',
    description:
      'The platform’s vision of a sweeping open standard could also be the far-right’s internet endgame',
    category: 'social network',
    imageURL:
      'https://techcrunch.com/wp-content/uploads/2019/09/twitter-hidden-replies1.png?resize=1536,816',
  },
  {
    title:
      'Startups look beyond lidar for autonomous vehicle perception',
    date: new Date('2017-07-26'),
    comments: 17,
    subTitle:
      'Lidar pushed ahead of traditional cameras because it could do things they couldn’t',
    description:
      'Last CES was a time of reckoning for lidar companies, many of which were cratering due to a lack of demand from a (still) non-existent autonomous vehicle industry. ',
    category: 'future',
    imageURL:
      'https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-846875220.jpg?w=1390&crop=1',
  },
];
```

#### Preview

![Article Card](../assets/articles.png)
