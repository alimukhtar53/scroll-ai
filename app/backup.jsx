<div
  style={{
    display: "flex",
    flexDirection: "row",
    placeContent: "stretch center",
    boxSizing: "border-box",
    width: "100%",
    gap: "16px",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      placeContent: "stretch flex-start",
      flex: "1 1 0%",
      width: "0px",
      gap: "16px",
    }}
  >
    {data.images.map((d) => {
      return (
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "repeat(1, minmax(0px, 1fr))" }}
        >
          <div
            id={d.id}
            className="flex flex-col items-center rounded-lg select-none"
          >
            <a
              className="relative transition-all image-card-grid opacity-100"
              href="#"
            >
              <img
                className="object-fill rounded-lg"
                src={d.url_jpeg}
                style={{ aspectRatio: "0.666667 / 1" }}
              ></img>
            </a>
          </div>
        </div>
      );
    })}
  </div>
  {/* 2nd column */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      placeContent: "stretch flex-start",
      flex: "1 1 0%",
      width: "0px",
      gap: "16px",
    }}
  >
    {data2.images.map((d) => {
      return (
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "repeat(1, minmax(0px, 1fr))" }}
        >
          <div
            id={d.id}
            className="flex flex-col items-center rounded-lg select-none"
          >
            <a
              className="relative transition-all image-card-grid opacity-100"
              href="#"
            >
              <img
                className="object-fill rounded-lg"
                src={d.url_jpeg}
                style={{ aspectRatio: "0.666667 / 1" }}
              ></img>
            </a>
          </div>
        </div>
      );
    })}
  </div>
  {/* 3rd column*/}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      placeContent: "stretch flex-start",
      flex: "1 1 0%",
      width: "0px",
      gap: "16px",
    }}
  >
    {data.images.map((d) => {
      return (
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "repeat(1, minmax(0px, 1fr))" }}
        >
          <div
            id={d.id}
            className="flex flex-col items-center rounded-lg select-none"
          >
            <a
              className="relative transition-all image-card-grid opacity-100"
              href="#"
            >
              <img
                className="object-fill rounded-lg"
                src={d.url_jpeg}
                style={{ aspectRatio: "0.666667 / 1" }}
              ></img>
            </a>
          </div>
        </div>
      );
    })}
  </div>
  {/*4th column*/}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      placeContent: "stretch flex-start",
      flex: "1 1 0%",
      width: "0px",
      gap: "16px",
    }}
  >
    {data.images.map((d) => {
      return (
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "repeat(1, minmax(0px, 1fr))" }}
        >
          <div
            id={d.id}
            className="flex flex-col items-center rounded-lg select-none"
          >
            <a
              className="relative transition-all image-card-grid opacity-100"
              href="#"
            >
              <img
                className="object-fill rounded-lg"
                src={d.url_jpeg}
                style={{ aspectRatio: "0.666667 / 1" }}
              ></img>
            </a>
          </div>
        </div>
      );
    })}
  </div>
</div>;
