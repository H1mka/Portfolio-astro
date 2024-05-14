import type { ImageMetadata } from "astro"

type ExperienceItemType = {
  positionTitle: string
  workTerm: string
  responsibilities: Array<string>
  logo: ImageMetadata
}

type WorkItemType = {
  title: string
  description: string
  stack: Array<string>
  previewImage: ImageMetadata
}

export type { ExperienceItemType, WorkItemType }