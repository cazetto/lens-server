function postedBy(parent, args, context) {
  return context.prisma.post({ id: parent.id }).postedBy()
}

function votes(parent, args, context) {
  return context.prisma.post({ id: parent.id }).votes()
}

module.exports = {
  postedBy,
  votes,
}
