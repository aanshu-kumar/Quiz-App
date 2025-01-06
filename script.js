document.addEventListener("DOMContentLoaded", () => {
  let QuizData = {
    sections: [
      {
        sectionTitle: "chemistry",
        questions: [
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "HO2"],
            answer: "H2O",
          },
          {
            questionType: "mcq",
            question: "Which element is known as the 'King of Chemicals'?",
            options: ["Sulfuric Acid", "Hydrogen", "Oxygen", "Nitrogen"],
            answer: "Sulfuric Acid",
          },
          {
            questionType: "mcq",
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
            answer: "Nitrogen",
          },
          {
            questionType: "mcq",
            question: "What is the pH value of pure water at 25°C?",
            options: ["7", "6", "8", "5"],
            answer: "7",
          },
          {
            questionType: "mcq",
            question: "Which element is represented by the symbol 'Fe'?",
            options: ["Iron", "Fluorine", "Phosphorus", "Francium"],
            answer: "Iron",
          },
          {
            questionType: "mcq",
            question:
              "What type of bond is formed by the sharing of electron pairs?",
            options: [
              "Ionic bond",
              "Covalent bond",
              "Metallic bond",
              "Hydrogen bond",
            ],
            answer: "Covalent bond",
          },
          {
            questionType: "mcq",
            question: "Which acid is commonly found in vinegar?",
            options: [
              "Acetic Acid",
              "Sulfuric Acid",
              "Hydrochloric Acid",
              "Citric Acid",
            ],
            answer: "Acetic Acid",
          },
          {
            questionType: "mcq",
            question: "What is the atomic number of carbon?",
            options: ["6", "8", "12", "14"],
            answer: "6",
          },
          {
            questionType: "mcq",
            question:
              "What is the process by which plants convert sunlight into chemical energy?",
            options: [
              "Photosynthesis",
              "Respiration",
              "Fermentation",
              "Oxidation",
            ],
            answer: "Photosynthesis",
          },
          {
            questionType: "mcq",
            question:
              "What is the term for a substance that speeds up a chemical reaction without being consumed?",
            options: ["Catalyst", "Reactant", "Product", "Enzyme"],
            answer: "Catalyst",
          },
        ],
      },
      {
        sectionTitle: "Mathematics",
        questions: [
          {
            questionType: "mcq",
            question: "What is the value of 2 + 2 * 2?",
            options: ["4", "6", "8", "10"],
            answer: "6",
          },
          {
            questionType: "mcq",
            question: "What is the square root of 64?",
            options: ["4", "6", "8", "10"],
            answer: "8",
          },
          {
            questionType: "mcq",
            question:
              "What is the value of π (pi) rounded to two decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            answer: "3.14",
          },
          {
            questionType: "mcq",
            question:
              "What is the next number in the sequence: 2, 4, 6, 8, ...?",
            options: ["10", "12", "14", "16"],
            answer: "10",
          },
          {
            questionType: "mcq",
            question: "What is the product of 7 multiplied by 9?",
            options: ["54", "63", "72", "81"],
            answer: "63",
          },
          {
            questionType: "mcq",
            question: "What is the sum of angles in a triangle?",
            options: [
              "90 degrees",
              "120 degrees",
              "180 degrees",
              "360 degrees",
            ],
            answer: "180 degrees",
          },
          {
            questionType: "mcq",
            question: "What is the area of a square with side length 5 units?",
            options: [
              "20 square units",
              "25 square units",
              "30 square units",
              "35 square units",
            ],
            answer: "25 square units",
          },
          {
            questionType: "mcq",
            question: "What is the value of 3 to the power of 4?",
            options: ["9", "12", "27", "81"],
            answer: "81",
          },
          {
            questionType: "mcq",
            question: "What is the sum of the first 10 positive integers?",
            options: ["45", "50", "55", "60"],
            answer: "55",
          },
          {
            questionType: "mcq",
            question:
              "What is the circumference of a circle with radius 5 units?",
            options: ["10π", "15π", "20π", "25π"],
            answer: "10π",
          },
        ],
      },
      {
        sectionTitle: "Histry",
        questions: [
          {
            questionType: "mcq",
            question: "Who was the first President of India?",
            options: [
              "Dr. Rajendra Prasad",
              "Jawaharlal Nehru",
              "Sardar Vallabhbhai Patel",
              "Indira Gandhi",
            ],
            answer: "Dr. Rajendra Prasad",
          },
          {
            questionType: "mcq",
            question: "When did India gain independence from British rule?",
            options: ["1945", "1947", "1950", "1962"],
            answer: "1947",
          },
          {
            questionType: "mcq",
            question: "Who built the Red Fort in Delhi?",
            options: ["Shah Jahan", "Akbar", "Aurangzeb", "Bahadur Shah II"],
            answer: "Shah Jahan",
          },
          {
            questionType: "mcq",
            question: "Who was the last ruler of the Maurya dynasty?",
            options: [
              "Chandragupta Maurya",
              "Bindusara",
              "Ashoka",
              "Brihadratha",
            ],
            answer: "Brihadratha",
          },
          {
            questionType: "mcq",
            question: "Who founded the city of Kolkata (Calcutta)?",
            options: [
              "Robert Clive",
              "Job Charnock",
              "Warren Hastings",
              "Lord Dalhousie",
            ],
            answer: "Job Charnock",
          },
          {
            questionType: "mcq",
            question: "Which Mughal emperor was known as 'Jahangir'?",
            options: [
              "Akbar",
              "Shah Jahan",
              "Aurangzeb",
              "Muhammad bin Tughluq",
            ],
            answer: "Akbar",
          },
          {
            questionType: "mcq",
            question:
              "Who was the first Indian woman to become the President of the Indian National Congress?",
            options: [
              "Sarojini Naidu",
              "Indira Gandhi",
              "Vijaya Lakshmi Pandit",
              "Annie Besant",
            ],
            answer: "Annie Besant",
          },
          {
            questionType: "mcq",
            question:
              "Which battle is considered as the turning point of the Indian Rebellion of 1857?",
            options: [
              "Battle of Plassey",
              "Battle of Buxar",
              "Battle of Jhansi",
              "Battle of Delhi",
            ],
            answer: "Battle of Delhi",
          },
          {
            questionType: "mcq",
            question: "Who was the first Sultan of Delhi?",
            options: [
              "Qutb-ud-din Aibak",
              "Iltutmish",
              "Razia Sultan",
              "Balban",
            ],
            answer: "Qutb-ud-din Aibak",
          },
          {
            questionType: "mcq",
            question: "Who was known as the 'Iron Man of India'?",
            options: [
              "Jawaharlal Nehru",
              "Sardar Vallabhbhai Patel",
              "Subhas Chandra Bose",
              "B.R. Ambedkar",
            ],
            answer: "Sardar Vallabhbhai Patel",
          },
        ],
      },
      {
        sectionTitle: "Technology",
        questions: [
          {
            questionType: "mcq",
            question: "Who is known as the father of the World Wide Web?",
            options: [
              "Tim Berners-Lee",
              "Bill Gates",
              "Steve Jobs",
              "Alan Turing",
            ],
            answer: "Tim Berners-Lee",
          },
          {
            questionType: "mcq",
            question: "What does 'HTTP' stand for?",
            options: [
              "HyperText Transfer Protocol",
              "Hyperlink Text Protocol",
              "Hypertext Transmission Process",
              "High Transfer Protocol",
            ],
            answer: "HyperText Transfer Protocol",
          },
          {
            questionType: "mcq",
            question:
              "Which programming language is primarily used for web development?",
            options: ["Python", "JavaScript", "C++", "Swift"],
            answer: "JavaScript",
          },
          {
            questionType: "mcq",
            question: "What does 'AI' stand for in technology?",
            options: [
              "Artificial Intelligence",
              "Automated Interface",
              "Analog Input",
              "Augmented Information",
            ],
            answer: "Artificial Intelligence",
          },
          {
            questionType: "mcq",
            question: "Which company created the iPhone?",
            options: ["Samsung", "Apple", "Google", "Microsoft"],
            answer: "Apple",
          },
          {
            questionType: "mcq",
            question: "What is the main function of an operating system?",
            options: [
              "To manage computer hardware and software",
              "To design graphics",
              "To edit documents",
              "To protect the computer from viruses",
            ],
            answer: "To manage computer hardware and software",
          },
          {
            questionType: "mcq",
            question:
              "Which of the following is an open-source operating system?",
            options: ["Windows", "macOS", "Linux", "iOS"],
            answer: "Linux",
          },
          {
            questionType: "mcq",
            question: "What does 'IoT' stand for?",
            options: [
              "Internet of Things",
              "Integration of Technology",
              "Input-Output Transmission",
              "Internal Operating Technology",
            ],
            answer: "Internet of Things",
          },
          {
            questionType: "mcq",
            question:
              "Which company is known for the Android operating system?",
            options: ["Apple", "Google", "Microsoft", "IBM"],
            answer: "Google",
          },
          {
            questionType: "mcq",
            question: "What is 'cloud computing'?",
            options: [
              "Computing performed in airplanes",
              "Storing and accessing data over the internet",
              "Using computer hardware in space",
              "A method of making data waterproof",
            ],
            answer: "Storing and accessing data over the internet",
          },
        ],
      },
      {
        sectionTitle: "Physics",
        questions: [
          {
            questionType: "mcq",
            question: "What is the unit of force in the SI system?",
            options: ["Newton", "Joule", "Pascal", "Watt"],
            answer: "Newton",
          },
          {
            questionType: "mcq",
            question: "Who is known as the father of modern physics?",
            options: [
              "Albert Einstein",
              "Isaac Newton",
              "Galileo Galilei",
              "Niels Bohr",
            ],
            answer: "Albert Einstein",
          },
          {
            questionType: "mcq",
            question: "What is the speed of light in a vacuum?",
            options: [
              "3 × 10⁶ m/s",
              "3 × 10⁸ m/s",
              "3 × 10⁵ m/s",
              "3 × 10⁷ m/s",
            ],
            answer: "3 × 10⁸ m/s",
          },
          {
            questionType: "mcq",
            question: "What is the formula for calculating work done?",
            options: [
              "Work = Force × Distance",
              "Work = Mass × Acceleration",
              "Work = Velocity × Time",
              "Work = Energy × Power",
            ],
            answer: "Work = Force × Distance",
          },
          {
            questionType: "mcq",
            question: "Which particle is negatively charged?",
            options: ["Proton", "Electron", "Neutron", "Photon"],
            answer: "Electron",
          },
          {
            questionType: "mcq",
            question: "What does E = mc² represent?",
            options: [
              "Energy-mass equivalence",
              "Electricity formula",
              "Kinetic energy",
              "Potential energy",
            ],
            answer: "Energy-mass equivalence",
          },
          {
            questionType: "mcq",
            question: "What is the primary unit of electric charge?",
            options: ["Coulomb", "Ohm", "Volt", "Ampere"],
            answer: "Coulomb",
          },
          {
            questionType: "mcq",
            question: "What does a convex lens do to light rays?",
            options: [
              "Diverges them",
              "Converges them",
              "Reflects them",
              "Refracts them",
            ],
            answer: "Converges them",
          },
          {
            questionType: "mcq",
            question:
              "What is the phenomenon of splitting white light into its spectrum called?",
            options: ["Reflection", "Diffraction", "Refraction", "Dispersion"],
            answer: "Dispersion",
          },
          {
            questionType: "mcq",
            question:
              "Which law states that for every action, there is an equal and opposite reaction?",
            options: [
              "Newton's First Law",
              "Newton's Second Law",
              "Newton's Third Law",
              "Law of Gravitation",
            ],
            answer: "Newton's Third Law",
          },
        ],
      },
      {
        sectionTitle: "Biology",
        questions: [
          {
            questionType: "mcq",
            question: "What is the basic unit of life?",
            options: ["Cell", "Atom", "Tissue", "Organ"],
            answer: "Cell",
          },
          {
            questionType: "mcq",
            question:
              "Which organelle is known as the 'Powerhouse of the Cell'?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
            answer: "Mitochondria",
          },
          {
            questionType: "mcq",
            question: "What is the study of heredity and variation called?",
            options: ["Ecology", "Genetics", "Botany", "Zoology"],
            answer: "Genetics",
          },
          {
            questionType: "mcq",
            question: "What type of blood cells help fight infections?",
            options: [
              "Red Blood Cells",
              "White Blood Cells",
              "Platelets",
              "Plasma",
            ],
            answer: "White Blood Cells",
          },
          {
            questionType: "mcq",
            question:
              "Which part of the brain controls balance and coordination?",
            options: [
              "Cerebrum",
              "Cerebellum",
              "Medulla Oblongata",
              "Thalamus",
            ],
            answer: "Cerebellum",
          },
          {
            questionType: "mcq",
            question:
              "What is the pigment that gives plants their green color?",
            options: ["Chlorophyll", "Hemoglobin", "Melanin", "Keratin"],
            answer: "Chlorophyll",
          },
          {
            questionType: "mcq",
            question: "Which gas do plants absorb during photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide",
          },
          {
            questionType: "mcq",
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Skin", "Liver"],
            answer: "Skin",
          },
          {
            questionType: "mcq",
            question: "Which part of a flower produces pollen?",
            options: ["Petal", "Stamen", "Sepal", "Pistil"],
            answer: "Stamen",
          },
          {
            questionType: "mcq",
            question: "What is the term for animals that eat only plants?",
            options: ["Carnivores", "Herbivores", "Omnivores", "Detritivores"],
            answer: "Herbivores",
          },
        ],
      },
    ],
  };

  let Quiz = document.getElementsByClassName("quiz");
  for (let i = 0; i < Quiz.length; i++) {
    Quiz[i].addEventListener("click", () => {
      startQuiz(i);
    });
  }

  function startQuiz(quiz_idx) {
    let currentQuestion = QuizData.sections[quiz_idx].questions;
    let currentQuestionIndex = 0;
    let Score = 0;
    let Answered = false;

    let heroContainer = document.querySelector(".hero");
    let quizContainer = document.querySelector(".quiz-section");

    heroContainer.style.display = "none";
    quizContainer.style.display = "flex";

    quizContainer.innerHTML = `
    <div class="quiz-container">
            <p id="score">Score : 0</p>
            <h2 id="question"></h2>
            <div id="option">
            </div>
            <button id="next-btn">Next</button>
        </div>
    `;

    showQuestions();

    function showQuestions() {
      let questionObj = currentQuestion[currentQuestionIndex];

      let questionContainer = document.getElementById("question");
      let optionContainer = document.getElementById("option");

      questionContainer.textContent = `${currentQuestionIndex + 1}. ${
        questionObj.question
      }`;

      optionContainer.innerHTML = ``;

      questionObj.options.forEach((option) => {
        let optionElement = document.createElement("p");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => {
          if (!Answered) {
            optionElement.classList.add("selected");
            Answered = true;
            checkAnswer(option, questionObj.answer);
          }
        });
        optionContainer.appendChild(optionElement);
      });

      function updateScore() {
        document.getElementById("score").textContent = "Score : " + Score;
      }

      function checkAnswer(userAnswer, correctAnswer) {
        let feedback = document.createElement("div");
        if (userAnswer == correctAnswer) {
          Score++;
          feedback.textContent = "Corret Answer";
          feedback.style.color = "Green";
        } else {
          feedback.textContent = "wrong, Answer is " + correctAnswer;
          feedback.style.color = "red";
        }
        optionContainer.appendChild(feedback);
        updateScore();
        Answered = false;
      }
    }

    document.getElementById("next-btn").addEventListener("click", () => {
      if (currentQuestionIndex >= currentQuestion.length - 1) {
        alert("Alert Quiz is Over");
        endQuiz(currentQuestion.length);
      } else {
        currentQuestionIndex++;
        showQuestions();
      }
    });

    function endQuiz(questionLength) {
      quizContainer.innerHTML = `
            <h1>Quiz is Complete!</h1>
            <p>Your Final Score: ${Score} / ${questionLength}</p> 
            <button id="home-button">Go to home</button>
            `;
      document.getElementById("home-button").addEventListener("click", () => {
        document.querySelector(".hero").style.display = "flex";
        document.querySelector(".quiz-section").style.display = "none";
      });
    }
  }
});
