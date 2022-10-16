import React from "react";

export const ContactMainBody = ({name, tag}) => {
    return(
        <div className="contact-item-body">
            <h3 className="contact-item-name">{name}</h3>
            <p className="contact-item-userid">@{tag}</p>
        </div>
    );
}