//Reference type --> object

const user: {
  // company: 'Courde'; // string literal type
  readonly company: string; // access company property only for read only
  firstName: string;
  middelName?: string; // ? means optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: 'Courde',
  firstName: 'Anondo',
  lastName: 'Ray',
  isMarried: false,
};
