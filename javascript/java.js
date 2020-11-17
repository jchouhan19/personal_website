const courselist = [course_A = { code: 1620, name: "Web Fundamental Technologies" },
                    course_B = {code: 1630, name: "Database Systems" },
                    course_C ={code: 1420,  name: "Intro to Sys Admin"}];

let code;
let course_confirm = false;
do { 
    code = window.prompt("Enter your 4 digit course code: ");
  } while (isNaN(Number(code))||code.length !== 4 )

for(let x of courselist){
    if (x.code===Number(code)){
        alert(`Yes I am taking the course: ACIT${x.code}-${x.name}`)
        course_confirm = true;
    }

}
if (! course_confirm) {
    courselist.push(course_D ={code: Number(code), name: null})
    alert(`Course ACIT${Number(code)} entered successfully`)
}