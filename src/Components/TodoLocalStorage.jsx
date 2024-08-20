const todoLocalStorageKey = "TodoData";
export const getLocalStorageTodoData = () => {
    let rawData = localStorage.getItem(todoLocalStorageKey);
    if (!rawData) return [];
    return JSON.parse(rawData)
}
export const setLocalStorageTodo = (task) => {
    localStorage.setItem(todoLocalStorageKey, JSON.stringify(task));
};