const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC353",
            enrolled: 26,
            days: "TTH",
            instructor: "Bro T"
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'}
    ],

    changeStudentenrollment: function(sectionNum, willAdd) {
        const sectionIndex = this.sections.findIndex(
            (section => section.sectionNum == sectionNum)
        );
        if (sectionIndex >= 0) {
            if(willAdd == true){
                this.sections[sectionIndex].enrolled++;
            }
            else{
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);}
        },
  };

function setCourseInfo(course){
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }

  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeStudentenrollment(sectionNum, willAdd = true);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeStudentenrollment(sectionNum, willAdd = false);
  });
 
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);

