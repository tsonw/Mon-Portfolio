import React from "react";
import '../Styles/time-line-edu/time-line-edu.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import eduIcon from '../assets/icon/graduation-cap.svg';

export default function TimeLineEdu() {
    return (
        <>
            <VerticalTimeline
                lineColor="#ffffff"
                className="timeline-education"
                layout="1-column-left"
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ 
                        borderRight: '8px solid rgba(255, 255, 255, 0)' 
                    }}
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        boxShadow: '5px 5px 0px #3A3A3A',
                        borderRadius: '5px'
                    }}
                    dateClassName="date-timeline"
                    date="2025 - 2026"
                    icon={
                        <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                        }}>
                        <img 
                            src={eduIcon} 
                            alt="education icon" 
                            style={{ 
                                width: '50%', 
                                height: '50%', 
                                objectFit: 'cover' 
                            }}
                        />
                        </div>
                    }
                    iconStyle={{ 
                        background: '#ffffff',
                        boxShadow: '0px 0px 10px #000000'
                    }}
                    shadowSize="large"
                    style={{
                        width: '100%'
                    }}
                >
                    <h3 className="vertical-timeline-element-title">IUT d'Orsay | Université Paris-Saclay</h3>
                    <h4 className="vertical-timeline-element-subtitle">France</h4>
                    <p className="description-formation">Étudiant en BUT 2 - Parcours B déploiement d'applications communicantes et sécurisées</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ 
                        borderRight: '8px solid rgba(255, 255, 255, 0)' 
                    }}
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        boxShadow: '5px 5px 0px #3A3A3A',
                        borderRadius: '5px'
                    }}
                    dateClassName="date-timeline"
                    date="2025 - 2026"
                    icon={
                        <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                        }}>
                        <img 
                            src={eduIcon} 
                            alt="education icon" 
                            style={{ 
                                width: '50%', 
                                height: '50%', 
                                objectFit: 'cover' 
                            }}
                        />
                        </div>
                    }
                    iconStyle={{ 
                        background: '#ffffff',
                        boxShadow: '0px 0px 10px #000000'
                    }}
                    shadowSize="large"
                    style={{
                        width: '100%'
                    }}
                >
                    <h3 className="vertical-timeline-element-title">IUT d'Orsay | Université Paris-Saclay</h3>
                    <h4 className="vertical-timeline-element-subtitle">France</h4>
                    <p className="description-formation">Étudiant en BUT 1 - en informatique</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ 
                        borderRight: '8px solid rgba(255, 255, 255, 0)' 
                    }}
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        boxShadow: '5px 5px 0px #3A3A3A',
                        borderRadius: '5px'
                    }}
                    dateClassName="date-timeline"
                    date="2025 - 2026"
                    icon={
                        <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                        }}>
                        <img 
                            src={eduIcon} 
                            alt="education icon" 
                            style={{ 
                                width: '50%', 
                                height: '50%', 
                                objectFit: 'cover' 
                            }}
                        />
                        </div>
                    }
                    iconStyle={{ 
                        background: '#ffffff',
                        boxShadow: '0px 0px 10px #000000'
                    }}
                    shadowSize="large"
                    style={{
                        width: '100%'
                    }}
                >
                    <h3 className="vertical-timeline-element-title">Programme DU - FLE (Université Paris-Saclay)</h3>
                    <h4 className="vertical-timeline-element-subtitle">France</h4>
                    <p className="description-formation">Diplôme d’Université en Français Langue Étrangère</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ 
                        borderRight: '8px solid rgba(255, 255, 255, 0)' 
                    }}
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        boxShadow: '5px 5px 0px #3A3A3A',
                        borderRadius: '5px'
                    }}
                    dateClassName="date-timeline"
                    date="2025 - 2026"
                    icon={
                        <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                        }}>
                        <img 
                            src={eduIcon} 
                            alt="education icon" 
                            style={{ 
                                width: '50%', 
                                height: '50%', 
                                objectFit: 'cover' 
                            }}
                        />
                        </div>
                    }
                    iconStyle={{ 
                        background: '#ffffff',
                        boxShadow: '0px 0px 10px #000000'
                    }}
                    shadowSize="large"
                    style={{
                        width: '100%'
                    }}
                >
                    <h3 className="vertical-timeline-element-title">Lycée d’excéllence Hoang Van Thu</h3>
                    <h4 className="vertical-timeline-element-subtitle">Vietnam</h4>
                    <p className="description-formation">Baccalauréat (équivalent) — Vietnam</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    );
}