// src/components/PersonalShowcase/PersonalShowcase.tsx
import * as motion from "motion/react-client";
import { containerVariants, cardVariants } from "@/lib/variants";
import {
	experienceData,
	specializationData,
	hobbiesData,
	skillsData,
	quickContactData,
} from "@/lib/personalData";

// Component imports
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";
import SpecializationCard from "./SpecializationCard";
import HobbyCard from "./HobbyCard";
import SkillTag from "./SkillTag";
import ContactItem from "./ContactItem";

// ===========================================
// MAIN PERSONAL SHOWCASE COMPONENT
// ===========================================

const PersonalShowcase = () => {
	return (
		<motion.div
			className="container py-8 md:py-12"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Main Grid Layout */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
				variants={containerVariants}
			>
				{/* Experience Section */}
				<motion.div
					className="bg-background border-2 border-foreground rounded-md p-4 md:p-6"
					variants={cardVariants}
					whileHover={{
						boxShadow: "6px 6px 0px 0px var(--foreground)",
						transition: { duration: 0.3 },
					}}
				>
					<SectionHeader title="DROGA ARTYSTYCZNA" />
					<div>
						{experienceData.map((experience, index) => (
							<ExperienceCard
								key={experience.id}
								experience={experience}
								index={index}
							/>
						))}
					</div>
				</motion.div>

				{/* Specializations Section */}
				<motion.div
					className="bg-background border-2 border-foreground rounded-md p-4 md:p-6"
					variants={cardVariants}
					whileHover={{
						boxShadow: "6px 6px 0px 0px var(--foreground)",
						transition: { duration: 0.3 },
					}}
				>
					<SectionHeader title="CO ROBIĘ NAJLEPIEJ" />
					<div>
						{specializationData.map((specialization, index) => (
							<SpecializationCard
								key={specialization.id}
								specialization={specialization}
								index={index}
							/>
						))}
					</div>
				</motion.div>

				{/* Hobbies Section */}
				<motion.div
					className="bg-background border-2 border-foreground rounded-md p-4 md:p-6"
					variants={cardVariants}
					whileHover={{
						boxShadow: "6px 6px 0px 0px var(--foreground)",
						transition: { duration: 0.3 },
					}}
				>
					<SectionHeader title="Hobby" />
					<div className="grid grid-cols-3 gap-4">
						{hobbiesData.map((hobby, index) => (
							<HobbyCard key={hobby.id} hobby={hobby} index={index} />
						))}
					</div>
				</motion.div>

				{/* Skills Section - spans 2 columns on larger screens */}
				<motion.div
					className="md:col-span-2 bg-background border-2 border-foreground rounded-md p-4 md:p-6"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: true }}
					whileHover={{
						boxShadow: "6px 6px 0px 0px var(--foreground)",
						transition: { duration: 0.3 },
						// Tylko boxShadow - bez scale żeby nie wpływać na dzieci
					}}
				>
					<SectionHeader title="Umiejętności" />
					<div className="flex flex-wrap gap-2 md:gap-3">
						{skillsData.map((skill, index) => (
							<SkillTag key={skill.id} skill={skill} index={index} />
						))}
					</div>
				</motion.div>

				{/* Contact Section */}
				<motion.div
					className="bg-background border-2 border-foreground rounded-md p-4 md:p-6 hover:shadow-[6px_6px_0px_0px_var(--foreground)] transition-shadow duration-300"
					variants={cardVariants}
				>
					<SectionHeader title="Kontakt" />
					<div className="space-y-3">
						{quickContactData.map((contact, index) => (
							<ContactItem key={contact.id} contact={contact} index={index} />
						))}
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default PersonalShowcase;
