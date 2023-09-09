const brojProfesor = {
  1: {
    name: "Јорданка Недеска Симиџиоска",
    predmet: "Физика",
    predmetCeloIme: "Физика",
  },
  2: {
    name: "Славчо Китаноски",
    predmet: "Музичко",
    predmetCeloIme: "Музичко образование",
  },
  10: {
    name: "Мануела Јанкоска",
    predmet: "Англиски",
    predmetCeloIme: "Англиски јазик",
  },
  18: {
    name: "Климент Спасески",
    predmet: "Историја",
    predmetCeloIme: "Историја",
  },

  19: {
    name: "Билјана Аврамоска",
    predmet: "Ел. материјали",
    predmetCeloIme: "Електротехнички материјали",
  },
  22: {
    name: "Емилија Колеска",
    predmet: "Математика",
    predmetCeloIme: "Математика",
  },
  5: {
    name: "Ирина Димзова Треневска",
    predmet: "Математика",
    predmetCeloIme: "Математика",
  },
  24: {
    name: "Валентино Костадиноски",
    predmet: "Спорт",
    predmetCeloIme: "Спорт и спортски активности",
  },
  26: {
    name: "Тоде Дукоски",
    predmet: "Техничка к.",
    predmetCeloIme: "Техничка Комуникација",
  },
  33: {
    name: "Билјана Попоска",
    predmet: "Македонски",
    predmetCeloIme: "Македонски јазик",
  },
  34: {
    name: "Жанета Стаиќ Митреска",
    predmet: "Ликовно",
    predmetCeloIme: "Ликовно образование",
  },
  38: {
    name: "Билјана Божиноска",
    predmet: "Граѓанско",
    predmetCeloIme: "Граѓанско образование",
  },
  45: {
    name: "Љубица Смилесвка Мојсовска",
    predmet: "Електротехника",
    predmetCeloIme: "Електротехника",
  },
  4: {
    name: "Сашо Ѓеорѓиески",
    predmet: "Електротехника",
    predmetCeloIme: "Електротехника",
  },
  47: {
    name: "Ацо Вретоски",
    predmet: "Современи т.",
    predmetCeloIme: "Современи технологии во економски сектори ",
  },
  51: {
    name: "Александра Настоска Николоска",
    predmet: "Информатика",
    predmetCeloIme: "Информатика",
  },
  66: {
    name: "Верица Јосифоска",
    predmet: "Слободни часови",
    predmetCeloIme: "Слободни часови",
  },
  67: { name: "", predmet: "", predmetCeloIme: "" },
  470: {
    name: "Ацо Вретоски",
    predmet: "Класен",
    predmetCeloIme: "Класен час",
  },
  100: {
    name: "Мануела Јанкоска",
    predmet: "Класен",
    predmetCeloIme: "Класен час",
  },
  2645: {
    name: "Тоде Дукоски/Љубица Смилевска Мојсовска",
    predmet: "Електротехника / Тех. к.",
    predmetCeloIme: "Електротехника/Техничка комуникација - вежби",
  },
  264: {
    name: "Тоде Дукоски/Сашо ЃеорЃиески",
    predmet: "Електротехника / Тех. к.",
    predmetCeloIme: "Електротехника/Техничка комуникација - вежби",
  },
};

const casInfoPredpladne = [
  ["07:30", "8:15"],
  ["08:20", "09:05"],
  ["09:25", "10:10"],
  ["10:15", "11:00"],
  ["11:10", "11:50"],
  ["11:55", "12:35"],
  ["12:40", "13:20"],
];
const casInfoPopladne = [
  ["13:30", "14:15"],
  ["14:20", "15:05"],
  ["15:25", "16:10"],
  ["16:15", "17:00"],
  ["17:10", "17:50"],
  ["17:55", "18:35"],
  ["18:40", "19:20"],
];

const casInfoPredSkr5 = [
  ["07:30", "08:10"],
  ["08:15", "08:55"],
  ["09:15", "09:55"],
  ["10:00", "10:40"],
  ["10:50", "11:25"],
  ["11:30", "12:05"],
  ["12:10", "12:45"],
];
const casInfoPopSkr5 = [
  ["13:30", "14:10"],
  ["14:15", "14:55"],
  ["15:15", "15:55"],
  ["16:00", "16:40"],
  ["16:50", "17:25"],
  ["17:30", "18:05"],
  ["18:10", "18:45"],
];

