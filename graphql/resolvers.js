const jake = {
    name: 'jake',
    age: 18,
    email: 'kenshinhm@naver.com',
};

const resolvers = {
    Query: {
        person: () => jake
    }
};

export default resolvers;