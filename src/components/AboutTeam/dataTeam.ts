interface IDev {
  id: number;
  avatar: string;
  name: string;
  position: string;
  discription: string;
  linkToGitHub: string;
}

export const data: Array<IDev> = [
  {
    id: 1,
    avatar: 'https://i.imgur.com/UFiQt2r.jpg',
    name: 'Vlad',
    position: 'Team Lead',
    discription: `Стартовал приложение, выполнил бекендную часть, реализовал игру «аудиовызов», сделал логику статистики, начало и конец игр, поработал над визуалом приложения.`,
    linkToGitHub: '#',
  },
  {
    id: 2,
    avatar: 'https://i.imgur.com/EEF6jS4.jpg',
    name: 'Tanya',
    position: 'Software Enginer',
    discription: `Реализовала игру спринт, сделала «скелет» для работы со словарём, реализовала визуальное его представление, поработала над визуалом приложения и добавила ограничения на работу с приложением для незалогиненного пользователя.`,
    linkToGitHub: '#',
  },
  {
    id: 3,
    avatar: 'https://i.imgur.com/sbXq2Dp.jpg',
    name: 'Artem',
    position: 'Software Enginer',
    discription: `Реализовал заголовок главной страницы, уведомление и его функциональность, логику промо страницы «начать
          обучение» и «смотреть видео», информацию о пользователе в заголовке, кнопку «настройки» в заголовке, идея
          пользовательской игры.`,
    linkToGitHub: '#',
  },
  {
    id: 4,
    avatar: 'https://i.imgur.com/FaSPyQl.jpg',
    name: 'Viktar',
    position: 'Software Enginer',
    discription: `Реализовал заголовок главной страницы, уведомление и его функциональность, логику промо страницы «начать
          обучение» и «смотреть видео», информацию о пользователе в заголовке, кнопку «настройки» в заголовке, идея
          пользовательской игры.`,
    linkToGitHub: '#',
  },
  {
    id: 5,
    avatar: 'https://i.imgur.com/A4Z0ztC.jpg',
    name: 'Dima',
    position: 'Software Enginer',
    discription: `Реализовал заголовок главной страницы, уведомление и его функциональность, логику промо страницы «начать
          обучение» и «смотреть видео», информацию о пользователе в заголовке, кнопку «настройки» в заголовке, идея
          пользовательской игры.`,
    linkToGitHub: '#',
  },
];
