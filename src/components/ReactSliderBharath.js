import React, { useEffect, useState } from "react";

import "../assets/styles.scss";

const ReactSliderBharath = (props) => {
    const { input } = props;
    const [subject, setSubject] = useState(1);
    const [subjectName, setSubjectName] = useState(input?.series[0]);

    const updateValue = (value) => {
        let year = parseInt(value.target.value)
        setSubjectName(input?.series[year - 1]);
        setSubject(year);
    }

    const sliderStyling = {
        slider: {
            background: input?.color,
            height: `${input?.height}px`
        }
    }

    useEffect(() => {
        console.log(subjectName);
        sessionStorage.setItem("SelectedValue", subjectName)
    }, [subjectName])

    return (
        <div className="main">
            <div className="filterMainHeading">
                <span className="heading">React Slider</span>
            </div>
            <div className="filterMainSubject">
                {input?.name && <div className="subjectMain"><span className="subjectMainHeading">{input?.name}</span></div>}
                <div className="sliderMain" style={{ width: !input.name ? "100%" : "" }}>
                   {input?.label && <div className="slidecontainerSubjectNames">
                        {input?.series.map((subject, i) => (<div key={i} className="subjectOptionsDiv" style={{ width: `${100 / input?.series.length}%` }}><span className="slidecontainerSubjectNamesSubject">{subject}</span></div>))}
                    </div>}
                    <div className="slidecontainer"><input type="range" min="1" max={input?.series.length} onInput={updateValue} value={subject} className="slider" id="myRange" style={sliderStyling.slider} />
                        <style>
                            {`
                                .slider::-webkit-slider-thumb {
                                    background: ${input?.thumb.color ? input?.thumb.color : "#6D47FF"};
                                    width:${100 / input?.series.length}%;
                                    height:${input?.thumb?.height ? `${input?.thumb?.height}px` : sliderStyling.slider.height};
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ReactSliderBharath }