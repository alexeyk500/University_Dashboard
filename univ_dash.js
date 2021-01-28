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
    // находим тело таблицы
    const tbody = document.getElementById('studentsTableBody');
    // удаляем старое тело таблицы
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    // формируем новое тело таблицы - Заполняем таблицу студентами
    studentArr.forEach((student, index) => {
      const tr = document.createElement('tr');
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
      tbody.append(tr);
    });
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
  // Функция сортировки массива студентов по ФИО по возрастанию
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
  };
  // Функция сортировки массива студентов по факультету по возрастанию
  const getSortedFacultet = (studentsArr) => {
    // Сортируем массив по названию факультета
    studentsArr.sort(function(a, b){
      const nameA=a.facultet.toLowerCase();
      const nameB=b.facultet.toLowerCase();
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
  };
  // Функция сортировки массива студентов по дате рождения по возрастанию
  const getSortedBethDate = (arr) => {
    // Сортируем массив по названию факультета
    arr.sort(function(a, b){
      const nameA=a['bethDate'].getTime();
      const nameB=b['bethDate'].getTime();
      // Сортировка по возрастанию
      if (nameA < nameB) {
        return 1;
      } else {
        if (nameA > nameB) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    return arr;
  };

  // Действия после отрисовки контента страницы
  document.addEventListener('DOMContentLoaded',() => {
    // кнопка Добавить студнета
    const btnAdd = document.getElementById('btn-add');
    // форма Добавить студента
    const addStudForm = document.getElementById('add_stud_form');
    // тело таблицы
    const tableBody = document.getElementById('studentsTableBody');

    // Первоначальный рендернинг таблицы
    let curentStudentArr = startStudentsArr();
    renderStudentTable(tableBody, curentStudentArr);
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
      renderStudentTable(tableBody, curentStudentArr);
    });
    // Сортировки при нажатии ячейки заголовка таблицы - 'Факультет'
    const tableHeaderCellFacultet = document.getElementById('tableHeadCell_facultet');
    tableHeaderCellFacultet.addEventListener('click',()=>{
      // Сортируем массив со студентами и сохраняем его
      curentStudentArr = getSortedFacultet(curentStudentArr);
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableBody, curentStudentArr);
    });
    // Сортировки при нажатии ячейки заголовка таблицы - 'Дата рождения и возраст'
    const tableHeaderCellDataBeth = document.getElementById('tableHeadCell_dataBeth');
    tableHeaderCellDataBeth.addEventListener('click',()=>{
      // Сортируем массив со студентами и сохраняем его
      curentStudentArr = getSortedBethDate(curentStudentArr);
      // curentStudentArr = getSortedDataBeth(curentStudentArr);
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableBody, curentStudentArr);
    });
  });
})();
