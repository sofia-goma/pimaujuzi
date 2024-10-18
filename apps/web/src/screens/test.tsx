import TestSelection from "@/components/dashboard/test-selection";
import { FaQuestionCircle, FaBook } from "react-icons/fa"; // Icons for the question types
import QuestionCard from "@/components/dashboard/question-card";
import { questionTemplate } from "@/data/question-templates";
export default function Test() {
  return (
    <>
      <h1>Test Page</h1>
      <TestSelection />
      <div>
        <h1>Test</h1>

        <div className="grid grid-cols-3 gap-3">
          {questionTemplate.map((d) => (
            <QuestionCard
              title={d.title}
              totalQuestions={d.totalQuestions}
              completedQuestions={d.completedQuestions}
              icon={d.icon}
            />
          ))}

          {/* <QuestionCard
            title="Read and Select"
            totalQuestions={10}
            completedQuestions={2}
            icon={<FaQuestionCircle size={40} color="#3f51b5" />}
          /> */}
          {/* Question Card 2 */}
          {/* <QuestionCard
            title="Fill in the Blanks"
            totalQuestions={6}
            completedQuestions={0}
            icon={<FaBook size={40} color="#f57c00" />}
          /> */}
        </div>
      </div>
    </>
  );
}
