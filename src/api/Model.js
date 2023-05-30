export default class Models {
  FormatActivity(sessions) {
    return sessions.map((item, index) => {
      return {
        day: index + 1,
        date: item.day,
        lostcalories: item.calories,
        actualkilogram: item.kilogram,
      };
    });
  }

  // permet de prendre en compte les deux élèments score et todayScore
  getPerformanceData(userPerformance, userKinds) {
    return userPerformance.map((item) => ({
      subject: userKinds[item.kind],
      value: item.value,
    }));
  }

  static translations() {
    return {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };
  }

  getUserScore(user) {
    if (user.todayScore !== undefined) {
      return user.todayScore;
    } else if (user.score !== undefined) {
      return user.score;
    } else {
      return undefined;
    }
  }

  // rassemble en une seule const les deux élèments pour affichag dans la RadialbarChart
  getUserScoreWrapper(user) {
    return user && this.getUserScore(user);
  }
}
