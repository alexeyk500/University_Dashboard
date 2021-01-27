(() => {
  // Обьект Студент
  const student = {name: '',
                   midlename: '',
                   surname: '',
                   bethDate: new Date(),
                   yearStart: 0,
                   facultet: '',}
  // Массив студентов
  const studArr = []

  // функция возвращающая стартовый массив со студентами
  let startStudentsArr = () => {
    let newStudent_1 = {name: 'Алексей',
                        midlename: 'Сергеевич',
                        surname: 'Степанов',
                        bethDate: new Date('1975-12-03'),
                        yearStart: 2020,
                        facultet: 'Web Developer',}

    let newStudent_2 = {name: 'Степан',
                        midlename: 'Алексеевич',
                        surname: 'Сергеев',
                        bethDate: new Date('1988-07-15'),
                        yearStart: 2019,
                        facultet: 'Дизайн',}

    let newStudent_3 = {name: 'Сергей',
                        midlename: 'Степанович',
                        surname: 'Алексеев',
                        bethDate: new Date('1999-03-01'),
                        yearStart: 2016,
                        facultet: 'Разработчик Python',}
    return [newStudent_1, newStudent_2, newStudent_3]
  }

  // функция рендеринга таблицы по массиву со студентами
  function renderStudentTable(poinToPastTable, studentArr) {
    // проверяем есть ли уже таблица
    const old_table = document.getElementById('studentsTable');
    if (old_table) {
      // удаляем старую таблицу
      old_table.parentNode.removeChild(old_table);
    }
    // формируем новую таблицу
    const table = document.createElement('table');
    table.className = 'table students_table';
    poinToPastTable.append(table);
    // формируем заголовок таблицы
    const thead = document.createElement('thead');
    table.append(thead);
    // формируем строку заголовка таблицы
    let tr = document.createElement('tr');
    thead.append(tr);
    // формируем колонки заголовка
    let th = document.createElement('th');
    th.textContent = '#';
    tr.append(th);
    th = document.createElement('th');
    th.textContent = 'Ф.И.О. студента';
    tr.append(th);
    th = document.createElement('th');
    th.textContent = 'Факультет';
    tr.append(th);
    th = document.createElement('th');
    th.textContent = 'Дата рождения и возраст';
    tr.append(th);
    th = document.createElement('th');
    th.textContent = 'Годы обучения и номер курса';
    tr.append(th);
    console.log(table)
    // Заполняем таблицу студентами
    // формируем тело таблицы
    const tbody = document.createElement('tbody');
    table.append(tbody);
    studentArr.forEach((student, index) => {
      console.log(index, student)
      tr = document.createElement('tr');
      tbody.append(tr);
      th = document.createElement('th');
      th.textContent = index + 1;
      tr.append(th);
      let td = document.createElement('td');
      td.textContent = student.name + ' ' + student.midlename + ' ' + student.surname;
      tr.append(td);
      td = document.createElement('td');
      td.textContent = student.facultet;
      tr.append(td);
      td = document.createElement('td');
      td.textContent = getStrDate(student.bethDate) + ' ' + getStrAge(student.bethDate);
      tr.append(td);
      td = document.createElement('td');
      td.textContent = student.yearStart;
      tr.append(td);

    });
    poinToPastTable.append(table)
  };

  // Функция преобразования даты в требуемый вид
  let getStrDate = (date) => {
    let year  = date.getFullYear();
    let month = date.getMonth()+1;
    let day   = date.getDate();
    // Проверяем длинну месяца
    if (month.toString().length < 2) {
      monthStr = '0'+ month.toString();
    } else {
      monthStr = month.toString();
    }
    // Проверяем длинну дня
    if (day.toString().length <2 ) {
      dayStr = '0'+ day.toString();
    } else {
      dayStr = day.toString();
    }
    return dayStr + '.' + monthStr + '.' + year.toString()
  };

  // Функция определения возраста
  let getStrAge = (date) => {
    let timeDistinction = new Date() - date;
    timeDistinction = Math.floor(timeDistinction / (1000 * 3600 * 24 * 365));
    timeDistinctionStr = timeDistinction.toString();
    let lastChar = timeDistinctionStr.slice(-1);
    let difinitionAge =''
    switch (lastChar) {
      case '0':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        difinitionAge =' лет)';
        break;
      case '1':
        difinitionAge =' год)';
        break;
      case '2':
      case '3':
      case '4':
        difinitionAge =' года)'
        break;
      default:
        difinitionAge =' лет)';
    }
    return '(' + timeDistinctionStr + difinitionAge;
  };

  // Действия после отрисовки контента страницы
  document.addEventListener('DOMContentLoaded',() => {
    // кнопка Добавить студнета
    let btnAdd = document.getElementById('btn-add');
    // форма Добавить студента
    let addStudForm = document.getElementById('add_stud_form');
    // Контенер для таблицы
    let tableContainer = document.getElementById('table_container');

    // Первоначальный рендернинг таблицы
    renderStudentTable(tableContainer, startStudentsArr())
    // Клик по кнопке Добавить студента
    btnAdd.addEventListener('click',()=>{
      addStudForm.style.display = 'block';
    });
  });
})();
