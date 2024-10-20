import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { questionTemplate } from "@/data/question-templates";

export default function Train() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Training</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {questionTemplate.map((topic, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                {topic.icon}
                                <span className="ml-2">{topic.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Total Questions: {topic.totalQuestions}</p>
                            <p>Completed: {topic.completedQuestions}</p>
                            <Button 
                                className="mt-2" 
                                onClick={() => setSelectedTopic(topic.title)}
                            >
                                Start Training
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {selectedTopic && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Training: {selectedTopic}</h2>
                    {/* Here you can add the actual training content/questions */}
                    <p>Training content for {selectedTopic} goes here.</p>
                    <Button className="mt-4" onClick={() => setSelectedTopic(null)}>
                        Back to Topics
                    </Button>
                </div>
            )}
        </div>
    );
}
