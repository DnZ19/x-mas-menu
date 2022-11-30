import React from 'react';
// import styled from "styled-components";

function ServiceCard ({image, title, description, tools, item , classNameCard, classNameImage }) {

    return (

        <main className={classNameCard}>
            <img
                src={image} alt=""
                className={classNameImage}

            />
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{tools}</p>
            <ul>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
            </ul>


        </main>

    );
}

export default ServiceCard;