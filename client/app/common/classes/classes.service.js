import * as _ from 'lodash';
class Classes {
  grades
  currentGrade
  constructor($log, $rootScope) {
    "ngInject";

    this.$log = $log;
    this.$rootScope = $rootScope;
    this.grades = [
      {
        name: "grade for test 1",
        subjects: [
          {
            name: "المادة الرابعة",
            selected: true,
            classes: [
              {
                name: 'class for test 1',
                selected: true
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
          {
            name: "المادة الخامسة",
            selected: true,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
          {
            name: "المادة السابعة",
            selected: false,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
        ]
      },
      {
        name: "grade for test 2",
        subjects: [
          {
            name: "المادة الرابعة",
            selected: true,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
          {
            name: "المادة الخامسة",
            selected: false,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: true
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
          {
            name: "المادة السابعة",
            selected: true,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
        ]
      },
      {
        name: "grade for test 3",
        subjects: [
          {
            name: "المادة الرابعة",
            selected: false,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
          {
            name: "المادة الخامسة",
            selected: true,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: false
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
          },
          {
            name: "المادة السابعة",
            selected: true,
            classes: [
              {
                name: 'class for test 1',
                selected: false
              },
              {
                name: 'class for test 2',
                selected: false
              },
              {
                name: 'class for test 3',
                selected: true
              },
              {
                name: 'class for test 4',
                selected: false
              },
              {
                name: 'class for test 5',
                selected: false
              },
            ]
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

  setCurrentSubject(subject) {
    this.currentSubject = subject;
  }

  getCurrentSubject() {
    return this.currentSubject;
  }

  setCurrentGrade(grade) {
    this.currentGrade = grade;
    this.$rootScope.$broadcast('onCurrentGradeUpdated');
  }
  
  updateGradesData(grade) {
    const index = _.findIndex(this.grades, this.currentGrade);
    this.grades[index] = grade;
  }
};

export default Classes;
