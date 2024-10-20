import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Feedback() {
    const [feedback, setFeedback] = useState("");
    const [email, setEmail] = useState("");
    const [donationAmount, setDonationAmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the feedback and donation info to your backend
        console.log("Feedback submitted:", { feedback, email, donationAmount });
        // Reset form after submission
        setFeedback("");
        setEmail("");
        setDonationAmount("");
    };

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Feedback et support</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Votre email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                                Votre feedback
                            </label>
                            <Textarea
                                id="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Partagez vos commentaires ou questions..."
                                rows={5}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="donation" className="block text-sm font-medium text-gray-700">
                                Faire un don (optionnel)
                            </label>
                            <Select onValueChange={setDonationAmount} value={donationAmount}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choisissez un montant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="5">5 €</SelectItem>
                                    <SelectItem value="10">10 €</SelectItem>
                                    <SelectItem value="20">20 €</SelectItem>
                                    <SelectItem value="50">50 €</SelectItem>
                                    <SelectItem value="100">100 €</SelectItem>
                                    <SelectItem value="custom">Autre montant</SelectItem>
                                </SelectContent>
                            </Select>
                            {donationAmount === "custom" && (
                                <Input
                                    type="number"
                                    placeholder="Entrez un montant personnalisé"
                                    className="mt-2"
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                />
                            )}
                        </div>
                        <Button type="submit">Envoyer le feedback</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
