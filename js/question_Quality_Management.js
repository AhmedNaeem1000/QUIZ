
// creating an array and passing the number, questions, options, and answers
let questions = [


  {
    numb: 1,
    question: "كيف تختلف انظمة المعلومات عن تكنولوجيا المعلومات",
    answer: "تكنولوجيا المعلومات تركز علي التكنولوجيا بينما انظمة المعلومات تدمج العمليات والبشر",
    options: [
      "انظمة المعلومات تشمل فقط البرمجيات",
      "تكنولوجيا المعلومات تشمل العمليات والبشر",
      "تكنولوجيا المعلومات تركز علي التكنولوجيا بينما انظمة المعلومات تدمج العمليات والبشر",
      "لا يوجد فرق",

    ]
  },
    {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },
  {
    numb: 2,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",

    ]
  },

];

// Shuffle questions array
questions.sort(function () {
  return 0.5 - Math.random();
});



// Select the first 30 questions
questions = questions.slice(0, 50);
