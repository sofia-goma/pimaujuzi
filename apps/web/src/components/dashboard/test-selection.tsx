import { useState } from "react";
import { Button } from "../ui/button";
import { ReactNode } from "react";

export default function TestSelection({ children }: { children?: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2 className="text-primary text-2xl mb-4">Quick Practice</h2>
      <p className="text-muted-foreground mb-4">
        Improve specific skills by practicing each question type.
      </p>

      {/* Category buttons */}
      <div className="flex items-center gap-4">
        {["Tous", "Math", "Français", "Histoire", "Géographie"].map(
          (category) => (
            <Button
              onClick={() => handleCategorySelect(category)}
              variant={selectedCategory === category ? "secondary" : "outline"}
            >
              {category}
            </Button>
          )
        )}
      </div>

      {/* Placeholder for rendering test questions */}
      <div className="mt-4">{children}</div>
    </div>
  );
}
