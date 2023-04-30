import React from "react"

function Info(){
    return(
        <div className="info">
            <img className="profile-pic" src="/images/avatar.png" />
            <h1>Yash Lohi</h1>
            <h2>Frontend Developer</h2>
            <p>ylohi31@gmail.com</p>
            <div className="buttons" >
                <a href="mailto:ylohi31@gmail.com" target="_blank">Email</a>
                <a href="https://www.linkedin.com/in/yash-lohi/" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}

export default Info