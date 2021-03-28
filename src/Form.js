import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  return (
    <div className="search-form">
      <form>
        <input
          autoComplete="off"
          type="text"
          className="form-control"
          placeholder="🔍 Type a city"
          id="search-text-input"
        />

        <input
          className="btn btn-outline-secondary"
          type="submit"
          value="Search"
          id="city-input"
        />
        <input
          className="btn btn-outline-secondary"
          type="submit"
          value="Current"
          id="geolocation"
        />
      </form>
    </div>
  );
}
