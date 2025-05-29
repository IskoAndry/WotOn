import { trpc } from '../../lib/trpc'
import { variableWotOn  } from '../../data'

export const AllIdeasPage = () => {
   const { data = { ideas: [] }, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // if (!data?.ideas) {
  //   return <span>No ideas found</span>
  // }

  return (
    <>
      <h1>{variableWotOn.titleApp}</h1>
      {data.ideas.map((idea) => (
        <div key={idea.id}>
          <h2>{idea.nametitle}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </>
  )
}