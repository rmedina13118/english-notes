"use client"

import { useState, useMemo } from "react"
import { VocabularyCard } from "./vocabulary-card"
import { SearchBar } from "./search-bar"
import { CategoryFilter } from "./category-filter"
import { AddVocabularyForm } from "./add-vocabulary-form"

interface VocabularyItem {
  id: string
  english: string
  spanish: string
  notes: string | null
  category: string | null
}

interface VocabularyListProps {
  initialItems: VocabularyItem[]
}

export function VocabularyList({ initialItems }: VocabularyListProps) {
  const [items, setItems] = useState(initialItems)
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    const cats = new Set<string>()
    items.forEach((item) => {
      if (item.category) cats.add(item.category)
    })
    return Array.from(cats).sort()
  }, [items])

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        search === "" ||
        item.english.toLowerCase().includes(search.toLowerCase()) ||
        item.spanish.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        selectedCategory === null || item.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [items, search, selectedCategory])

  const handleNewItem = (newItem: VocabularyItem) => {
    setItems((prev) => [newItem, ...prev])
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <AddVocabularyForm onAdd={handleNewItem} />
      </div>

      {categories.length > 0 && (
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      )}

      <div className="text-sm text-muted-foreground">
        {filteredItems.length} de {items.length} palabras
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <VocabularyCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No se encontraron palabras con esos criterios
        </div>
      )}
    </div>
  )
}
