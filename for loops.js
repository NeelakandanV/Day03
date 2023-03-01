const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => { 

  var Resume = [{"personal details" :
      {
      "Name" : "Neelakandan Venkatesan",
      "Age"  : "22",
      "Gender" : "Male",
      "Blood group" : "B-ve",
      "Marital status" : "single",
      "Mobile" : "8778848985",
      "Email id" : "hari0709venkatesan@gmail.com",
      "Hobbies" : "Listening Music, Reading newspaper, Coin collecting"
  },
  "Educational Qualification" :
  [{
      "Qualification" : "B.E ECE",
      "Percentage" : "86.3",
      "Institution" : "Hindusthan college of engineering and technology, Coimbatore",
      "University" : "Anna University",
      "Year of passing" : "2022"
       },{
      "Qualification" : "HSC",
      "Percentage" : "83.7",
      "Institution" : "Sri sarada vidyalaya matric higher secondary school,Ulundurpet",
      "University" : "Tamil Nadu state board",
      "Year of passing" : "2018"
      },{
      "Qualification" : "SSLC",
      "Percentage" : "97",
      "Institution" : "Sri sarada vidyalaya matric higher secondary school,Ulundurpet",
      "University" : "Tamil Nadu state board",
      "Year of passing" : "2018"
  }],
  "Skillset" :{
      "programming" : "Javascript",
      "skills" : "Problem solving and Logical thinking"
  },
  "Projects" :{
      "Mini project" :"IOT based smart irrigation system.The project’s main idea is to notify the farmers about the moisture content in the soil frequently through their mobile using internet",
      "Main project" :  "A smart chair with posture recognition and temperature monitoring system. This chair recognizes the wrong sitting postures and monitors body  temperature and notify the person using the lcd display and buzzer mounted in the chair."
  },
  }];


  // for loop

 //for(i=0;i<Resume.length;i++){
 //    console.log(Resume[i]);
 //}

 
 // for of loop

 //for(var myResume of Resume){
 //    console.log(myResume);
 //}


 // for in loop
 for(var key in Resume){
     console.log(Resume[key]);
 }
 

 // forEach loop

 //Resume.forEach(detail =>
 //    console.log(detail));
 
});

// Expected output

//{ 'personal details': 
//   { Name: 'Neelakandan Venkatesan',
//     Age: '22',
//     Gender: 'Male',
//     'Blood group': 'B-ve',
//     'Marital status': 'single',
//     Mobile: '8778848985',
//     'Email id': 'hari0709venkatesan@gmail.com',
//     Hobbies: 'Listening Music, Reading newspaper, Coin collecting' },
//  'Educational Qualification': 
//   [ { Qualification: 'B.E ECE',
//       Percentage: '86.3',
//       Institution: 'Hindusthan college of engineering and technology, Coimbatore',
//       University: 'Anna University',
//       'Year of passing': '2022' },
//     { Qualification: 'HSC',
//       Percentage: '83.7',
//       Institution: 'Sri sarada vidyalaya matric higher secondary school,Ulundurpet',
//       University: 'Tamil Nadu state board',
//       'Year of passing': '2018' },
//     { Qualification: 'SSLC',
//       Percentage: '97',
//       Institution: 'Sri sarada vidyalaya matric higher secondary school,Ulundurpet',
//       University: 'Tamil Nadu state board',
//       'Year of passing': '2018' } ],
//  Skillset: 
//   { programming: 'Javascript',
//     skills: 'Problem solving and Logical thinking' },
//  Projects: 
//   { 'Mini project': 'IOT based smart irrigation system.The project’s main idea is to notify the farmers about the moisture content in the soil frequently through their mobile using internet',
//     'Main project': 'A smart chair with posture recognition and temperature monitoring system. This chair recognizes the wrong sitting postures and monitors body  temperature and notify the person using the lcd display and buzzer mounted in the chair.' } }{ 'personal details': 
//     { Name: 'Neelakandan Venkatesan',
//       Age: '22',
//       Gender: 'Male',
//       'Blood group': 'B-ve',
//       'Marital status': 'single',
//       Mobile: '8778848985',
//       'Email id': 'hari0709venkatesan@gmail.com',
//       Hobbies: 'Listening Music, Reading newspaper, Coin collecting' },
//    'Educational Qualification': 
//     [ { Qualification: 'B.E ECE',
//         Percentage: '86.3',
//         Institution: 'Hindusthan college of engineering and technology, Coimbatore',
//         University: 'Anna University',
//         'Year of passing': '2022' },
//       { Qualification: 'HSC',
//         Percentage: '83.7',
//         Institution: 'Sri sarada vidyalaya matric higher secondary school,Ulundurpet',
//         University: 'Tamil Nadu state board',
//         'Year of passing': '2018' },
//       { Qualification: 'SSLC',
//         Percentage: '97',
//         Institution: 'Sri sarada vidyalaya matric higher secondary school,Ulundurpet',
//         University: 'Tamil Nadu state board',
//         'Year of passing': '2018' } ],
//    Skillset: 
//     { programming: 'Javascript',
//       skills: 'Problem solving and Logical thinking' },
//    Projects: 
//     { 'Mini project': 'IOT based smart irrigation system.The project’s main idea is to notify the farmers about the moisture content in the soil frequently through their mobile using internet',
//       'Main project': 'A smart chair with posture recognition and temperature monitoring system. This chair recognizes the wrong sitting postures and monitors body  temperature and notify the person using the lcd display and buzzer mounted in the chair.' } }