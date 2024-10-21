interface IQuestionCardProps {
  id: number;
  title: string;
  totalQuestions: number;
  completedQuestions: number;
  icon?: any;
  className?: string;
  handlePress?: () => void;
}
