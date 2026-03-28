import { BookOpen } from "lucide-react"
import { VocabularyList } from "@/components/vocabulary-list"
import { getVocabulary } from "./actions"

export default async function Home() {
  const vocabulary = await getVocabulary()

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
              English Vocabulary Notes
            </h1>
          </div>
          <p className="text-muted-foreground">
            Tu diccionario personal de vocabulario en inglés. Haz clic en el icono de audio para escuchar la pronunciación.
          </p>
        </header>

        <VocabularyList initialItems={vocabulary} />
      </div>
    </main>
  )
}
