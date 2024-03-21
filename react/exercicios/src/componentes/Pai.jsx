import React from "react";
// import Filho from './Filho'
import { childrenWithProps } from "../utils/utils";

export default (props) => (
    <div>
        <h1>
            {props.nome} {props.sobrenome}
        </h1>
        <h2>Filhos</h2>
        <ul>
            {/* {props.children} */}
            {childrenWithProps(props)}

            {/*
            <Filho nome="Pedro" sobrenome={props.sobrenome}></Filho>
            <Filho {...props}></Filho>
            <Filho {...props} nome="Carla"></Filho>
            */}
        </ul>
    </div>
);
