import { useState } from 'react';

// Test selection component
export default function TestSelection() {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Function to handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Render the component
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Quick Practice</h2>
      <p style={styles.description}>
        Improve specific skills by practicing each question type.
      </p>

{/* Category buttons */}
<div style={styles.buttonContainer}>
  {['All', 'Speaking', 'Reading', 'Listening', 'Writing'].map((category) => (
    <button
      key={category}
      onClick={() => handleCategorySelect(category)}
      style={{
        ...styles.button,
        backgroundColor: selectedCategory === category ? '#dce4f2' : '#f1f1f1',
        color: selectedCategory === category ? '#1144ab' : '#333',
        borderColor: selectedCategory === category ? '#0557fc' : '#ddd', 
        borderWidth: selectedCategory === category ? '1px' : '0.5px', 
        borderStyle: 'solid', 
      }}
    >
      {category}
    </button>
  ))}
</div>

      {/* Placeholder for rendering test questions */}
      <div style={styles.testContent}>
        <h3>{selectedCategory} Tests</h3>
        {/* Display specific test content based on selectedCategory */}
        <p>Test content will appear here for {selectedCategory}.</p>
      </div>
    </div>
  );
}

// Inline styles for the component
const styles = {
  container: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    maxWidth: '600px',
   
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  testContent: {
    marginTop: '16px',
    fontSize: '18px',
  },
};