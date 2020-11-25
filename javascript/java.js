
function create_course_array() {
    let courselist = []
    let course = {}
    let search_a = document.querySelectorAll("section div a")
    let search_d = document.querySelector(".web_date")
    for (object of search_a) {
        course = { code: object.innerHTML, date: search_d.innerHTML }
        courselist.push(course)
    }

    return courselist
}

function findCourse(courselist) {
    console.log(courselist)
    let code_1;
    let course_confirm = false;
    do {
        code_1 = window.prompt("Enter your 4 digit course code: ");
    } while (isNaN(Number(code_1)) || code_1.length !== 4) 
    for (course in courselist) {
        for (co in courselist[course])
       { 
        console.log(courselist[course][co])
        if (courselist[course][co].includes(String(code_1))) {
            let c = document.getElementsByClassName('c'+ String(code_1))
            c[0].style.backgroundColor = 'green'
            c[1].style.backgroundColor = 'green'
            c[2].style.backgroundColor = 'green'
            course_confirm = true;
        }}
    }
    if ((course_confirm === false)) {
        let course_new = document.createElement('div')
        course_new.innerHTML = code_1 + '<br> Fall 2020'
        let section = document.getElementById('course')
        section.appendChild(course_new)

        let course_desc = document.createElement('div')
        course_desc.innerHTML = 'N/A'
        let section_desc = document.getElementById('course')
        section_desc.appendChild(course_desc)


    }
}


let courselist = create_course_array()
findCourse(courselist)

// // for (let x of courselist) {
//     // if (x.code === Number(code)) {
//         alert(`Yes I am taking the course: ACIT${x.code}-${x.name}`)
//         course_confirm = true;
//     // }

// // }
// // if (!course_confirm) {
//     // courselist.push(course_D = { code: Number(code), name: null })
//     // alert(`Course ACIT${Number(code)} entered successfully`)
// // }