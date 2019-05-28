async function feed(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      }
    : {}

  const posts = await context.prisma.posts({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  const count = await context.prisma
    .postsConnection({
      where,
      skip: args.skip,
    })
    .aggregate()
    .count()

  return {
    posts,
    count,
  }
}

async function post(parent, { id, slug }, context) {
  const where = (id || slug)
    ? {
        OR: [
          { id },
          { slug },
        ],
      }
    : {}

  const post = await context.prisma.posts({ where })

  return post[0];
}

module.exports = {
  feed,
  post,
}
