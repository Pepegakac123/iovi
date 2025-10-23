export type Proces = {
	id: number;
	icon: string;
	bg_image: {
		mobile: string;
		desktop: string;
		alt: string;
	};
	title: string;
	description: string;
};
export type ProcessSectionProps = {
	subheadline: string;
	title: string;
	description: string;
	proces: Proces[];
};
export type AboutMeProps = {
	title: string;
	subheadline: string;
	description: string[];
	image: { src: string; alt: string };
};
export type ServicesProps = {
	servicesType: "main" | "featured";
	title: string;
	subheadline: string;
	description: string;
};
export type TargetAudienceDsc = {
	title: string;
	description: string;
};
export type TargetAudienceSectionProps = {
	title: string;
	targetAudienceDsc: TargetAudienceDsc[];
	image: {
		src: string;
		alt: string;
	};
};

export type WhyMeCard = {
	title: string;
	description: string;
	icon: string;
};
export type WhyMeProps = {
	title: string;
	cards: {
		left: WhyMeCard;
		centerTop: WhyMeCard;
		centerBottom: WhyMeCard;
		right: WhyMeCard;
	};
};

export type FeaturedBlogsProps = {
	title: string;
	subheadline: string;
	description: string;
};

export type FaqQuestion = {
	id: number;
	question: string;
	answer: string;
};
export type FaqProps = {
	subheadline: string;
	questions: FaqQuestion[];
};

export type ContactProps = {
	subheadline: string;
	title: string;
	description: string;
};

export interface ExperienceItem {
	id: number;
	period: string;
	position: string;
	company: string;
	description?: string;
}

export interface SpecializationItem {
	id: number;
	name: string;
	description: string;
}

export interface HobbyItem {
	id: number;
	name: string;
	icon: string;
}

export interface SkillTag {
	id: number;
	name: string;
	category: "style" | "technique" | "software";
}

export interface ContactQuick {
	id: number;
	type: string;
	icon: string;
	value: string;
	href?: string;
}

// ===========================================
// PERSONAL SHOWCASE COMPONENT PROPS TYPES
// ===========================================

export interface SectionHeaderProps {
	title: string;
	className?: string;
}

export interface ExperienceCardProps {
	experience: ExperienceItem;
	index: number;
}

export interface SpecializationCardProps {
	specialization: SpecializationItem;
	index: number;
}

export interface HobbyCardProps {
	hobby: HobbyItem;
	index: number;
}

export interface SkillTagProps {
	skill: SkillTag;
	index: number;
}

export interface ContactItemProps {
	contact: ContactQuick;
	index: number;
}

export interface PersonalShowcaseProps {
	experienceData?: ExperienceItem[];
	specializationData?: SpecializationItem[];
	hobbiesData?: HobbyItem[];
	skillsData?: SkillTag[];
	quickContactData?: ContactQuick[];
}
