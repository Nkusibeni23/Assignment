const average = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const scoreDolphins = average(85, 54, 41);

const scoreKoalas = average(23, 34, 27);

const checkWinners = (averageDolphins, averageKoalas) => {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas * 2})`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins * 2})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinners();
