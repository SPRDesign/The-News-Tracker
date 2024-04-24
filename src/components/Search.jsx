import { useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  const buscar = (e) => setValue(e.target.value);
  const url = "/results/";

  return (
    <div>
      <center>
        <form action={url + value} method="GET">
          <input
            type="search"
            className="form-control p-3 text-white"
            value={value}
            onChange={buscar}
            placeholder="Search..."
            style={{
              backgroundColor: "#594a42",
              border: "1px solid #594a42",
              padding: "10px",
              width: "100%",
              color: "white",
              boxShadow:
                "0px 4px 8px rgba(73, 31, 3, 0.4), inset 0px 4px 8px rgba(73, 31, 3, 0.4)",
            }}
          />
        </form>
      </center>
    </div>
  );
}
