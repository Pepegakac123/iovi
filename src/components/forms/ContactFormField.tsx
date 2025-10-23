import React from "react";
import { UseFormReturn } from "react-hook-form";
import * as motion from "motion/react-client";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	ContactFormData,
	fieldConfig,
	FieldName,
} from "@/lib/schemas/contact-form-schema";
import {
	FormVariant,
	getFormStyles,
	getFormMotion,
} from "@/lib/config/form-config";
// USUNIĘTY stary import: import { inputVariants, labelVariants, inputVariantsFast, labelVariantsFast } from "@/lib/variants";

// ===========================================
// TYPES
// ===========================================

interface BaseFormFieldProps {
	form: UseFormReturn<ContactFormData>;
	name: FieldName;
	variant: FormVariant;
}

interface TextFormFieldProps extends BaseFormFieldProps {
	type?: "text" | "email" | "tel";
	onValueChange?: (value: string) => string; // For phone formatting
}

interface TextareaFormFieldProps extends BaseFormFieldProps {
	rows?: number;
}

// ===========================================
// TEXT INPUT FIELD
// ===========================================

export function ContactFormField({
	form,
	name,
	variant,
	type = "text",
	onValueChange,
}: TextFormFieldProps) {
	const fieldConfigItem = fieldConfig[name];
	const styles = getFormStyles(variant);
	const motionPresets = getFormMotion(variant);

	// Safe access to optional properties
	const inputType = type || (fieldConfigItem as any).type || "text";
	const maxLength = (fieldConfigItem as any).maxLength;

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<motion.div initial="rest" whileHover="hover" whileFocus="focus">
					<FormItem>
						<motion.div
						// USUNIĘTE: variants={currentLabelVariants}
						// Używamy tylko hover animacji wewnętrznej
						>
							<FormLabel
								className={`text-foreground font-primary ${variant === "popup" ? "text-xs" : "text-sm"} font-bold uppercase inline-block ${variant === "popup" ? "" : "min-h-[2.5rem]"} flex items-end`}
							>
								{fieldConfigItem.label}
								{!fieldConfigItem.required &&
									(fieldConfigItem as any).helperText && (
										<span
											className={`${variant === "popup" ? "text-xs" : "text-xs"} text-muted-foreground font-normal normal-case ml-1`}
										>
											{(fieldConfigItem as any).helperText}
										</span>
									)}
							</FormLabel>
						</motion.div>

						<FormControl>
							<motion.div
							// USUNIĘTE: variants={currentInputVariants}
							// Używamy tylko hover animacji wewnętrznej
							>
								<Input
									type={inputType}
									placeholder={fieldConfigItem.placeholder}
									className={styles.input}
									maxLength={maxLength}
									value={field.value || ""}
									onChange={(e) => {
										const value = onValueChange
											? onValueChange(e.target.value)
											: e.target.value;
										field.onChange(value);
									}}
									onBlur={field.onBlur}
									name={field.name}
									ref={field.ref}
								/>
							</motion.div>
						</FormControl>

						<FormMessage />
					</FormItem>
				</motion.div>
			)}
		/>
	);
}

// ===========================================
// TEXTAREA FIELD
// ===========================================

export function ContactTextareaField({
	form,
	name,
	variant,
	rows = 4,
}: TextareaFormFieldProps) {
	const fieldConfigItem = fieldConfig[name];
	const styles = getFormStyles(variant);
	const motionPresets = getFormMotion(variant);

	// Safe access to optional properties
	const maxLength = (fieldConfigItem as any).maxLength;
	const textareaRows = (fieldConfigItem as any).rows || rows;

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<motion.div initial="rest" whileHover="hover" whileFocus="focus">
					<FormItem>
						<motion.div
						// USUNIĘTE: variants={currentLabelVariants}
						>
							<FormLabel
								className={`text-foreground font-primary ${variant === "popup" ? "text-xs" : "text-sm"} font-bold uppercase inline-block`}
							>
								{fieldConfigItem.label}
							</FormLabel>
						</motion.div>

						<FormControl>
							<motion.div
							// USUNIĘTE: variants={currentInputVariants}
							>
								<Textarea
									placeholder={fieldConfigItem.placeholder}
									className={styles.textarea}
									rows={textareaRows}
									maxLength={maxLength}
									{...field}
								/>
							</motion.div>
						</FormControl>

						<FormMessage />

						{/* Character counter for long text fields - smaller for popup */}
						{maxLength && field.value && (
							<div
								className={`${variant === "popup" ? "text-xs" : "text-xs"} text-muted-foreground text-right ${variant === "popup" ? "mt-0.5" : "mt-1"}`}
							>
								{field.value.length}/{maxLength}
							</div>
						)}
					</FormItem>
				</motion.div>
			)}
		/>
	);
}

// ===========================================
// SPECIALIZED PHONE FIELD
// ===========================================

interface ContactPhoneFieldProps
	extends Omit<TextFormFieldProps, "type" | "onValueChange"> {
	formatPhone: (value: string) => string;
}

export function ContactPhoneField({
	form,
	name,
	variant,
	formatPhone,
}: ContactPhoneFieldProps) {
	return (
		<ContactFormField
			form={form}
			name={name}
			variant={variant}
			type="tel"
			onValueChange={formatPhone}
		/>
	);
}

// ===========================================
// FORM SECTION WRAPPER
// ===========================================

interface FormSectionProps {
	children: React.ReactNode;
	variant: FormVariant;
	className?: string;
}

export function FormSection({
	children,
	variant,
	className = "",
}: FormSectionProps) {
	const styles = getFormStyles(variant);

	return (
		<motion.div
			className={`${styles.gridCols} ${variant === "popup" ? "gap-2" : "gap-4"} ${className}`}
			// USUNIĘTE: variants={variant === "popup" ? inputVariantsFast : inputVariants}
			// Teraz animacje są kontrolowane na wyższym poziomie
		>
			{children}
		</motion.div>
	);
}

// ===========================================
// FORM FIELD WRAPPER WITH ANIMATIONS
// ===========================================

interface AnimatedFieldWrapperProps {
	children: React.ReactNode;
	variant: FormVariant;
}

export function AnimatedFieldWrapper({
	children,
	variant,
}: AnimatedFieldWrapperProps) {
	// USUNIĘTE: const itemVariants = variant === "popup" ? inputVariantsFast : inputVariants;
	// Teraz animacje są kontrolowane przez parent

	return <motion.div>{children}</motion.div>;
}

// ===========================================
// CONVENIENCE EXPORTS
// ===========================================

// Pre-configured field components for common use cases
export const NameField = (props: Omit<TextFormFieldProps, "name">) => (
	<ContactFormField {...props} name="name_surname" />
);

export const EmailField = (
	props: Omit<TextFormFieldProps, "name" | "type">,
) => <ContactFormField {...props} name="email" type="email" />;

export const PhoneField = (props: Omit<ContactPhoneFieldProps, "name">) => (
	<ContactPhoneField {...props} name="phone_number" />
);

export const DescriptionField = (
	props: Omit<TextareaFormFieldProps, "name">,
) => <ContactTextareaField {...props} name="project_description" />;
