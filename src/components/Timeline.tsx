import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Feb 2025 - Feb 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              DevOps Trainee
            </h3>

            <h4 className="vertical-timeline-element-company">
              WOWBLY TECHNOLOGIES
            </h4>

            <h5 className="vertical-timeline-element-subtitle">
              Faisalabad, Pakistan
            </h5>

            <p>
              Built and maintained CI/CD pipelines using GitHub Actions.
              Containerized applications using Docker.
              Assisted in AWS EC2 deployments and basic Kubernetes configurations.
              Automated infrastructure tasks and improved deployment workflows.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;