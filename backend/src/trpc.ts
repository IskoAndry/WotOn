import { initTRPC } from '@trpc/server'

export const ideas = [
  { id: 1, nick: 'cool-idea-nick-1', nametitle: 'Idea 1', description: 'description of idea 1 ....' },
  { id: 2, nick: 'cool-idea-nick-2', nametitle: 'Idea 2', description: 'description of idea 2 ....' },
  { id: 3, nick: 'cool-idea-nick-3', nametitle: 'Idea 3', description: 'description of idea 3 ....' },
  { id: 4, nick: 'cool-idea-nick-4', nametitle: 'Idea 4', description: 'description of idea 4 ....' },
  { id: 5, nick: 'cool-idea-nick-5', nametitle: 'Idea 5', description: 'description of idea 5 ....' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})



export type TrpcRouter = typeof trpcRouter

