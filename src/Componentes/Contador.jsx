import { Component } from "react";

export class Counter extends Component {

    constructor() {
        super(); // podría borrarlo pero deboi agregar render.

        this.state = {
            contador: 1
        }
    }

    handlerIncrement = () => {
        this.setState(state => ({contador: state.contador + 1}));
    }

    render() {
        return (
          <>
            <div>
              <h1>{this.state.contador}</h1>
            </div>
            <div>
              <button class="btn btn-dark" onClick={this.handlerIncrement}>
                {" "}
                Incrementar el contador{" "}
              </button>
            </div>
          </>
          // solo puedo devolver un único elemento html en jsx a menos que lo envuelva en otro elemento o un react fragment
        );
    }
}

// export default Counter