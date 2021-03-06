let store = {
  storeNews: {
    news: [
      {
        id: '1',
        textNews: 'Работяги закрыли месячный план производста за май месяц',
        image: 'https://static.vl.ru/news/1607995402358_default',
      },
      {
        id: '2',
        textNews: 'Работяги  в начале июня провалили план на начало месяца',
        image: 'https://www.tn.ru/upload/medialibrary/9db/sulin.jpg',
      },
      {
        id: '3',
        textNews:
          'Мастер после очередного совещания воодушевил работяг на усиленную работу',
        image: 'https://pererabotka.gazprom.ru/d/textpage/be/190/dsc04521.jpg',
      },
      {
        id: '4',
        textNews:
          'Воодушевленные работяги догнали план производства на начало месяца',
        image:
          'https://китайские-автомобили.рф/wp-content/uploads/2020/05/zavod_haval_1_1000.jpg',
      },
      {
        id: '5',
        textNews:
          'Бригада побила рекорд по выработке, после посещения участка начальником цеха',
        image:
          'https://static.ukrinform.com/photos/2020_08/thumb_files/630_360_1598880846-705.jpg',
      },
    ],
    newTextNews: '1',
    newUrlNews: '2',
  },
  storePeople: {
    people: [
      {
        id: '1',
        firstname: 'Иванов',
        lastname: 'Иван',
        patronym: 'Иванович',
      },
      {
        id: '2',
        firstname: 'Петов',
        lastname: 'Петр',
        patronym: 'Петрович',
      },
      {
        id: '3',
        firstname: 'Сидоров',
        lastname: 'Сидр',
        patronym: 'Сидорович',
      },
      {
        id: '4',
        firstname: 'Нитуп',
        lastname: 'Владимир',
        patronym: 'Владимирович',
      },
    ],
    addHuman(newHumanInfo) {
      let newHuman = {
        id: this.people.length + 1,
        firstname: newHumanInfo.lastname,
        lastname: newHumanInfo.firstname,
        patronym: newHumanInfo.patronym,
      };
      this.people.push(newHuman);
    },
  },
};

export default store;
