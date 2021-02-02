(() => {
  // Обьект Студент
  const student = {name: '',
                   midlename: '',
                   surname: '',
                   bethDate: new Date(),
                   yearStart: 0,
                   facultet: '',
  };
  // Массив студентов
  const studArr = []
  // функция возвращающая стартовый массив со отчисленными студентами
  let startStudentsArr = () => {
    const newStudent_1 = {name: 'Алексей',
    midlename: 'Сергеевич',
    surname: 'Степанов',
    bethDate: new Date('1975-12-03'),
    yearStart: 2020,
    facultet: 'Web Developer',};

    const newStudent_2 = {name: 'Степан',
        midlename: 'Алексеевич',
        surname: 'Сергеев',
        bethDate: new Date('2001-07-15'),
        yearStart: 2019,
        facultet: 'Дизайн',};

    const newStudent_3 = {name: 'Сергей',
        midlename: 'Степанович',
        surname: 'Алексеев',
        bethDate: new Date('1999-03-01'),
        yearStart: 2016,
        facultet: 'Разработчик Python',};

    const newStudent_4 = {name: 'Иван',
        midlename: 'Петрович',
        surname: 'Мельник',
        bethDate: new Date('1998-05-07'),
        yearStart: 2017,
        facultet: 'Разработчик Python',};

    const newStudent_5 = {name: 'Наталья',
        midlename: 'Павловна',
        surname: 'Конопляник',
        bethDate: new Date('1988-11-21'),
        yearStart: 2018,
        facultet: 'Дизайн',};

    const newStudent_6 = {name: 'Ольга',
        midlename: 'Геннадьевна',
        surname: 'Червоткина',
        bethDate: new Date('1979-06-20'),
        yearStart: 2020,
        facultet: 'Дизайн',};

    const newStudent_7 = {name: 'Роман',
        midlename: 'Владимирович',
        surname: 'Рябчиков',
        bethDate: new Date('1987-12-14'),
        yearStart: 2015,
        facultet: 'Web Developer',};

    const newStudent_8 = {name: 'Петр',
        midlename: 'Тимофеевич',
        surname: 'Рудин',
        bethDate: new Date('1989-10-23'),
        yearStart: 2014,
        facultet: 'Web Developer',};

    return [newStudent_1, newStudent_2, newStudent_3,
    newStudent_4, newStudent_5, newStudent_6,
    newStudent_7, newStudent_8,];

  };
  // функция возвращающая стартовый массив со студентами
  let startExpelledStudentsArr = () => {
    const newStudent_1 = {name: 'Роман',
                            midlename: 'Викторович',
                            surname: 'Козлов',
                            bethDate: new Date('1979-06-01'),
                            yearStart: 2019,
                            facultet: 'Web Developer',};

    const newStudent_2 = {name: 'Игорь',
                          midlename: 'Сергеевич',
                          surname: 'Бармалейкин',
                          bethDate: new Date('2002-08-11'),
                          yearStart: 2019,
                          facultet: 'Дизайн',};

    const newStudent_3 = {name: 'Наталья',
                          midlename: 'Викторовна',
                          surname: 'Шапокляк',
                          bethDate: new Date('1998-04-17'),
                          yearStart: 2016,
                          facultet: 'Разработчик Python',};

    return [newStudent_1, newStudent_2, newStudent_3,];
  };
  // функция рендеринга таблицы по массиву со студентами
  function renderStudentTable(poinToPastTable, studentArr, poinToPastExpelledTable, expelledStudentArr) {
    // находим тело таблицы
    const tbody = poinToPastTable;
    // удаляем старое тело таблицы
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    // формируем новое тело таблицы - Заполняем таблицу студентами
    studentArr.forEach((student, index) => {
      const tr = document.createElement('tr');
      // Первая ячейка таблицы
      let td = document.createElement('td');
      let content = document.createElement('div');
      let container_cell = document.createElement('div');
      content.textContent = index + 1;
      container_cell.classList = 'col_1';
      container_cell.append(content);
      td.append(container_cell);
      td.style.borderRight= '1px solid rgb(100, 100, 100)'
      tr.append(td);
      // Вторая ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = student.surname + ' ' + student.name + ' ' + student.midlename;
      container_cell.classList = 'col_2';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Третья ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = student.facultet;
      container_cell.classList = 'col_3';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Четвертая ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = getStrDate(student.bethDate) + ' ' + getStrAge(student.bethDate);
      container_cell.classList = 'col_4';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Пятая ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = getStudyPeriod(student.yearStart) + getCurrentCourse(student.yearStart);
      container_cell.classList = 'col_5';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Шестая ячейка таблицы
      td = document.createElement('td');
      btn_expell = document.createElement('button');
      btn_expell.type = 'button';
      btn_expell.style = 'display: block; font-size: 16px;' // margin-top: 5px; margin-bottom: 5px;'
      btn_expell.textContent = 'Отчислить'
      btn_expell.classList = 'btn btn-outline-danger btn_table btn_expell';
      btn_expell.index = index + 1;
      // Добавляем обработчик для кнопки - 'Отчислить'
      btn_expell.addEventListener('click',()=>{
      let textConfirm = "Вы уверены что хотите отчислить студента\n";
        textConfirm += '№ ' + (index + 1).toString() + ' - '
                        + studentArr[index].surname + ' '
                        + studentArr[index].name + ' '
                        + studentArr[index].midlename + ' ?';
        // Удаление если пользователь подтвердил
        if (confirm(textConfirm)) {
          // Удаляем студента из массива студентов
          expellStudent = studentArr.splice(index, 1)[0];
          // вставляем отчисленного студента в список отчисленных студентов
          expelledStudentArr.push(expellStudent);
          console.log('expellStudent -', expellStudent);
          // рендерим таблицы
          renderStudentTable(poinToPastTable, studentArr, poinToPastExpelledTable, expelledStudentArr);
          renderExpelledStudentTable(poinToPastTable, studentArr, poinToPastExpelledTable, expelledStudentArr);
          // Производим запись в Local Storage
          pushToLocalStorage(studentArr, expelledStudentArr);
        } else {
          const elems = document.querySelectorAll('tr:hover');
          if (elems.length > 0) {
            elems[0].classList.toggle("backGround_color_select");
          }
        };
      });

      container_cell = document.createElement('div');
      container_cell.classList = 'col_6';
      container_cell.append(btn_expell);
      td.append(container_cell);
      tr.append(td);
      tbody.append(tr);
    });
  };
  // функция рендеринга таблицы по массиву со отчисленными студентами
  function renderExpelledStudentTable(poinToPastTable, studentArr, poinToPastExpelledTable, expelledStudentArr) {
    // находим тело таблицы
    const tbody = poinToPastExpelledTable;
    // удаляем старое тело таблицы
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    // формируем новое тело таблицы - Заполняем таблицу студентами
    expelledStudentArr.forEach((student, index) => {
      const tr = document.createElement('tr');
      // Первая ячейка таблицы
      let td = document.createElement('td');
      let content = document.createElement('div');
      let container_cell = document.createElement('div');
      content.textContent = index + 1;
      container_cell.classList = 'col_1';
      container_cell.append(content);
      td.append(container_cell);
      td.style.borderRight= '1px solid rgb(100, 100, 100)'
      tr.append(td);
      // Вторая ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = student.surname + ' ' + student.name + ' ' + student.midlename;
      container_cell.classList = 'col_2';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Третья ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = student.facultet;
      container_cell.classList = 'col_3';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Четвертая ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = getStrDate(student.bethDate) + ' ' + getStrAge(student.bethDate);
      container_cell.classList = 'col_4';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Пятая ячейка таблицы
      td = document.createElement('td');
      content = document.createElement('div');
      container_cell = document.createElement('div');
      content.textContent = '..... ' + student.yearStart + ' год .....';
      container_cell.classList = 'col_5';
      container_cell.append(content);
      td.append(container_cell);
      tr.append(td);
      // Шестая ячейка таблицы
      td = document.createElement('td');
      btn_restore = document.createElement('button');
      btn_restore.type = 'button';
      btn_restore.style = 'display: block; font-size: 16px;'
      btn_restore.textContent = 'Восстановить'
      btn_restore.classList = 'btn btn-outline-primary btn_table btn_return';
      btn_restore.index = index + 1;
      // Добавляем обработчик для кнопки - 'Восстановить'
      btn_restore.addEventListener('click',()=>{
      let textConfirm = "Вы уверены что хотите восстановить студента\n";
        textConfirm += '№ ' + (index + 1).toString() + ' - '
                        + expelledStudentArr[index].surname + ' '
                        + expelledStudentArr[index].name + ' '
                        + expelledStudentArr[index].midlename + ' ?';
        // Удаление если пользователь подтвердил
        if (confirm(textConfirm)) {
          // Удаляем студента из массива студентов
          restoreStudent = expelledStudentArr.splice(index, 1)[0];
          // вставляем отчисленного студента в список отчисленных студентов
          studentArr.push(restoreStudent);
          console.log('restoreStudent -', restoreStudent);
          // рендерим таблицы
          renderStudentTable(poinToPastTable, studentArr, poinToPastExpelledTable, expelledStudentArr);
          renderExpelledStudentTable(poinToPastTable, studentArr, poinToPastExpelledTable, expelledStudentArr);
          // Производим запись в Local Storage
          pushToLocalStorage(studentArr, expelledStudentArr)
        } else {
          const elems = document.querySelectorAll('tr:hover');
          if (elems.length > 0) {
            elems[0].classList.toggle("backGround_color_select");
          }
        };
      });
      container_cell = document.createElement('div');
      container_cell.classList = 'col_6';
      container_cell.append(btn_restore);
      td.append(container_cell);
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
      case '10':
      case '11':
      case '12':
      case '13':
      case '14':
      case '15':
      case '16':
      case '17':
      case '18':
      case '19':
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
  // Функция сортировки массива студентов по году обучения по убыванию
  const getSortedStartYear = (studentsArr) => {
    // Сортируем массив по году обучения по возрастанию
    studentsArr.sort(function(a, b){
      const nameA=a.yearStart;
      const nameB=b.yearStart;
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
      errorMessage.textContent = "Ошибка в годе начала обучения, он меньше чем '2000 год'";
      return false;
    }
    // проверка факультета студента
    if (student.facultet.length === 0) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = "Ошибка в факультете студента, поле пустое";
      return false;
    }
    console.log('Валидация нового студента прошла успешно')
    return true;
  };
  // Функция создания нового студента
  function addNewStudent(student, studentArr) {
    studentArr.push(student);
  };
  // Функция записи массивов студентов в LocalStorage
  function pushToLocalStorage(studentArr, expStudentArr) {
    // переводим массивы в JSON формат
    const studentArrJson    = JSON.stringify(studentArr);
    const expStudentArrJson = JSON.stringify(expStudentArr);
    // кладем массивы в localstorage
    localStorage.setItem('studentArr',    studentArrJson);
    localStorage.setItem('expStudentArr', expStudentArrJson);
  };
  // Функция чтения массивов студентов из LocalStorage
  function getFromLocalStorage() {
    let studentArr = null;
    let expStudentArr = null;
    // забираем JSON по селектору из из LocalStorage
    const studentArrJson    = localStorage.getItem('studentArr');
    //console.log('studentArrJson', studentArrJson);
    if (studentArrJson !== null){
      // переводим JSON в маcсив обьектов
      let studentArrStr  = JSON.parse(studentArrJson);
      // Переводим дату в дату и года в int
      studentArr = studentArrStr.map(function(curStudent){
        return {name: curStudent.name,
                midlename: curStudent.midlename,
                surname: curStudent.surname,
                bethDate: new Date(curStudent.bethDate),
                yearStart: parseInt(curStudent.yearStart),
                facultet: curStudent.facultet,}
      });
    };
    const expStudentArrJson = localStorage.getItem('expStudentArr');
    //console.log('expStudentArrJson', expStudentArrJson);
    if (expStudentArrJson !== null){
      // переводим JSON в маcсив обьектов
      let expStudentArrStr = JSON.parse(expStudentArrJson);
      // Переводим дату в дату и года в int
      expStudentArr = expStudentArrStr.map(function(curStudent){
        return {name: curStudent.name,
                midlename: curStudent.midlename,
                surname: curStudent.surname,
                bethDate: new Date(curStudent.bethDate),
                yearStart: parseInt(curStudent.yearStart),
                facultet: curStudent.facultet,}
      });
    };
    return [studentArr, expStudentArr];
  };

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
    // элемент сообщение об ошибке на всплывающем окне
    const errorMessage = document.getElementById('error_mesage');
    // Первоначальный запуск приложения
    // Чтение массивов из LocalStorage
    let curentStudentArr;
    let curentExpelledStudentArr;
    [curentStudentArr, curentExpelledStudentArr] = getFromLocalStorage();
    //console.log('curentStudentArr', curentStudentArr);
    //console.log('curentExpelledStudentArr', curentExpelledStudentArr);
    // Если ключей массивов в Local Storage нет, то заполняем их первоначальными массивами
    if(localStorage.getItem('studentArr') === null) {
      // первоначальный массив студентов
      curentStudentArr = startStudentsArr();
      console.log('curentStudentArr', curentStudentArr);
    };
    if(localStorage.getItem('expStudentArr') === null) {
      // первоначальный массив отчисленных студентов
      curentExpelledStudentArr = startExpelledStudentsArr();
    };
    //console.log('curentStudentArr', curentStudentArr);
    //console.log('curentExpelledStudentArr', curentExpelledStudentArr);
    // Получаем обьекты тел таблиц
    const tableBody = document.getElementById('studentsTableBody');
    const expelledTableBody = document.getElementById('expelledStudentsTableBody');
    // Первоначальный рендернинг таблицы Студентов
    renderStudentTable(tableBody, curentStudentArr, expelledTableBody, curentExpelledStudentArr);
    // Первоначальный рендернинг таблицы Отчисленных Студентов
    renderExpelledStudentTable(tableBody, curentStudentArr, expelledTableBody, curentExpelledStudentArr);
    // Производим запись в Local Storage
    pushToLocalStorage(curentStudentArr, curentExpelledStudentArr);
    // Клик по кнопке Добавить студента
    btnAdd.addEventListener('click',()=>{
      addStudForm.style.display = 'block';
      // Очищаем Inputs
      inputSurname.value = '';
      inputFirstname.value = '';
      inputMidlename.value = '';
      inputData.value = '';
      inputYear.value = '';
      inputFacultet.value = '';
      errorMessage.style.visibility = 'hidden';
    });
    // Подписание всплывающей формы добавления студента
    addStudForm.addEventListener('submit', ()=>{
      // определение элементов формы для взаимодействия с ними
      const new_student = {};
      new_student.name = document.getElementById('firstname_input').value.trim();
      new_student.midlename = document.getElementById('midlename_input').value.trim();
      new_student.surname = document.getElementById('surname_input').value.trim();
      new_student.bethDate = new Date(document.getElementById('data_input').value);
      new_student.yearStart = parseInt(document.getElementById('year_input').value.trim());
      new_student.facultet = document.getElementById('facultet_input').value.trim();
      const errorMessage = document.getElementById('error_mesage');
      console.log('new_student',new_student)
      // Валидация данных
      if (ValidationEvent(new_student, errorMessage)) {
        addStudForm.style.display = 'none';
        console.log('new_student', new_student);
        addNewStudent(new_student, curentStudentArr);
        renderStudentTable(tableBody, curentStudentArr);
        pushToLocalStorage(curentStudentArr, curentExpelledStudentArr);
      } else {
        console.log('Валидация студента не прошла')
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
      renderStudentTable(tableBody, curentStudentArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Сортировки при нажатии ячейки заголовка таблицы - 'Факультет'
    const tableHeaderCellFacultet = document.getElementById('tableHeadCell_facultet');
    tableHeaderCellFacultet.addEventListener('click',()=>{
      // Сортируем массив со студентами и сохраняем его
      curentStudentArr = getSortedFacultet(curentStudentArr);
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableBody, curentStudentArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Сортировки при нажатии ячейки заголовка таблицы - 'Дата рождения и возраст'
    const tableHeaderCellDataBeth = document.getElementById('tableHeadCell_dataBeth');
    tableHeaderCellDataBeth.addEventListener('click',()=>{
      // Сортируем массив со студентами и сохраняем его
      curentStudentArr = getSortedBethDate(curentStudentArr);
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableBody, curentStudentArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Сортировки при нажатии ячейки заголовка таблицы - 'Годы обучения и номер курса'
    const tableHeaderCellStartYear = document.getElementById('tableHeadCell_startYear');
    tableHeaderCellStartYear.addEventListener('click',()=>{
      // Сортируем массив со студентами и сохраняем его
      curentStudentArr = getSortedStartYear(curentStudentArr);
      // рендерим таблицу с отсортированым массивом
      renderStudentTable(tableBody, curentStudentArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Ввод в фильтр ФИО
    const inputFilterFIO = document.getElementById('filter_FIO');
    inputFilterFIO.addEventListener('input', () => {
      filteredStudentsArr = curentStudentArr.filter(function checkFIO(currentStudent) {
        stringFIO = currentStudent.surname + currentStudent.name + currentStudent.midlename;
        if (stringFIO.toLowerCase().includes(inputFilterFIO.value.toLowerCase())) {
          return currentStudent;
        };
      });
      // рендерим таблицу с отфильтрованным массивом
      renderStudentTable(tableBody, filteredStudentsArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Ввод в фильтр Факультет
    const inputFilterFacultet = document.getElementById('filter_fakultet');
    inputFilterFacultet.addEventListener('input', () => {
      filteredStudentsArr = curentStudentArr.filter(function checkfacultet(currentStudent) {
        if (currentStudent.facultet.toLowerCase().includes(inputFilterFacultet.value.toLowerCase())) {
          return currentStudent;
        };
      });
      // рендерим таблицу с отфильтрованным массивом
      renderStudentTable(tableBody, filteredStudentsArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Ввод в фильтр год начала обучения
    const inputFilterTimeStart = document.getElementById('filter_timeStart');
    inputFilterTimeStart.addEventListener('input', () => {
      filteredStudentsArr = curentStudentArr.filter(function checkYearStart(currentStudent) {
        if (currentStudent.yearStart.toString().includes(inputFilterTimeStart.value)) {
          return currentStudent;
        };
      });
      // рендерим таблицу с отфильтрованным массивом
      renderStudentTable(tableBody, filteredStudentsArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Ввод в фильтр год конца обучения
    const inputFilterTimeFinish = document.getElementById('filter_timeFinish');
    inputFilterTimeFinish.addEventListener('input', () => {
      filteredStudentsArr = curentStudentArr.filter(function checkYearStart(currentStudent) {
        if ((currentStudent.yearStart + 4).toString().includes(inputFilterTimeFinish.value)) {
          return currentStudent;
        };
      });
      // рендерим таблицу с отфильтрованным массивом
      renderStudentTable(tableBody, filteredStudentsArr, expelledTableBody, curentExpelledStudentArr);
    });
    // Обработка клика в теле таблицы студентов
    const tbody = document.getElementById('studentsTableBody');
    tbody.addEventListener('click',()=>{
      const elems = document.querySelectorAll('tr:hover');
      if (elems.length > 0) {
        elems[0].classList.toggle("backGround_color_select");
      }
    });
    // Обработка нажатия на кнопку - Удалить студента
    const btnDelete = document.getElementById('btn-del');
    btnDelete.addEventListener('click',()=>{
      // Получаем список студентов отмеченных красным цветом
      const delSudents = document.getElementsByClassName('backGround_color_select');
      console.log(delSudents)
      if (delSudents.length > 0) {
        // Достаем их номера и фамилии
        const delStudentArr = Array.from(delSudents).map(function(curStudent) {
          return({num: curStudent.childNodes[0].childNodes[0].childNodes[0].innerHTML,
                  fio: curStudent.childNodes[1].childNodes[0].childNodes[0].innerHTML});
        });
        // Переводим номера и фамилии в строки
        let textConfirm = "Вы уверены что хотите удалить слудующих студентов ?\n";
        delStudentArr.forEach(function(curDelStudent){
          textConfirm += '№ ' + curDelStudent.num.toString() + ' - ' + curDelStudent.fio + '\n';
        });
        // Удаление если пользователь подтвердил
        if (confirm(textConfirm)) {
          // Удаляем в обратном порядке
          for (i=delStudentArr.length - 1; i >= 0; i--) {
            delNum = parseInt(delStudentArr[i].num);
            curentStudentArr.splice(delNum-1, 1);
          }
        };
        // рендерим таблицу с массивом после удаления
        renderStudentTable(tableBody, curentStudentArr, expelledTableBody, curentExpelledStudentArr);
        pushToLocalStorage(curentStudentArr, curentExpelledStudentArr);
      };
    });

  });

})();
