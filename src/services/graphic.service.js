import http from "../http-api";

class GraphicService {
  getAll() {
    return http.get("/graphics");
  }

  get(id) {
    return http.get(`/graphics/${id}`);
  }

  create(data) {
    return http.post("/graphics", data);
  }

  findByTitle(name) {
    return http.get(`/graphics?name=${name}`);
  }
  // service update admin
  update(id, data) {
    return http.put(`/graphics/${id}`, data);
  }
  // service delete id
  delete(id) {
    return http.delete(`/admins/${id}`);
  }
  // service delete all
  deleteAll() {
    return http.delete(`/graphics`);
  }
}
export default new GraphicService();