export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const forrmatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium"
  })

  return forrmatter.format(date)
}