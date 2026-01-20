import React, { useState, useEffect } from "react";
import "../Styles/card-skill/card-projet.css";

export default function CardProjet({ dataProjet }) {
    const [selectedId, setSelectedId] = useState(null);

    // State chứa index ảnh hiện tại của từng project
    const [currentImgIndexes, setCurrentImgIndexes] = useState([]);

    useEffect(() => {
        setCurrentImgIndexes(Array(dataProjet.length).fill(0));
        setSelectedId(null);
    }, [dataProjet]);

    // Hàm chuyển ảnh tới
    const nextImage = (projectIndex) => {
        setCurrentImgIndexes((prev) => {
            const newIndexes = [...prev];
            const images = dataProjet[projectIndex].image;
            newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % images.length;
            return newIndexes;
        });
    };

    // Hàm chuyển ảnh lùi
    const prevImage = (projectIndex) => {
        setCurrentImgIndexes((prev) => {
            const newIndexes = [...prev];
            const images = dataProjet[projectIndex].image;
            newIndexes[projectIndex] =
                (newIndexes[projectIndex] - 1 + images.length) % images.length;
            return newIndexes;
        });
    };

    return (
        <>
        {dataProjet.map((item, index) => {
            const images = item.image ?? [];
            const imgIndex = currentImgIndexes[index] ?? 0;
            const currentImg = images[imgIndex]?.icon;
            const id = item.id ?? index;
            const isOpen = selectedId === id;

            return (
            <React.Fragment key={id}>
                <div
                className="card"
                onClick={() => setSelectedId((prev) => (prev === id ? null : id))}
                role="button"
                tabIndex={0}
                >
                <div className="top-section">
                    <div className="border"></div>
                    <div className="icons">
                        <div className="logo">
                            <img
                                className="logo_img"
                                draggable="false"
                                src="/Mon-Portfolio/LogoTS.png"
                                alt="Logo"
                            />
                        </div>
                    </div>
                    <img
                        className="photo_img"
                        draggable="false"
                        src={item.photo}
                        alt="photo"
                    />
                </div>
                <div className="bottom-section">
                    <span className="title">{item.name}</span>
                    <div className="row row1">
                    {item.langue.map((element, i) => (
                        <div className="item" key={element.nameLangue ?? i}>
                        <img
                            className="dev_img"
                            draggable="false"
                            src={element.icon}
                            alt={element.nameLangue}
                        />
                        <span className="big-text">{element.nameLangue}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                    {isOpen && (
                    <div className={`${item.classDetail ?? ""} detai_projet`}>
                        <div className="panel_content_details_projet">
                            <div className="panel_image_details_projet">
                                <img
                                    src={currentImg}
                                    className="image-box-projet-content"
                                    draggable="false"
                                    alt={`project-${item.id}-img`}
                                />
                                <button className="btn-change-image-next" onClick={() => nextImage(index)}>
                                    <i className="fi fi-rr-caret-right"></i>
                                </button>
                                <button className="btn-change-image-back" onClick={() => prevImage(index)}>
                                    <i className="fi fi-rr-caret-left"></i>
                                </button>
                            </div>
                            <div className="panel_text_details_projet">
                                <h2 className="date_details_projet">{item.date }</h2>
                                <h3 className="titre_details_projet">{item.name}</h3>
                                <p className="descript_details_projet">
                                    {item.descript.split("\n").map((line, i) => (
                                            <span key={i}>{line}<br /></span>
                                    ))}
                                </p>
                            </div>
                            <div className="panel_langue_code_details">
                                {item.langue.map((element, i) => (
                                    <div className="langue_code_details" key={element.nameLangue ?? i}>
                                        <img
                                            className="langue_code_details_img"
                                            draggable="false"
                                            src={element.icon}
                                            alt={element.nameLangue}
                                        />
                                        <span className="langue_code_details_text">{element.nameLangue}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="btn_close_details_projet"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedId(null);
                                }}
                            >
                                <span className="X"></span>
                                <span className="Y"></span>
                                <div className="close">Fermer</div>
                            </button>
                        </div>
                    </div>
                )}
            </React.Fragment>
            );
        })}
        </>
    );
}
