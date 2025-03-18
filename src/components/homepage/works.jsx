import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work history"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./smu.png"
								alt="smu sa"
								className="work-image"
							/>
							<div className="work-title">SMU SA</div>
							<div className="work-subtitle">
								Mobile Developer
							</div>
							<div className="work-duration">NOV 2024 - FEB 2025</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
