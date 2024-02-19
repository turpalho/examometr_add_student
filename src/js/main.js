Telegram.WebApp.ready();
const mainButton = window.Telegram.WebApp.MainButton;
mainButton.text = "ПРОДОЛЖИТЬ";
mainButton.enable();
mainButton.show();

mainButton.onClick(function(){
    const studentContainers = document.querySelectorAll(".student");
    const studentsData = [];

    studentContainers.forEach(function (container) {
        const studentId = container.dataset.studentId;
        const firstName = container.querySelector('input[name="first_name"]').value;
        const lastName = container.querySelector('input[name="last_name"]').value;
        const middleName = container.querySelector('input[name="middle_name"]').value;

        const studentInfo = {
            name: firstName,
            surname: lastName,
            middleName: middleName
        };

        studentsData.push(studentInfo);
    });

    Telegram.WebApp.sendData(JSON.stringify(studentsData));
});

document.addEventListener("DOMContentLoaded", function () {
    const addStudentBtn = document.getElementById("addStudentBtn");
    const additionalStudents = document.getElementById("additionalStudents");

    let studentIdCounter = 2; // Начинаем счетчик с 2, так как уже есть один студент в форме

    addStudentBtn.addEventListener("click", function () {
      const newStudentFields = `
        <div class="student" data-student-id="${studentIdCounter}">
          <label class="left">Ученик ${studentIdCounter}</label>
          <label class="fio left" for="first_name">Имя:</label>
          <input class="right" type="text" name="first_name" required />
          <label class="fio left" for="last_name">Фамилия:</label>
          <input class="right" type="text" name="last_name" required />
          <label class="fio left" for="middle_name">Отчество:</label>
          <input class="right" type="text" name="middle_name" />
        </div>
      `;
      additionalStudents.insertAdjacentHTML("beforeend", newStudentFields);
      studentIdCounter++;
    });
  });
