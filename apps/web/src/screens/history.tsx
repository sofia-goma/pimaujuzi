import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TestHistory {
    id: string;
    testName: string;
    date: string;
    score: number;
    totalQuestions: number;
}

const mockTestHistory: TestHistory[] = [
    { id: '1', testName: 'Mathématiques - Algèbre', date: '2024-03-15', score: 8, totalQuestions: 10 },
    { id: '2', testName: 'Français - Grammaire', date: '2024-03-14', score: 7, totalQuestions: 10 },
    { id: '3', testName: 'Histoire - Révolution française', date: '2024-03-13', score: 9, totalQuestions: 10 },
    // Ajoutez plus d'entrées d'historique si nécessaire
];

export default function History() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Historique des Tests</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockTestHistory.map((test) => (
                    <Card key={test.id}>
                        <CardHeader>
                            <CardTitle>{test.testName}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Date: {test.date}</p>
                            <p>Score: {test.score}/{test.totalQuestions}</p>
                            <p>Pourcentage: {(test.score / test.totalQuestions * 100).toFixed(2)}%</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
