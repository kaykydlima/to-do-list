
import api from './config/http.config'

export function getTask() {
  return api.get('http://localhost:3000/tasks')
    .then(resp => resp.data)
    .catch(error => {
      if (error.response || error.request || error.response.data || error.message) {
        console.error('Erro na API:', error.response.data)
        return []
      }
    })
}

export function createTask(task) {
  return api.post('http://localhost:3000/tasks', task)
    .then(resp => resp.data)
    .catch(error => {
      if (error.response || error.request || error.response.data || error.message) {
        console.error('Erro na API:', error.response.data)
        return []
      }
    })
}

export function deleteTask(taskId) {
  return api.delete(`http://localhost:3000/tasks/${taskId}`)
    .then(resp => resp.data)
    .catch(error => {
      if (error.response || error.request || error.response.data || error.message) {
        console.error('Erro na API:', error.response.data)
        return []
      }
    })
}

export function endTask(taskId, task) {
  return api.put(`http://localhost:3000/tasks/${taskId}`, task)
    .then(resp => resp.data)
    .catch(error => {
      if (error.response || error.request || error.response.data || error.message) {
        console.error('Erro na API:', error.response.data)
        return []
      }
    })
}