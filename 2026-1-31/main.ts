import { ClassRoom } from "./ClassRoom";
import { Student } from "./Student";
import { TeachingAssistant } from "./TeachingAssistant";

// Create classRoom
const typeScriptClass = new ClassRoom("TypeScript basic");

// Create student
const nguyenHieu = new Student("Nguyen Duc Hieu");
const leCuong = new Student("Le Cao Cuong");
const buiHuy = new Student("Bui Gia Huy");
const truongUy = new Student("Truong Cong Uy");

// add student | students
// add one more student
typeScriptClass.addStudent(nguyenHieu);
// ClassRoom {
//   name: 'TypeScript basic',
//   students: [
//     Student { name: 'Nguyen Duc Hieu' },
//   ]
// }

// add more students
typeScriptClass.addStudents([leCuong, buiHuy, truongUy]);
// ClassRoom {
//   name: 'TypeScript basic',
//   students: [
//     Student { name: 'Nguyen Duc Hieu' },
//     Student { name: 'Le Cao Cuong' },
//     Student { name: 'Bui Gia Huy' },
//     Student { name: 'Truong Cong Uy' }
//   ]
// }

// Execution attempt 1
// typeScriptClass.postAnnouncement("Tomorrow we'll have an OOP tets");
/*
ClassRoom TypeScript basic new announcement Tomorrow we'll have an OOP tets
Student Nguyen Duc Hieu received Tomorrow we'll have an OOP tets
Student Le Cao Cuong received Tomorrow we'll have an OOP tets
Student Bui Gia Huy received Tomorrow we'll have an OOP tets
Student Truong Cong Uy received Tomorrow we'll have an OOP tets
*/

// add student
const duongHinh = new Student("Duong Quoc Hinh");

// add teaching assistant
const kongMinh = new TeachingAssistant("Kong Minh");

typeScriptClass.addStudents([duongHinh, kongMinh]);
// ClassRoom {
//   name: 'TypeScript basic',
//   students: [
//     Student { name: 'Nguyen Duc Hieu' },
//     Student { name: 'Le Cao Cuong' },
//     Student { name: 'Bui Gia Huy' },
//     Student { name: 'Truong Cong Uy' },
//     Student { name: 'Duong Quoc Hinh' },
//     TeachingAssistant { name: 'Kong Minh' }
//   ]
// }

// remove student | students
// remove student
typeScriptClass.removeStudent(duongHinh);
// ClassRoom {
//   name: 'TypeScript basic',
//   students: [
//     Student { name: 'Nguyen Duc Hieu' },
//     Student { name: 'Le Cao Cuong' },
//     Student { name: 'Bui Gia Huy' },
//     Student { name: 'Truong Cong Uy' },
//     TeachingAssistant { name: 'Kong Minh' }
//   ]
// }

// remove students
typeScriptClass.removeStudents([truongUy, buiHuy]);
// ClassRoom {
//   name: 'TypeScript basic',
//   students: [
//     Student { name: 'Nguyen Duc Hieu' },
//     Student { name: 'Le Cao Cuong' },
//     TeachingAssistant { name: 'Kong Minh' }
//   ]
// }

// Execution attempt 2
typeScriptClass.postAnnouncement("Tomorrow we'll have an OOP tets");
/*
ClassRoom TypeScript basic new announcement Tomorrow we'll have an OOP tets
Student Nguyen Duc Hieu received Tomorrow we'll have an OOP tets
Student Le Cao Cuong received Tomorrow we'll have an OOP tets
Teaching assistant Kong Minh received Tomorrow we'll have an OOP tets, so remember to prepare your lecture.
*/
