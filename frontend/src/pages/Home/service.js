import api from "../../services";

class HomeServices {
  static list() {
    return api.get("/doadores");
  }

  static create(data) {
    return api.post("/doadores", data);
  }
}
export default HomeServices;
