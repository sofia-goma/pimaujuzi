// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, Button, Alert, FlatList } from "react-native";
// import SQLite from "react-native-sqlite-storage";
// import { styled } from "nativewind";

// // Initialize the database
// const db = SQLite.openDatabase(
//   {
//     name: "QuestionsDB",
//     location: "default",
//   },
//   () => {
//     console.log("Database opened");
//   },
//   (error: any) => {
//     console.log(error);
//   }
// );

// export default function Workspace() {
//   const [title, setTitle] = useState("");
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     // Create the questions table if it doesn't exist
//     db.transaction((tx) => {
//       tx.executeSql(
//         "CREATE TABLE IF NOT EXISTS Questions (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, dateCreated TEXT)",
//         [],
//         () => {
//           console.log("Table created successfully");
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     });
//     loadQuestions();
//   }, []);

//   const loadQuestions = () => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "SELECT * FROM Questions",
//         [],
//         (tx, results) => {
//           const rows = results.rows.raw();
//           setQuestions(rows);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     });
//   };

//   const addQuestion = () => {
//     if (title.trim() === "") {
//       Alert.alert("Error", "Question title cannot be empty");
//       return;
//     }

//     db.transaction((tx) => {
//       tx.executeSql(
//         "INSERT INTO Questions (title, dateCreated) VALUES (?, ?)",
//         [title, new Date().toISOString()],
//         () => {
//           setTitle("");
//           loadQuestions(); // Refresh the question list
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     });
//   };

//   return (
//     <View className="flex-1 p-4 bg-white">
//       <Text className="text-xl font-bold mb-4">Workspace</Text>

//       <TextInput
//         className="border p-2 rounded-lg mb-4"
//         placeholder="Enter question title"
//         value={title}
//         onChangeText={setTitle}
//       />

//       <Button title="Add Question" onPress={addQuestion} />

//       <FlatList
//         data={questions}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View className="p-2 border-b border-gray-200">
//             <Text>{item.title}</Text>
//             <Text className="text-sm text-gray-500">
//               {new Date(item.dateCreated).toLocaleString()}
//             </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
