"use client"

import { Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface VocabularyItem {
  id: string
  english: string
  spanish: string
  notes: string | null
  category: string | null
}

interface VocabularyCardProps {
  item: VocabularyItem
}

export function VocabularyCard({ item }: VocabularyCardProps) {
  const speak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "en-US"
      utterance.rate = 0.9
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground text-lg truncate">
                {item.english}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-muted-foreground hover:text-primary"
                onClick={() => speak(item.english)}
                aria-label={`Escuchar pronunciación de ${item.english}`}
              >
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">{item.spanish}</p>
            {item.notes && (
              <p className="text-sm text-muted-foreground/80 mt-2 italic border-l-2 border-muted pl-3">
                {item.notes}
              </p>
            )}
          </div>
          {item.category && (
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full shrink-0">
              {item.category}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
