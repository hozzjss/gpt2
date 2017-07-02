import * as _ from 'lodash';
class Classes {
  grades
  currentGrade
  constructor($log) {
    "ngInject";

    this.$log = $log;
    this.grades = [
      {
        name: "grade for test 1",
        subjects: [
          {
            name: "المادة الرابعة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
          {
            name: "المادة الخامسة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
          {
            name: "المادة السابعة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
        ]
      },
      {
        name: "grade for test 2",
        subjects: [
          {
            name: "المادة الرابعة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
          {
            name: "المادة الخامسة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
          {
            name: "المادة السابعة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
        ]
      },
      {
        name: "grade for test 3",
        subjects: [
          {
            name: "المادة الرابعة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
          {
            name: "المادة الخامسة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
          {
            name: "المادة السابعة",
            selected: false,
            classes: {
              "class for test 1": false,
              "class for test 2": false,
              "class for test 3": false,
              "class for test 4": false,
              "class for test 5": false,
            }
          },
        ]
      }
    ];
  }

  getCurrentGrade() {
    return this.currentGrade;
  }

  getGrades = () => {
    return this.grades;
  };

  setCurrentGrade(grade) {
    this.currentGrade = grade;
  }
  updateGradesData(grade) {
    const index = _.findIndex(this.grades, this.currentGrade);
    this.grades[index] = grade;
  }
};

export default Classes;
