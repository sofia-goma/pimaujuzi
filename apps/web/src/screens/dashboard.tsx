import { useEffect, useState } from "react";
import TestSelection from "@/components/dashboard/test-selection";
import QuestionCard from "@/components/dashboard/question-card";
import { questionTemplate } from "@/data/question-templates";
import { FormattedMessage } from "react-intl";
export default function Dashboard() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((text) => setGreeting(text))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <TestSelection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {questionTemplate.map((d) => (
            <QuestionCard
              title={d.title}
              totalQuestions={d.totalQuestions}
              completedQuestions={d.completedQuestions}
              icon={d.icon}
            />
          ))}
        </div>
      </TestSelection>
      <h1>{greeting} From my proxy api</h1>
      <h1>Dashboard</h1>
      <h1>
        <FormattedMessage id="welcome" defaultMessage="Welcome" />
      </h1>
    </>
  );
}
