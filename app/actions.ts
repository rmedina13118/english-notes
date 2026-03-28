"use server"

import { createClient } from "@/lib/supabase/server"

interface VocabularyInput {
  english: string
  spanish: string
  notes: string | null
  category: string | null
}

export async function addVocabulary(input: VocabularyInput) {
  const supabase = await createClient()
  
  console.log("[v0] Adding vocabulary with input:", JSON.stringify(input))
  
  const { data, error } = await supabase
    .from("vocabulary")
    .insert({
      english: input.english,
      spanish: input.spanish,
      notes: input.notes,
      category: input.category,
    })
    .select()
    .single()

  console.log("[v0] Supabase response - data:", JSON.stringify(data), "error:", JSON.stringify(error))

  if (error) {
    console.error("Error adding vocabulary:", error)
    throw new Error("Failed to add vocabulary")
  }

  return data
}

export async function getVocabulary() {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("vocabulary")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching vocabulary:", error)
    return []
  }

  return data
}