const casInfoPredSkr10 = [
  ["07:30", "08:05"],
  ["08:10", "08:45"],
  ["09:05", "09:40"],
  ["09:45", "10:20"],
  ["10:30", "11:00"],
  ["11:05", "11:35"],
  ["11:40", "12:10"],
];
const casInfoPopSkr10 = [
  ["13:30", "14:05"],
  ["14:10", "14:45"],
  ["15:05", "15:40"],
  ["15:45", "16:20"],
  ["16:30", "17:00"],
  ["17:05", "17:35"],
  ["17:40", "18:10"],
];
// const raspored = [
//   18, 2, 26, 38, 1, 33, 45, 10, 33, 33, 470, 10, 2645, 24, 22, 1, 38, 2645, 18,
//   51, 47, 47, 24, 34, 45, 22, 22, 19, 66, 45, 19, 51, 66, 66, 66,
// ];
const rasporedI4 = [
  4, 38, 100, 1, 10, 18, 2, 19, 33, 51, 33, 24, 24, 18, 51, 5, 10, 5, 5, 26, 1,
  33, 264, 4, 66, 19, 47, 264, 4, 67, 34, 47, 38, 66, 67,
];

const days = ["Понеделник", "Вторник", "Среда", "Четврток", "Петок"];
const table = document.querySelector("table");
const popUp = document.querySelector(".pop-up");
const casInfo = document.querySelector(".cas-info");
let tableData = document.querySelectorAll("td");
for (let i = 0; i < rasporedI4.length; i++) {
  tableData[i].textContent = brojProfesor[rasporedI4[i]].predmet;
  tableData[i].setAttribute("data-pred", rasporedI4[i]);
}
let renderPopupNew = function (cas, day, predmet) {
  casInfo.innerHTML = "";

  html = `<h3>Час Инфо:</h3><br>
                <p>Професор:<strong>${brojProfesor[predmet].name}</strong></p>
                <p>Предмет:<strong>${
                  brojProfesor[predmet].predmetCeloIme
                }</strong></p>
                <br>
                <p><strong>Час-${cas}   ${day}:</strong></p><br>
                <p>Часови по <strong>45</strong>мин:
                <p>Претпладне: Од <strong> ${
                  casInfoPredpladne[cas - 1][0]
                }</strong> до <strong>${
    casInfoPredpladne[cas - 1][1]
  }</strong></p>
                <p>Попладне: Од <strong>${
                  casInfoPopladne[cas - 1][0]
                }</strong> до <strong>${
    casInfoPopladne[cas - 1][1]
  }</strong></p><br>
                <p>Скратени часови по <strong>5</strong> минути:</p>
                <p>Претпладне: Од  <strong>${
                  casInfoPredSkr5[cas - 1][0]
                }</strong> до <strong>${
    casInfoPredSkr5[cas - 1][1]
  }</strong></p>
                <p>Попладне: Од <strong>${
                  casInfoPopSkr5[cas - 1][0]
                }</strong> до <strong>${
    casInfoPopSkr5[cas - 1][1]
  }</strong></p><br>
  
                <p>Скратени часови по <strong>10</strong> минути:</p>
                <p>Претпладне: Од <strong>${
                  casInfoPredSkr10[cas - 1][0]
                }</strong> до <strong>${
    casInfoPredSkr10[cas - 1][1]
  }</strong></p>
                <p>Попладне: Од <strong>${
                  casInfoPopSkr10[cas - 1][0]
                }</strong> до <strong>${
    casInfoPopSkr10[cas - 1][1]
  }</strong></p><br>
          `;
  casInfo.insertAdjacentHTML("beforeEnd", html);
};

table.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target.tagName);
  let row = e.target.closest("tr");

  let colums = row.querySelectorAll("td");
  // console.log(colums);
  let cols = [...colums];
  let dayNum = cols.findIndex((col) => col == e.target);
  let day = days[dayNum];

  let casNum = Number(row.dataset.id);

  if (e.target.textContent && e.target.tagName == "TD") {
    document.querySelector(".pop-up").style.display = "block";

    let predmet = e.target.dataset.pred;
    renderPopupNew(casNum, day, predmet);
  }
});
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".pop-up").style.display = "none";
});
