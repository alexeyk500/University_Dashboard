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
                          bethDate: new Date('2001-07-15'),
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
      td.textContent = student.surname + ' ' + student.name + ' ' + student.midlename;
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
      return student.surname + student.name + student.midlename;;
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
  const getSortedBethDate = (studentsArr) => {
    // Сортируем массив по названию факультета
    studentsArr.sort(function(a, b){
      const nameA=a['bethDate'].getTime();
      const nameB=b['bethDate'].getTime();
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
  // Функция сортировки массива студентов по году обучения по возрастанию
  const getSortedStartYear = (studentsArr) => {
    // Сортируем массив по году обучения по возрастанию
    studentsArr.sort(function(a, b){
      const nameA=a.yearStart;
      const nameB=b.yearStart;
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
    return studentsArr;
  };
  // Валидация введенных данных
  function ValidationEvent(student, errorMessage) {
    // проверка имени студента
    if (student.name.length === 0) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = "Ошибка в имени студента, оно пустое";
      return false;
    }
    // проверка отчества студента
    if (student.midlename.length === 0) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = "Ошибка в отчестве студента, оно пустое";
      return false;
    }
    // проверка фамилии студента
    if (student.surname.length === 0) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = "Ошибка в фамилии студента, она пустая";
      return false;
    }
    // проверка даты рождения студента
    if (student.bethDate < new Date('1900-01-01')){
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = "Ошибка в дате рождения, она меньше чем '01.01.1990'";
      return false;
    }
    // проверка года поступления студента
    if (student.yearStart < 2000){
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = "Ошибка в годе начала обучения, он меньше чем '2000'";
      return false;
    }
    // проверка факультета студента
    if (student.facultet.length === 0) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = "Ошибка в факультете студента, поле пустое";
      return false;
    }
    return true;
  }
  // Функция создания нового студента
  function addNewStudent(student, studentArr) {
    studentArr.push(student);
  }

  // Действия после отрисовки контента страницы
  document.addEventListener('DOMContentLoaded',() => {
    // кнопка Добавить студнета
    const btnAdd = document.getElementById('btn-add');
    // форма Добавить студента
    const addStudForm = document.getElementById('add_stud_form');
    // инпуты формы Добавить студента
    const inputSurname = document.getElementById('surname_input');
    const inputFirstname = document.getElementById('firstname_input');
    const inputMidlename = document.getElementById('midlename_input');
    const inputData = document.getElementById('data_input');
    const inputYear = document.getElementById('year_input');
    const inputFacultet = document.getElementById('facultet_input');
    // кнопка Добавить на всплывающем окне
    const btnAddFloatWindow = document.getElementById('btn-add-stud');
    // элемент Закрыть на всплывающем окне
    const btnCloseFloatWindow = document.getElementById('btn-close');
    // сообщение об ошибке на всплывающем окне
    const errorMessage = document.getElementById('error_mesage');
    // тело таблицы
    const tableBody = document.getElementById('studentsTableBody');

    // Первоначальный рендернинг таблицы
    let curentStudentArr = startStudentsArr();
    renderStudentTable(tableBody, curentStudentArr);

    // Клик по кнопке Добавить студента
    btnAdd.addEventListener('click',()=>{
      addStudForm.style.display = 'block';
      // Очищаем Inputs
      inputSurname.value = '';
      inputFirstname.value = 'иванов';
      inputMidlename.value = 'алексеевич';
      inputData.value = '2001-03-03';
      inputYear.value = '2015';
      inputFacultet.value = 'Дизайн';
      errorMessage.style.visibility = 'hidden';
    });

    // Подписание всплывающей формы добавления студента
    addStudForm.addEventListener('submit', ()=>{
      const new_student = [];
      new_student.name = document.getElementById('firstname_input').value.trim();
      new_student.midlename = document.getElementById('midlename_input').value.trim();
      new_student.surname = document.getElementById('surname_input').value.trim();
      new_student.bethDate = new Date(document.getElementById('data_input').value);
      new_student.yearStart = parseInt(document.getElementById('year_input').value.trim());
      new_student.facultet = document.getElementById('facultet_input').value.trim();
      const errorMessage = document.getElementById('error_mesage');
      // Валидация данных
      if (ValidationEvent(new_student, errorMessage)) {
        addNewStudent(new_student, curentStudentArr);
        renderStudentTable(tableBody, curentStudentArr);
        addStudForm.style.display = 'none';
      } else {
        console.log('Валидация не прошла')
      }
    });
    // Клик по кнопке Закрыть во всплывающем окне
    btnCloseFloatWindow.addEventListener('click',()=>{
      console.log('Нажато Закрыть');
      addStudForm.style.display = 'none';
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
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableBody, curentStudentArr);
    });
    // Сортировки при нажатии ячейки заголовка таблицы - 'Годы обучения и номер курса'
    const tableHeaderCellStartYear = document.getElementById('tableHeadCell_startYear');
    tableHeaderCellStartYear.addEventListener('click',()=>{
      // Сортируем массив со студентами и сохраняем его
      curentStudentArr = getSortedStartYear(curentStudentArr);
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableBody, curentStudentArr);
    });
  });
})();


// Клик по кнопке Добавить во всплывающем окне
    // btnAddFloatWindow.addEventListener('click',()=>{
    //   console.log('Нажато добавить');
    //   new_student = doVaidation(inputSurname, inputFirstname, inputMidlename, inputData, inputYear, inputFacultet)
    //   // if (student) {
    //   //   // Валидация прислала нового студента
    //   //   addNewStudent(new_student, curentStudentArr)
    //   //   // Скрываем форму
    //   //   addStudForm.style.display = 'none';
    //   //   // рендерим таблицу с отсортированым массивом
    //   //   renderStudentTable(tableBody, curentStudentArr);
    //   // } else {
    //   //   // Валидация не прошла
    //   //   console.log('Валидация не прошла')
    //   // }
    // });
