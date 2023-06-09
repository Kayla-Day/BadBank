const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className="container mx-auto">
      <div className="row mt-3 mb-5">
        <div className="col d-flex justify-content-center">
          <div className={classes()} style={{ maxWidth: "20rem" }}>
            <div className="text-center">
              <div className="card-header">{props.header}</div>
              <div className="card-body">
                {props.title && <h5 className="card-title">{props.title}</h5>}
                {props.text && <p className="card-text">{props.text}</p>}
                {props.body}
                {props.status && <div id="createStatus">{props.status}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
