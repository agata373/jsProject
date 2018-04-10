import Api from '@/servicesApi'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
