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
    const newStudent_1 = {name: 'Алексей',
                          midlename: 'Сергеевич',
                          surname: 'Степанов',
                          bethDate: new Date('1975-12-03'),
                          yearStart: 2020,
                          facultet: 'Web Developer',}

    const newStudent_2 = {name: 'Степан',
                          midlename: 'Алексеевич',
                          surname: 'Сергеев',
                          bethDate: new Date('1988-07-15'),
                          yearStart: 2019,
                          facultet: 'Дизайн',}

    const newStudent_3 = {name: 'Сергей',
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
    table.id="studentsTable"
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
    th.id = 'tableHeadCell_FIO';
    tr.append(th);
    th = document.createElement('th');
    th.textContent = 'Факультет';
    th.id = 'tableHeadCell_facultet';
    tr.append(th);
    th = document.createElement('th');
    th.textContent = 'Дата рождения и возраст';
    th.id = 'tableHeadCell_dataBeth';
    tr.append(th);
    th = document.createElement('th');
    th.textContent = 'Годы обучения и номер курса';
    th.id = 'tableHeadCellStartYear';
    tr.append(th);
    // Заполняем таблицу студентами
    // формируем тело таблицы
    const tbody = document.createElement('tbody');
    table.append(tbody);
    studentArr.forEach((student, index) => {
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
      td.textContent = getStudyPeriod(student.yearStart) + getCurrentCourse(student.yearStart);
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
    const lastChar = timeDistinctionStr.slice(-1);
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
  // Функция определения годов обучения
  let getStudyPeriod = (yearStart) => {
    return yearStart + '-' + (yearStart+4)
  };
  // Функция определения текущего курса студента
  let getCurrentCourse = (yearStart) => {
    const curentDate  = new Date();
    const curentYear  = curentDate.getFullYear();
    const curentMonth = curentDate.getMonth()+1;
    const distinctionYear = curentYear - yearStart;
    if ((distinctionYear > 4) || ((distinctionYear === 4)&&(curentMonth >= 6))){
      return ' (закончил)';
    }
    return ' (' + distinctionYear + ' курс)';
  };
  // Функция сортировки массива студентов по ФИО по фозрастанию
  const getSortedFIO = (studentsArr) => {
    // функция обьединения ФИО
    const getUnitedFio = (student) => {
      return student.name  + student.midlename + student.surname;
    }
    // Сортируем массив с обьединенными ФИО
    studentsArr.sort(function(a, b){
      const nameA=getUnitedFio(a).toLowerCase();
      const nameB=getUnitedFio(b).toLowerCase();
      // Сортировка по возрастанию
      if (nameA > nameB) {
        return 1;
      } else {
        if (nameA < nameB) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    return studentsArr;
  }

  // Действия после отрисовки контента страницы
  document.addEventListener('DOMContentLoaded',() => {
    // кнопка Добавить студнета
    const btnAdd = document.getElementById('btn-add');
    // форма Добавить студента
    const addStudForm = document.getElementById('add_stud_form');
    // Контенер для таблицы
    const tableContainer = document.getElementById('table_container');

    // Первоначальный рендернинг таблицы
    let curentStudentArr = startStudentsArr();
    renderStudentTable(tableContainer, curentStudentArr)
    // Клик по кнопке Добавить студента
    btnAdd.addEventListener('click',()=>{
      addStudForm.style.display = 'block';
    });
    // Сортировки при нажатии ячейки заголовка таблицы - 'ФИО студента'
    const tableHeaderCellFIO = document.getElementById('tableHeadCell_FIO');
    tableHeaderCellFIO.addEventListener('click',()=>{
      // Сортируем массив со студентами и сохраняем его
      curentStudentArr = getSortedFIO(curentStudentArr);
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableContainer, curentStudentArr);
    });
  });
})();
