import TestSelection from '@/components/home/TestSelection';
import React from 'react';
import { FaQuestionCircle, FaBook } from 'react-icons/fa'; // Icons for the question types

// Define the QuestionCard component inside Test
const QuestionCard: React.FC<{
  title: string;
  totalQuestions: number;
  completedQuestions: number;
  icon: React.ReactNode;
}> = ({ title, totalQuestions, completedQuestions, icon }) => {
  const progress = (completedQuestions / totalQuestions) * 100;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '16px',
      width: '300px'
    }}>
      <div style={{ marginRight: '16px' }}>{icon}</div>
      <div style={{ flexGrow: 1 }}>
        <h3>{title}</h3>
        <p>{completedQuestions} / {totalQuestions}</p>
        <div style={{
          backgroundColor: '#f0f0f0',
          height: '8px',
          borderRadius: '4px',
          overflow: 'hidden',
          marginTop: '8px'
        }}>
          <div style={{
            backgroundColor: '#4caf50',
            height: '100%',
            width: `${progress}%`,
            transition: 'width 0.3s'
          }}></div>
        </div>
      </div>
    </div>
  );
};

// Main Test component
export default function Test() {
  return (<>
  <h1>Test Page</h1>
    <TestSelection />
    <div>
      <h1>Test</h1>
      
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Question Card 1 */}
        <QuestionCard
          title="Read and Select"
          totalQuestions={10}
          completedQuestions={2}
          icon={<FaQuestionCircle size={40} color="#3f51b5" />}
        />
        {/* Question Card 2 */}
        <QuestionCard
          title="Fill in the Blanks"
          totalQuestions={6}
          completedQuestions={0}
          icon={<FaBook size={40} color="#f57c00" />}
        />
      </div>
    </div></>
  );
}
