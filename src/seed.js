export function seedDatabase(firebase) {
  const users = [
    {
      userId: "pQ5C40eV1GTXBSSpufyxMBORx493",
      username: "Splinter",
      fullName: "Splinter Sensei",
      emailAddress: "Splinter@sensei.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "Raphael",
      fullName: "Raphael Turtle",
      emailAddress: "Raphael@turtle.com",
      following: [],
      followers: ["pQ5C40eV1GTXBSSpufyxMBORx493"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "Leonardo",
      fullName: "Leonardo Turtle",
      emailAddress: "Leonardo@turtle.com",
      following: [],
      followers: ["pQ5C40eV1GTXBSSpufyxMBORx493"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "Donatello",
      fullName: "Donatello Turtle",
      emailAddress: "Donatello@turtle.com",
      following: [],
      followers: ["pQ5C40eV1GTXBSSpufyxMBORx493"],
      dateCreated: Date.now(),
    },
    {
      userId: "5",
      username: "Michelangelo",
      fullName: "Michelangelo Turtle",
      emailAddress: "Michelangelo@turtle.com",
      following: [],
      followers: ["pQ5C40eV1GTXBSSpufyxMBORx493"],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  for (let i = 1; i <= 6; i++) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "Raphael",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "Michelangelo",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
