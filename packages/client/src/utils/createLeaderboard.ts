export const createLeaderboard = (data: string) => {
  const array = JSON.parse(data);
  array.splice(0, 1);

  return array.map((item: any, index: number) => ({
    place: index + 1,
    player: item.data.name,
    score: item.data.score[0],
  }));
};
