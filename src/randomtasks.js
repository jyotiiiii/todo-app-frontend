import uuidv4 from 'uuid/v4';

const randomTasks = [
  { id: uuidv4(), description: 'Sleep in', completed: false, points: 5 },
  {
    id: uuidv4(),
    description: 'Go for a swim in the sea',
    completed: false,
    points: 5
  },
  {
    id: uuidv4(),
    description: 'Get a massage',
    completed: false,
    points: 5
  },
  {
    id: uuidv4(),
    description: 'Visit a new exhibition',
    completed: false,
    points: 5
  },
  {
    id: uuidv4(),
    description: 'Plan a holiday',
    completed: false,
    points: 5
  },
  {
    id: uuidv4(),
    description: 'Practice Mindfulness',
    completed: false,
    points: 5
  }
];

export default randomTasks;
