import React from "react";
import TimeLineEdu from "../time-line-edu";

export default function Formation () {
    return (
        <>
            <div className="formation" id="formation">
                <div className="box-text-formation">
                    <h2 className="titre-formation">Formation</h2>
                </div>
                <div className="formation_timeline">
                    <div className="education">
                        <div className="timeline">
                            <TimeLineEdu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}