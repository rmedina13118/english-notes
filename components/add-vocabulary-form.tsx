"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { addVocabulary } from "@/app/actions"

interface VocabularyItem {
  id: string
  english: string
  spanish: string
  notes: string | null
  category: string | null
}

interface AddVocabularyFormProps {
  onAdd: (item: VocabularyItem) => void
}

export function AddVocabularyForm({ onAdd }: AddVocabularyFormProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [english, setEnglish] = useState("")
  const [spanish, setSpanish] = useState("")
  const [notes, setNotes] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!english.trim() || !spanish.trim()) return

    setLoading(true)
    try {
      const newItem = await addVocabulary({
        english: english.trim(),
        spanish: spanish.trim(),
        notes: notes.trim() || null,
        category: category.trim() || null,
      })
      
      if (newItem) {
        onAdd(newItem)
        setEnglish("")
        setSpanish("")
        setNotes("")
        setCategory("")
        setOpen(false)
      }
    } catch (error) {
      console.error("Error adding vocabulary:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Agregar palabra
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar nueva palabra</DialogTitle>
          <DialogDescription>
            Ingresa los detalles de la nueva palabra de vocabulario.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="english">Inglés *</Label>
            <Input
              id="english"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              placeholder="Hello"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="spanish">Español *</Label>
            <Input
              id="spanish"
              value={spanish}
              onChange={(e) => setSpanish(e.target.value)}
              placeholder="Hola"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notas / Ejemplo (opcional)</Label>
            <Input
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Hello, how are you?"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Categoría (opcional)</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Verbos, Expresiones, etc."
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Guardando..." : "Guardar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
