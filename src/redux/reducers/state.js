export const initialState = {
    folders: [
        {name: 'Магазин', id: '0'},
        { name: 'Игры', id: '1' }],
    tasks: [
        { folder: 'Магазин', id: '0', text: 'Купить молоко', completed: false },
        { folder: 'Магазин', id: '1', text: 'Купить самсу', completed: false },
        {folder: 'Игры', id: '2', text: 'Cs go', completed: false }],
    activeFolderName: '',

}