// Дана структура компании:

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

/* Задания:

    1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
    Пример:
    Предприятие 1 (45 сотрудников)
    - Отдел тестирования (10 сотрудников)
    - Отдел маркетинга (20 сотрудников)
    - Администрация (15 человек)
    Предприятие 2 (75 сотрудников)
    - Отдел разработки (50 сотрудников)
    - Отдел маркетинга (20 сотрудников)
    - Отдел охраны труда (5 сотрудников)
    Предприятие 3 (нет сотрудников)
    - Отдел аналитики (нет сотрудников)  */

/*  2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
    Пример:
    getEnterpriseName(4) // Предприятие 1
    getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/
