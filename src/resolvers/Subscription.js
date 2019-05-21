function newPostSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.post({ mutation_in: ['CREATED'] }).node()
}

const newPost = {
  subscribe: newPostSubscribe,
  resolve: payload => {
    return payload
  },
}

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newPost,
  newVote,
}
