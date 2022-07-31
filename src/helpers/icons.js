import React from "react";
import { IconContext } from "react-icons";
import { DiReact, DiJavascript1, DiCss3, DiJqueryLogo, DiNodejs, DiMysql, DiGulp, DiPostgresql, DiAws, DiFirebase, DiSass, DiBootstrap, DiVisualstudio, DiMongodb, DiNpm, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';



export const linkedIn =
    < IconContext.Provider value={{ size: "2rem" }}>
        <div>
            <AiFillLinkedin />
        </div>
    </ IconContext.Provider>;

export const gitHub =
    < IconContext.Provider value={{ size: "2rem" }}>
        <div>
            <AiFillGithub />
        </div>
    </ IconContext.Provider>;

export const email =
    < IconContext.Provider value={{ size: "2rem" }}>
        <div>
            <AiOutlineMail />
        </div>
    </ IconContext.Provider>;



