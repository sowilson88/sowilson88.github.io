import React, { useState } from 'react';
import Header from './components/Header'

export default function App() {
	const questions = [
		{
      questionText: 'Who authored the "Fillory and Further" series?',
      answerOptions: [
        { answerText: 'Christopher Plover', isCorrect: true },
        { answerText: 'Dean Fogg', isCorrect: false },
        { answerText: 'Professor Bigby', isCorrect: false },
        { answerText: 'Quentin Coldwater', isCorrect: false },
			],
		},
		{
      questionText: "What is Penny Adiyodi's discipline?",
      answerOptions: [
        { answerText: 'Repair small objects', isCorrect: false },
        { answerText: 'Mirror Magic', isCorrect: false },
        { answerText: 'Horomancy', isCorrect: false },
        { answerText: 'Traveling', isCorrect: true },
			],
		},
		{
      questionText: "What was the real identity of Our Lady Underground?",
      answerOptions: [
        { answerText: 'The White Lady', isCorrect: false },
        { answerText: 'Reynard the Fox', isCorrect: true },
        { answerText: 'The Watcher Woman', isCorrect: false },
        { answerText: 'The Monster', isCorrect: false },
			],
		},
		{
      questionText: "What is Fillory's most ancient location?",
      answerOptions: [
        { answerText: "The Castle that isn't there", isCorrect: false },
        { answerText: "Ember's Tomb", isCorrect: false },
        { answerText: 'The Wellspring', isCorrect: true},
        { answerText: 'Castle Blackspire', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='scoreSection'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='questionSection'>
						<div className='questionNumber'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='questionText'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answerSection'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
