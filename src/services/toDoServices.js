import axios from 'axios'

export function getTask() {
  return axios.get('http://localhost:3000/tasks')
    .then(resp => resp.data)
    .then(list => list)
    .catch(error => console.log(error))
}

export function createTask(task) {
  return axios.post('http://localhost:3000/tasks', task)
    .then(() => 'Tarefa criada com sucesso')
    .catch(error => console.log(error))
}

export function deleteTask(taskId) {
  return axios.delete(`http://localhost:3000/tasks/${taskId}`)
    .then(() => 'Tarefa deletada com sucesso!')
    .catch(error => console.log(error))
}

export function endTask(taskId, task) {
  return axios.put(`http://localhost:3000/tasks/${taskId}`, task)
    .then(() => 'Tarefa finalizada com sucesso!')
    .catch(error => console.log(error))
}