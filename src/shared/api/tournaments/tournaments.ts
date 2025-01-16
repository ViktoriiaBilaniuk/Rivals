const tournaments = Array(100)
  .fill(0)
  .map((_, i) => ({
    id: i,
    title: `Tournament ${i}`,
  }));

export const fetchTournaments = async (query: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tournaments.filter((tournament) =>
    tournament.title.toLowerCase().includes(query.toLowerCase())
  );
};
