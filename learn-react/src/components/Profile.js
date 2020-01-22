import React from "react";

export default function Profile() {
    return (
        <div className="profileImage">
            <img
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt="profile"
                width="200px"
                style={{ borderRadius: "50%" }}
            />
        </div>
    );
}
