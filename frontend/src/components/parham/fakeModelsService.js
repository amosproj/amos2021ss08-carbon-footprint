export const models = [
    { _id: '5b21ca3eeb7f6fbccd471818', name: 'Aluminium' },
    { _id: '5b21ca3eeb7f6fbccd471814', name: 'Copper' },
    { _id: '5b21ca3eeb7f6fbccd471820', name: 'Carbon' }
];

export function getModels() {
    return models.filter((g) => g);
}
