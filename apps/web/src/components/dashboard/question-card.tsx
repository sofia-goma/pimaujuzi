import { Card, CardContent } from "../ui/card";

const QuestionCard: React.FC<{
  title: string;
  totalQuestions: number;
  completedQuestions: number;
  icon: React.ReactNode;
}> = ({ title, totalQuestions, completedQuestions, icon }) => {
  const progress = (completedQuestions / totalQuestions) * 100;

  return (
    <Card>
      <CardContent className="w-[300px]">
        <div className="flex items-center my-4">
          <div className="mr-4">{icon}</div>
          <div className="flex-1">
            <h3>{title}</h3>
            <p>
              {completedQuestions} / {totalQuestions}
            </p>
            <div className="bg-muted h-2 rounded-sm overflow-hidden mt-2">
              <div
                className={"bg-ring h-full w-[${progress}%]"}
                style={{
                  width: `${progress}%`,
                  transition: "width 0.3s",
                }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
