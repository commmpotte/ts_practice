enum Status {
  Published = 'published',
  Deleted = 'deleted',
  Draft = 'draft',
}

async function getFaqs(req: { topicId: number; status: Status }): Promise<
  {
    question: string
    answer: string
    tags: string[]
    likes: number
    status?: Status
  }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  })
  const data = await res.json()
  return data
}
