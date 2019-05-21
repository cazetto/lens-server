function post(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).post()
}

function user(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).user()
}

module.exports = {
  post,
  user,
}
