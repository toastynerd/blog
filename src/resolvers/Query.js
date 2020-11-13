function latest(parents, args, context, info) {
  return context.prisma.post.findMany();
};

module.exports = {
  latest,
}
