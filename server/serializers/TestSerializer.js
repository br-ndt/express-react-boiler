const testData = {
  message: "express is connected!",
  pages: [
    {
      id: 1,
      name: "Test1",
      text: "Masquerade balls rose to popularity in 16th century Italy.",
    },
    {
      id: 2,
      name: "TestTwo",
      text: "An average football game lasts 3 hours and 12 minutes.",
    },
    {
      id: 3,
      name: "Test #3",
      text: "The Tom Hanks movie 'Cast Away' was filmed on the island of Monuriki, Fiji.",
    },
    {
      id: 4,
      name: "The Fourth Test",
      text: "England's famed White Cliffs of Dover rise as high as 300 feet."
    }
  ],
}

class TestSerializer {
  static getTestData() {
    return testData;
  }

  static getIndividualTest(testId) {
    console.log(testData.pages.filter(test => test.id == testId)[0]);

    return testData.pages.filter(test => test.id == testId)[0];
  }
}

export default TestSerializer;
