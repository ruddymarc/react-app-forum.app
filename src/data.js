const users = [
  {
    id: Math.random().toString(),
    username: 'john_doe',
    names: { first: 'John', last: 'Doe' },
    online: true,
  },
  {
    id: Math.random().toString(),
    username: 'jane_doe',
    names: { first: 'Jane', last: 'Doe' },
  }
];

const posts = [
  {
    id: Math.random().toString(),
    title: 'Le fil à couper le beurre en phase de test finale',
    content: "Des scientifiques auraient mis au point un outil ayant l'apparence d'un fil et pouvant servir à couper du beurre. Une révolution pour le monde de la tartine.",
  }
];

export { users, posts };
