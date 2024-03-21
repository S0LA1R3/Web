import React from "react";
import ReactDOM from "react-dom";
// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"></Filho>
            <Filho nome="Paulo"></Filho>
            <Filho nome="Carla"></Filho>
        </Pai>
    </div>,
    document.getElementById("root")
);

//ReactDOM.render(
//    <div>
//        <Saudacao tipo="Bom dia" nome="João"></Saudacao>
//    </div>
//, document.getElementById('root'))
// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Ana"/>
//         <BoaNoite nome="Bia"/>
//     </div>
// , document.getElementById('root'))
// ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById("root"));
