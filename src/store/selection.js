export default {
  namespaced: true,
  state: {
    subject: {
      title: "Тип обращения:",
      name: "subject",
      data: [
        { title: "Жалоба на пользователя" },
        { title: "Жалоба на приложение" },
        { title: "Жалоба на сайт" },
        { title: "Оплата" },
        { title: "Функционал" },
        { title: "Авторизация" },
        { title: "Модерация" },
        { title: "Другое" },
      ],
    },
    status: {
      title: "Статус:",
      name: "status",
      data: [
        { value: 0, title: "Новый" },
        { value: 1, title: "В обработке" },
        { value: 2, title: "Отложено" },
        { value: 3, title: "Закрыто" },
      ],
    },
    priority: {
      title: "Приоритет:",
      name: "priority",
      data: [
        { value: 0, title: "Низкий" },
        { value: 1, title: "Средний" },
        { value: 2, title: "Высокий" },
        { value: 3, title: "Критический" },
      ],
    },

    colors: [
      {
        color: "#a9d86e",
        status: "Новый",
      },
      {
        color: "#ff6c60",
        status: "В обработке",
      },
      {
        color: "#fcb322",
        status: "Отлежено",
      },
      {
        color: "#bec3c7",
        status: "Закрыто",
      },
    ],
  },
};
