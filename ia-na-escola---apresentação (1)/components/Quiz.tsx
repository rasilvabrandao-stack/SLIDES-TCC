import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../constants';
import { RefreshCcw, CheckCircle } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setScore(newScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore(newScore);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const getResultFeedback = () => {
    const maxScore = QUIZ_QUESTIONS.length * 10;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 30) return {
      title: "Uso Consciente",
      text: "Parabéns! Você usa a tecnologia como ferramenta de apoio, mantendo sua autonomia intelectual.",
      color: "text-green-400"
    };
    if (percentage <= 70) return {
      title: "Uso Moderado",
      text: "Cuidado. Você está começando a depender da IA para agilizar tarefas. Lembre-se de exercitar seu cérebro.",
      color: "text-yellow-400"
    };
    return {
      title: "Alta Dependência",
      text: "Alerta! Você pode estar terceirizando seu aprendizado. Tente realizar tarefas sem IA ocasionalmente.",
      color: "text-red-400"
    };
  };

  const feedback = getResultFeedback();

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex justify-between items-center text-sm text-slate-400">
              <span>Questão {currentQuestion + 1} de {QUIZ_QUESTIONS.length}</span>
              <span className="font-mono">Pontos atuais: {score}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-8 text-white">
              {QUIZ_QUESTIONS[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left p-4 rounded-xl bg-slate-800/50 hover:bg-indigo-600/50 border border-slate-700 hover:border-indigo-500 transition-all duration-200 group"
                >
                  <span className="flex items-center">
                    <div className="w-6 h-6 rounded-full border border-slate-500 mr-4 group-hover:border-indigo-400 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="mb-6 inline-flex p-4 rounded-full bg-white/5 border border-white/10">
              <CheckCircle className={`w-12 h-12 ${feedback.color}`} />
            </div>
            
            <h3 className={`text-3xl font-bold mb-2 ${feedback.color}`}>
              {feedback.title}
            </h3>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {feedback.text}
            </p>

            <button
              onClick={resetQuiz}
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2 mx-auto transition-colors"
            >
              <RefreshCcw size={20} />
              Refazer Teste
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};